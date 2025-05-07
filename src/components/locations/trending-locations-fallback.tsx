import { Skeleton } from "../ui/skeleton";

export function TrendingLocationsFallback() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {[...new Array(2)].map((_, i) => (
        <Skeleton key={i} className="w-full h-64 rounded-md"></Skeleton>
      ))}
    </div>
  );
}
