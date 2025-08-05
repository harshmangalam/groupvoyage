import SearchInput from "@/components/search-input";
import { SortCategories } from "./sort-categories";
import { Badge } from "@/components/ui/badge";

export function CategoryHeader({ count }: { count?: number }) {
  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Event Categories
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Explore events by category and find your next experience.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Badge
          variant="secondary"
          className="px-4 py-1 text-base rounded-md shadow-sm"
        >
          <span className="text-primary mr-1">{count} </span> Categories
        </Badge>
        <div className="flex items-center gap-4">
          <div className="max-w-md w-full">
            <SearchInput />
          </div>
          <SortCategories />
        </div>
      </div>
    </div>
  );
}
