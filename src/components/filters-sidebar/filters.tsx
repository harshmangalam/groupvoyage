import { Suspense } from "react";
import { CategoriesFilter } from "../filters/categories/categories-filter";
import { DestinationsFilter } from "../filters/destinations/destinations-filter";
import { DurationsFilter } from "../filters/durations-filter";
import { GroupsFilter } from "../filters/groups/groups-filter";
import { LocationsFilter } from "../filters/locations/locations-filter";
import { Separator } from "../ui/separator";
import { PriceRangeSlider } from "./price-range-slider";
import { Skeleton } from "../ui/skeleton";

export function Filters() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            Starting Location
          </label>
          <Suspense fallback={<Skeleton className="h-10 w-full" />}>
            <LocationsFilter
              buttonProps={{ className: "w-full", variant: "outline" }}
            />
          </Suspense>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            Duration
          </label>
          <Suspense fallback={<Skeleton className="h-10 w-full" />}>
            <DurationsFilter
              buttonProps={{ className: "w-full", variant: "outline" }}
            />
          </Suspense>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            Category
          </label>
          <Suspense fallback={<Skeleton className="h-10 w-full" />}>
            <CategoriesFilter
              buttonProps={{ className: "w-full", variant: "outline" }}
            />
          </Suspense>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            Destination
          </label>
          <Suspense fallback={<Skeleton className="h-10 w-full" />}>
            <DestinationsFilter
              buttonProps={{ className: "w-full", variant: "outline" }}
            />
          </Suspense>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            Groups
          </label>
          <Suspense fallback={<Skeleton className="h-10 w-full" />}>
            <GroupsFilter
              buttonProps={{ className: "w-full", variant: "outline" }}
            />
          </Suspense>
        </div>
      </div>
      <Separator />
      <Suspense fallback={<Skeleton className="h-11 w-full" />}>
        <PriceRangeSlider />
      </Suspense>
    </div>
  );
}
