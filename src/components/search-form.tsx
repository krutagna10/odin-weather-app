import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FormProps {
  fetchWeather: (city: string) => void;
}

function SearchForm({ fetchWeather }: FormProps) {
  const [city, setCity] = useState("");

  function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    fetchWeather(city);
  }

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        onChange={handleCityChange}
        placeholder="Enter your city"
        value={city}
      />
      <Button>Get Weather</Button>
    </form>
  );
}
export default SearchForm;
