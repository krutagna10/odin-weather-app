import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";

interface WeatherTableProps {
  address: string;
  description: string;
  timezone: string;
}

function WeatherTable({ address, description, timezone }: WeatherTableProps) {
  return (
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
            <TableCell>{address}</TableCell>
            <TableCell>{description}</TableCell>
            <TableCell>{timezone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
}

export default WeatherTable;
