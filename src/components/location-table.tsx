import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";

interface LocationTableProps {
  address: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

function LocationTable({
  address,
  latitude,
  longitude,
  timezone,
}: LocationTableProps) {
  return (
    <Table className="w-full">
      <TableCaption>Location Details</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Address</TableHead>
          <TableHead>Latitude</TableHead>
          <TableHead>Longitude</TableHead>
          <TableHead>Timezone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{address}</TableCell>
          <TableCell>{latitude}</TableCell>
          <TableCell>{longitude}</TableCell>
          <TableCell>{timezone}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default LocationTable;
