import { Skeleton } from "../ui/skeleton";

export function LocationsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
      {[...new Array(6)].map((_, i) => (
        <Skeleton key={i} className="w-full h-64 rounded-md"></Skeleton>
      ))}
    </div>
  );
}
