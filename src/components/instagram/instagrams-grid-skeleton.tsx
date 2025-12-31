import { InstagramProfileSkeletonCard } from "./instagram-skeleton";

export function InstagramsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {[...new Array(6)].map((_, i) => (
        <InstagramProfileSkeletonCard key={i} />
      ))}
    </div>
  );
}
