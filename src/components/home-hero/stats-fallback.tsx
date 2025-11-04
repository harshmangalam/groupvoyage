import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function StatsFallback() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4">
      {[...new Array(5)].map((_, i) => (
        <Card className="p-4 w-full" key={i}>
          <div className="flex flex-col gap-2">
            {/* Title skeleton */}
            <Skeleton className="h-9 w-1/2" /> {/* roughly a heading size */}
            {/* Subtitle skeleton */}
            <Skeleton className="h-6 w-3/4" /> {/* smaller subtitle line */}
          </div>
        </Card>
      ))}
    </div>
  );
}
