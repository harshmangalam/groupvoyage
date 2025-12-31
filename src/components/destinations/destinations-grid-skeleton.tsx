import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function DestinationsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {[...new Array(8)].map((_, i) => (
        <Card key={i} className="h-full">
          <CardHeader className="p-3 px-4 ">
            <Skeleton className="h-6 w-1/2"></Skeleton>
          </CardHeader>
          <CardContent className="px-4">
            <div className="flex gap-6 items-center">
              <Skeleton className="h-5 w-2/5" />
              <Skeleton className="h-5 w-2/5" />
            </div>
          </CardContent>
          <CardFooter className="px-4 pb-3 flex gap-2 items-center">
            <Skeleton className="w-1/2 h-[22px]" />
            <Skeleton className="w-7 h-[22px]" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
