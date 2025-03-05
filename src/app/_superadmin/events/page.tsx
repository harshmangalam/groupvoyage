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
import { prisma } from "@/lib/db";
import { ExternalLinkIcon } from "lucide-react";

export default async function Locations() {
  const events = await prisma.event.findMany({
    include: {
      location: {
        select: {
          id: true,
          slug: true,
          city: true,
        },
      },
      group: {
        select: {
          id: true,
          slug: true,
          name: true,
        },
      },
    },
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Events
          {/* <CreateDialog /> */}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Durations</TableHead>
              <TableHead>Price</TableHead>

              <TableHead>Archived</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Group</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="min-w-80">{event.title}</TableCell>
                <TableCell className="min-w-48">{event.slug}</TableCell>
                <TableCell className="min-w-48">
                  <a
                    target="_blank"
                    className="hover:underline flex gap-2 items-center"
                    href={event.source}
                  >
                    Event details
                    <ExternalLinkIcon size={16} />
                  </a>
                </TableCell>
                <TableCell>{event.durations}</TableCell>
                <TableCell className="min-w-24">
                  {event.price ? `Rs. ${event.price}` : "N/A"}
                </TableCell>
                <TableCell>
                  <Badge variant={event.isArchived ? "destructive" : "default"}>
                    {event.isArchived ? "Archived" : "Unarchived"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{event.location.city}</Badge>
                </TableCell>

                <TableCell className="min-w-44">{event.group.name}</TableCell>

                <TableCell className="min-w-44">
                  {event.createdAt.toDateString()}
                </TableCell>
                <TableCell className="min-w-48">
                  {event.updatedAt.toDateString()}
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
