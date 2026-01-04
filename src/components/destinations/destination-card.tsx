import Link from "next/link";
import { CalendarClock, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { T_Location } from "@/lib/types";
import { BadgeList } from "../ui/badge-list";

interface DestinationProps {
  name: string;
  slug: string;
  eventsCount: number;
  groupsCount: number;
  locations: Pick<T_Location, "city" | "slug" | "id">[];
  showLocations?: boolean;
}

export function DestinationCard({
  name,
  slug,
  eventsCount,
  groupsCount,
  locations,
  showLocations = true,
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
              <span className="text-muted-foreground hidden sm:block">
                {eventsCount === 1 ? "Trip" : "Trips"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium">{groupsCount}</span>
              </div>
              <span className="text-muted-foreground hidden sm:block">
                {groupsCount === 1 ? "Group" : "Groups"}
              </span>
            </div>
          </div>
        </CardContent>
        {showLocations ? (
          <CardFooter className="px-4 pb-3">
            {locations.length > 0 ? (
              <BadgeList items={locations} itemTitle={"city"}></BadgeList>
            ) : null}
          </CardFooter>
        ) : null}
      </Card>
    </Link>
  );
}
