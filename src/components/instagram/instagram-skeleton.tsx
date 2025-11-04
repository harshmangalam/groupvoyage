import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Skeleton loader for InstagramProfileCard.
 */
export function InstagramProfileSkeletonCard() {
  return (
    <Card className="h-auto w-full max-w-md">
      <CardContent className="p-4 space-y-3">
        {/* Username and icon */}
        <div className="flex items-center gap-3">
          <div className="space-y-1 flex-1 overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
          </div>
        </div>

        {/* Followers / Following / Posts */}
        <div className="flex justify-between gap-6">
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-full rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Displays 3 skeleton cards for Instagram profile section fallback.
 */
export default function InstagramProfileSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <InstagramProfileSkeletonCard key={i} />
      ))}
    </div>
  );
}
