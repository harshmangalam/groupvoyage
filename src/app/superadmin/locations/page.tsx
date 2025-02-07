import { getLocations } from "@/actions/locations";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreateLocationDialog } from "./create-location-dialog";
import { EditLocationDialog } from "./edit-location-dialog";
import { CopyToClipboard } from "@/components/copy-to-clipboard";

export default async function Locations() {
  const locations = await getLocations();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Locations
          <CreateLocationDialog />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>City</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {locations.map((location) => (
              <TableRow key={location.id}>
                <TableCell>{location.city}</TableCell>
                <TableCell>{location.country}</TableCell>
                <TableCell>{location.slug}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <EditLocationDialog location={location} />
                    <CopyToClipboard text={location.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
