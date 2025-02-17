import { useState, useEffect } from "react";

import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";

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

  const fetchWeather = () => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data not found");
        }
        return response.json();
      })
      .then(({ address, description, timezone }) => {
        setWeather({ address, description, timezone });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="min-w-xs">
      <h1>Weather App</h1>
      <Table className="w-full">
        <TableCaption>Weather Details</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Timezone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{weather.address}</TableCell>
            <TableCell>{weather.description}</TableCell>
            <TableCell>{weather.timezone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Weather;
