import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { searchParamsLoader } from "@/lib/search-params";
import { useQueryStates } from "nuqs";

export function SortResults() {
  const [{ sort }, setSearchParams] = useQueryStates(searchParamsLoader);

  return (
    <Select value={sort} onValueChange={(sort) => setSearchParams({ sort })}>
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
