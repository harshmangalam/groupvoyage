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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreateDialog } from "./create-dialog";

export default async function Locations() {
  const groups = await db.query.groupsTable.findMany({
    with: {
      location: {
        columns: {
          city: true,
        },
      },
    },
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
              <TableHead>Orgainser</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Events</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((data) => (
              <TableRow key={data.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>{data.name.slice(0, 2)}</AvatarFallback>
                      <AvatarImage src={data.posterUrl ?? ""} />
                    </Avatar>
                    <p>{data.name}</p>
                  </div>
                </TableCell>

                <TableCell>{data.location.city}</TableCell>
                <TableCell>{data.organizer}</TableCell>
                <TableCell>{data.source}</TableCell>
                <TableCell>
                  <Badge>{data.eventsCount}</Badge>
                </TableCell>
                <TableCell>{data.createdAt.toLocaleString()}</TableCell>
                <TableCell>{data.updateAt?.toLocaleString()}</TableCell>

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
