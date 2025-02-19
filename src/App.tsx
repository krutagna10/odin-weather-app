import { ThemeProvider } from "./components/theme-provider";
import { useState, useEffect } from "react";
import SearchForm from "./components/search-form";
import LocationTable from "./components/location-table";
import Header from "./components/header";
import WeatherTable from "./components/weather-table";

interface Location {
  address: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

interface Weather {
  datetime: string;
  conditions: string;
  temp: number;
  humidity: number;
  icon: string;
}

function App() {
  const [location, setLocation] = useState<Location>({} as Location);
  const [weatherForecast, setWeatherForecast] = useState<Weather[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = async (city: string) => {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=2YE9H3ZL4KP8KRCHRXJ796YX2&contentType=json`;
    setIsLoading(true);

    try {
      const response = await fetch(URL, { mode: "cors" });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      const locationData = {
        address: data.resolvedAddress,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
      };
      const weatherForecastData = data.days.map(
        ({ datetime, conditions, temp, humidity, icon }: Weather) => {
          return {
            datetime,
            conditions,
            temp,
            humidity,
            icon,
          };
        },
      );
      setLocation(locationData);
      setWeatherForecast(weatherForecastData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("mumbai");
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        {isLoading ? (
          <div>
            <h2>Loading...</h2>
          </div>
        ) : (
          <section className="py-4">
            <div className="space-y-4 px-4 md:min-w-2xl lg:min-w-4xl xl:min-w-6xl">
              <Header />
              <SearchForm fetchWeather={fetchWeather} />
              <LocationTable {...location} />
              <WeatherTable weatherForecast={weatherForecast} />
            </div>
          </section>
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
