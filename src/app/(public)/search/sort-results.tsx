import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parseAsString, useQueryState } from "nuqs";
import { useTransition } from "react";

export function SortResults() {
  const [isPending, startTransition] = useTransition();
  const [sort, setSearchParams] = useQueryState(
    "sort",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      startTransition,
    })
  );

  return (
    <Select
      value={sort}
      onValueChange={(sort) => {
        startTransition(() => {
          setSearchParams(sort);
        });
      }}
    >
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="popular">Most Popular</SelectItem>
        <SelectItem value="price-low">Price: Low to High</SelectItem>
        <SelectItem value="price-high">Price: High to Low</SelectItem>
        <SelectItem value="rating">Highest Rated</SelectItem>
        <SelectItem value="duration">Duration</SelectItem>
      </SelectContent>
    </Select>
  );
}
