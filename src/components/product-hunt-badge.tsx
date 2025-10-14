"use client";
import { useTheme } from "next-themes";
import { Skeleton } from "./ui/skeleton";

export function ProductHuntBadge({
  className = "w-64 h-14 rounded-xl",
}: {
  className?: string;
}) {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return <Skeleton className={className} />;
  }

  return (
    <a
      href="https://www.producthunt.com/posts/groupvoyage-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-groupvoyage&#0045;2"
      target="_blank"
    >
      <img
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=952865&theme=${resolvedTheme}&t=1745089405924`}
        alt="GroupVoyage - Compare prices among groups and join cheapest weekend trips | Product Hunt"
        className={className}
      />
    </a>
  );
}
