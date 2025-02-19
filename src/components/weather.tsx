import { useState, useEffect } from "react";
import WeatherForm from "./weather-form";
import WeatherTable from "./weather-table";

const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Mumbai?unitGroup=us&key=2YE9H3ZL4KP8KRCHRXJ796YX2&contentType=json";

interface Weather {
  address: string;
  description: string;
  timezone: string;
}
function Weather() {
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchWeather = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL, { mode: "cors" });
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const { address, description, timezone } = await response.json();
      setWeather({ address, description, timezone });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="min-w-xs space-y-4">
      <h1>Weather App</h1>
      <WeatherForm />
      <WeatherTable {...weather} />
    </div>
  );
}
export default Weather;
