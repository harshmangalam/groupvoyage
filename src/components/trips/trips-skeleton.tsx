import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Skeleton card that visually matches TripCard layout.
 */
export function TripSkeletonCard() {
  return (
    <Card className="shadow-none mx-auto overflow-hidden w-full">
      {/* Image section */}
      <div className="relative w-full h-52 overflow-hidden">
        <Skeleton className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 w-16 h-6 rounded bg-muted animate-pulse" />
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <Skeleton className="h-5 w-3/4 mb-2" />

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>

        {/* Duration */}
        <div className="flex items-center mb-2">
          <Skeleton className="w-5 h-5 mr-2 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Location */}
        <div className="flex items-center mb-2">
          <Skeleton className="w-5 h-5 mr-2 rounded-full" />
          <Skeleton className="h-4 w-28" />
        </div>

        {/* Group */}
        <div className="flex items-center mb-2">
          <Skeleton className="w-5 h-5 mr-2 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Skeleton className="h-6 w-2/5 rounded-full" />
          <Skeleton className="h-6 w-8 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Grid of TripSkeletonCard, useful as Suspense fallback.
 */
export default function TripsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <TripSkeletonCard key={i} />
      ))}
    </div>
  );
}
