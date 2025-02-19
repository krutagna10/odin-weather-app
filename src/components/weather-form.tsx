import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function WeatherForm() {
  const [city, setCity] = useState("");

  function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function handleSubmit()

  return (
    <form className="flex gap-4">
      <Input type="text" onChange={handleCityChange} placeholder="Enter your city" />
      <Button>Get Weather</Button>
    </form>
  );
}
export default WeatherForm;
