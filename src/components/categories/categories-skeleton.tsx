import { T_Category } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ArrowRightIcon, CalendarClockIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export async function CategoriesSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {[...new Array(5)].map((_, i) => (
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
        </Card>
      ))}
    </div>
  );
}
