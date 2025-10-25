"use client";

import { useTheme } from "next-themes";
import { Skeleton } from "./ui/skeleton";

export function ProductHuntImage() {
  const { resolvedTheme } = useTheme();
  if (!resolvedTheme) return <Skeleton className="w-40 h-10" />;
  return (
    <img
      src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=952865&theme=${resolvedTheme}&t=1745089405924`}
      alt="GroupVoyage - Compare prices among groups and join cheapest weekend trips | Product Hunt"
      className="w-40 h-10"
    />
  );
}
