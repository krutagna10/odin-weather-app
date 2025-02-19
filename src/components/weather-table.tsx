interface WeatherTableProps {
  weatherForecast: {
    datetime: string;
    conditions: string;
    temp: number;
    humidity: number;
    icon: string;
  }[];
}

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
} from "./ui/table";

function WeatherTable({ weatherForecast }: WeatherTableProps) {
  console.log(weatherForecast[0]);
  return (
    <Table>
      <TableCaption>Weather Details</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Conditions</TableHead>
          <TableHead>Temperature</TableHead>
          <TableHead>Humidity</TableHead>
          <TableHead>Icon</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {weatherForecast.map((weather, index) => (
          <TableRow key={index}>
            <TableCell>{weather.datetime}</TableCell>
            <TableCell>{weather.conditions}</TableCell>
            <TableCell>{weather.temp}</TableCell>
            <TableCell>{weather.humidity}</TableCell>
            <TableCell>
              <img className="size-16" src={`./assets/${weather.icon}.svg`} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default WeatherTable;
