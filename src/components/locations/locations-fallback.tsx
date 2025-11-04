import { Skeleton } from "../ui/skeleton";

export function LocationsFallback() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {[...new Array(5)].map((_, i) => (
        <Skeleton key={i} className="w-full h-64 rounded-md"></Skeleton>
      ))}
    </div>
  );
}
