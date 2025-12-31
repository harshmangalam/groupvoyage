import { Skeleton } from "@/components/ui/skeleton";

export function HomeHeroSkeleton() {
  return (
    <div>
      {/* Heading + Description */}
      <div className="text-center mb-6 max-w-3xl mx-auto w-full space-y-4">
        {/* AnimatedHeading (H1) */}
        <Skeleton className="h-10 md:h-12 lg:h-14 w-3/4 mx-auto" />

        {/* Rotating location placeholder */}
        <Skeleton className="h-8 w-44 mx-auto" />

        {/* AnimatedDescription */}
        <Skeleton className="h-5 w-2/3 mx-auto" />
        <Skeleton className="h-5 w-1/2 mx-auto" />
      </div>
    </div>
  );
}
