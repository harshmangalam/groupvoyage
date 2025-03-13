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
import { CreateDialog } from "./create-dialog";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { ExternalLinkIcon } from "lucide-react";
import { getInstagramHandler, getWebsiteOrigin } from "@/lib/utils";

export default async function Locations() {
  const groups = await prisma.group.findMany({
    include: {
      _count: {
        select: {
          events: true,
        },
      },
      locations: {
        select: {
          id: true,
          city: true,
        },
      },
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
              <TableHead>Locations</TableHead>
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
            {groups.map((group) => (
              <TableRow key={group.id}>
                <TableCell className="min-w-80">
                  <div className="flex items-center gap-2">
                    {group.posterUrls && (
                      <Image
                        src={group.posterUrls[0]}
                        width={200}
                        height={200}
                        className="aspect-video w-auto h-16"
                        alt={group.name}
                        style={{
                          maxWidth: "100%",
                          height: "auto"
                        }} />
                    )}
                    <p>{group.name}</p>
                  </div>
                </TableCell>

                <TableCell className="min-w-48">
                  <div className="flex flex-wrap">
                    {group?.locations.map((location) => (
                      <Badge key={location.id}>{location.city}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  {group.source && (
                    <a
                      target="_blank"
                      className="hover:underline flex gap-2 items-center"
                      href={group.source}
                    >
                      {getWebsiteOrigin(group.source)}
                      <ExternalLinkIcon size={16} />
                    </a>
                  )}
                </TableCell>
                <TableCell>
                  <Badge>{group._count.events}</Badge>
                </TableCell>
                <TableCell className="min-w-44">{group.phone}</TableCell>
                <TableCell>
                  {group.instagram && (
                    <a
                      target="_blank"
                      className="hover:underline flex gap-2 items-center"
                      href={group.instagram}
                    >
                      {getInstagramHandler(group.instagram)}
                      <ExternalLinkIcon size={16} />
                    </a>
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant={group.active ? "default" : "destructive"}>
                    {group.active ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell className="min-w-44">
                  {group.createdAt.toDateString()}
                </TableCell>
                <TableCell className="min-w-48">
                  {group.updatedAt.toDateString()}
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
