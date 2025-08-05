import { T_Category } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ArrowRightIcon, CalendarClockIcon } from "lucide-react";
import { Badge } from "../ui/badge";

export function CategoryCard({
  category,
  eventCount,
}: {
  category: Partial<T_Category>;
  eventCount: number;
}) {
  return (
    <Link
      key={category.id}
      href={`/trips/?categories=${category.slug}`}
      className="group block"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
        <CardHeader className="p-3 px-4 ">
          <h3 className="font-bold tracking-tight capitalize">
            {category.name}
          </h3>
        </CardHeader>
        <CardContent className="flex items-center justify-between pt-0">
          {/* Enhanced count with icon and badge */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <CalendarClockIcon className="h-4 w-4 text-primary" />
              <span className="font-medium">{eventCount}</span>
            </div>
            <span className="text-muted-foreground">
              {eventCount === 1 ? "Trip" : "Trips"}
            </span>
          </div>
          <ArrowRightIcon className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
          <span className="sr-only">
            View events in {category.name} category
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
