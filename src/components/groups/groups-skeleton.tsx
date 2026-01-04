import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function GroupsSkeleton() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="w-full overflow-hidden">
          <CardContent className="p-0" aria-hidden>
            {/* image area */}
            <div className="relative w-full aspect-video">
              <Skeleton className="w-full h-full rounded-t-lg" />
            </div>

            {/* text area */}
            <div className="p-4">
              <Skeleton className="h-5 w-3/4 mb-2 rounded" />
              <Skeleton className="h-4 w-1/2 rounded" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
