import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { db } from "@/db/connection";
import { sql } from "drizzle-orm";
import { eventsTable } from "@/db/schema";
import { CreateDialog } from "./create-dialog";
import Image from "next/image";

export default async function Locations() {
  const groups = await db.query.groupsTable.findMany({
    extras(fields) {
      return {
        eventsCount: sql<number>`(
            SELECT COUNT(*) FROM ${eventsTable} 
            WHERE ${eventsTable.groupId} = ${fields.id}
          )`.as("events_count"),
      };
    },
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Groups
          <CreateDialog />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Events</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Instagram</TableHead>
              <TableHead>Active</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((data) => (
              <TableRow key={data.id}>
                <TableCell className="min-w-48">
                  <div className="flex items-center gap-2">
                    {data.posterUrl && (
                      <Image
                        src={data.posterUrl}
                        width={100}
                        height={100}
                        className="aspect-video w-auto h-12"
                        alt={data.name}
                      />
                    )}
                    <p>{data.name}</p>
                  </div>
                </TableCell>

                <TableCell className="min-w-32">
                  {data?.location?.city}
                </TableCell>
                <TableCell>{data.source}</TableCell>
                <TableCell>
                  <Badge>{data.eventsCount}</Badge>
                </TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>{data.instagram}</TableCell>
                <TableCell>
                  <Badge variant={data.active ? "default" : "destructive"}>
                    {data.active ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell className="min-w-44">
                  {data.createdAt.toDateString()}
                </TableCell>
                <TableCell className="min-w-48">
                  {data.updateAt?.toDateString()}
                </TableCell>

                <TableCell>
                  <div className="flex space-x-2">
                    {/* <EditLocationDialog location={location} /> */}
                    {/* <CopyToClipboard text={location.id} /> */}
                    {/* <DeleteLocation location={location} /> */}
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
