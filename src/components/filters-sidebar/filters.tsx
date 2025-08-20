import { CategoriesFilter } from "../filters/categories/categories-filter";
import { DestinationsFilter } from "../filters/destinations/destinations-filter";
import { DurationsFilter } from "../filters/durations-filter";
import { LocationsFilter } from "../filters/locations/locations-filter";

export function Filters() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          Starting Location
        </label>
        <LocationsFilter
          buttonProps={{ className: "w-full", variant: "outline" }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          Duration
        </label>
        <DurationsFilter
          buttonProps={{ className: "w-full", variant: "outline" }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          Category
        </label>
        <CategoriesFilter
          buttonProps={{ className: "w-full", variant: "outline" }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          Destination
        </label>
        <DestinationsFilter
          buttonProps={{ className: "w-full", variant: "outline" }}
        />
      </div>
      {/* <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                          Sort by
                        </label>
                        <SortBy
                          buttonProps={{ className: "w-full", variant: "outline" }}
                        />
                      </div> */}
    </div>
  );
}
