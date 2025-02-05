import Link from "next/link";
import { getLocations, deleteLocation } from "@/app/actions/locations";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function Locations() {
  const locations = await getLocations();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Locations
          <Link href="/superadmin/locations/new">
            <Button>Add New Location</Button>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {locations.map((location) => (
              <TableRow key={location.id}>
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.country}</TableCell>
                <TableCell>{location.slug}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <CopyButton text={location.id} />
                    <DeleteButton id={location.id} />
                    <Link href={`/locations/${location.id}/edit`}>
                      <Button variant="outline">Edit</Button>
                    </Link>
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

function CopyButton({ text }: { text: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Button variant="outline" onClick={handleCopy}>
      Copy ID
    </Button>
  );
}

function DeleteButton({ id }: { id: string }) {
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this location?")) {
      await deleteLocation(id);
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  );
}
