import { Skeleton } from "../ui/skeleton";

export function TrendingLocationsFallback() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...new Array(4)].map((_, i) => (
        <Skeleton key={i} className="w-full h-64 rounded-md"></Skeleton>
      ))}
    </div>
  );
}
