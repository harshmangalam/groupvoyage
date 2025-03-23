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
        <CardHeader className="pb-2">
          <h3 className="font-bold tracking-tight">{name}</h3>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2 text-sm">
              <CalendarClock className="h-4 w-4 text-primary" />
              <span className="font-medium">{eventsCount}</span>
              <span className="text-muted-foreground">
                {eventsCount === 1 ? "Trip" : "Trips"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">{groupsCount}</span>
              <span className="text-muted-foreground">
                {groupsCount === 1 ? "Group" : "Groups"}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {locations.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {locations.map((location) => (
                <Badge
                  className="rounded-md"
                  variant={"secondary"}
                  key={location.id}
                >
                  {location.city}
                </Badge>
              ))}
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
