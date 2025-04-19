import { Skeleton } from "../ui/skeleton";

export function StatsFallback() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4">
      {[...new Array(5)].map((_, i) => (
        <Skeleton key={i} className="w-full h-[98px]" />
      ))}
    </div>
  );
}
