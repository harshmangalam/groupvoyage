"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export function ProductHuntBadge({
  className = "w-64 h-14",
}: {
  className?: string;
}) {
  const { theme } = useTheme();
  const [clientTheme, setClientTheme] = useState<string | null>(null);

  useEffect(() => {
    if (theme) setClientTheme(theme);
  }, [theme]);

  if (!clientTheme) {
    return <Skeleton className="w-64 h-14 rounded-lg" />;
  }

  return (
    <a
      href="https://www.producthunt.com/posts/groupvoyage?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-groupvoyage"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=945907&theme=${clientTheme}&t=1742934728713`}
        alt="GroupVoyage - Compare prices among groups and join cheapest weekend trips | Product Hunt"
        className={className}
      />
    </a>
  );
}
