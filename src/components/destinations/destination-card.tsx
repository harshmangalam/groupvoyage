import Link from "next/link";
import { CalendarClock, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { T_Location } from "@/lib/types";
import { Badge } from "../ui/badge";

interface DestinationProps {
  name: string;
  slug: string;
  eventsCount: number;
  groupsCount: number;
  locations: Pick<T_Location, "city" | "slug" | "id">[];
}

export function DestinationCard({
  name,
  slug,
  eventsCount,
  groupsCount,
  locations,
}: DestinationProps) {
  return (
    <Link href={`/destinations/${slug}`}>
      <Card className="h-full transition-all hover:shadow-sm hover:bg-muted shadow-none">
        <CardHeader className="p-3 px-4 ">
          <h3 className="font-bold tracking-tight">{name}</h3>
        </CardHeader>
        <CardContent className="px-4">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <CalendarClock className="h-4 w-4 text-primary" />
                <span className="font-medium">{eventsCount}</span>
              </div>
              <span className="text-muted-foreground">
                {eventsCount === 1 ? "Trip" : "Trips"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium">{groupsCount}</span>
              </div>
              <span className="text-muted-foreground">
                {groupsCount === 1 ? "Group" : "Groups"}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-3">
          {locations.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {locations.slice(0, 1).map((location) => (
                <Badge variant="secondary" key={location.id}>
                  {location.city}
                </Badge>
              ))}
              {locations.length > 1 && (
                <Badge variant="destructive">+{locations.length - 1}</Badge>
              )}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              No locations yet
            </p>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
