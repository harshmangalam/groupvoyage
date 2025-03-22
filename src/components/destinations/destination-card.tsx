import Link from "next/link";
import { CalendarClock, MapPin, Users } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { T_Location } from "@/lib/types";

interface DestinationProps {
  name: string;
  slug: string;
  eventsCount: number;
  groupsCount: number;
  locations: Pick<T_Location, "city" | "slug">[];
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
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold tracking-tight">{name}</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <CalendarClock className="h-4 w-4 text-primary" />
              <span className="font-medium">{eventsCount}</span>
              <span className="text-muted-foreground">
                {eventsCount === 1 ? "Event" : "Events"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">{groupsCount}</span>
              <span className="text-muted-foreground">
                {groupsCount === 1 ? "Group" : "Groups"}
              </span>
            </div>

            <div className="pt-1">
              <div className="mb-1 flex items-center gap-1 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">Top Locations</span>
              </div>

              <div className="space-y-1 pl-6">
                {locations.length > 0 ? (
                  locations.slice(0, 3).map((location, index) => (
                    <p
                      key={index}
                      className={cn(
                        "text-sm",
                        index === 0
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {location.city}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    No locations yet
                  </p>
                )}

                {locations.length > 3 && (
                  <p className="text-xs text-muted-foreground">
                    +{locations.length - 3} more
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
