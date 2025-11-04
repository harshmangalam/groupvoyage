"use client";

import { useTheme } from "next-themes";

export function ProductHuntImage() {
  const { resolvedTheme } = useTheme();
  return (
    <a
      href="https://www.producthunt.com/posts/groupvoyage-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-groupvoyage&#0045;2"
      target="_blank"
    >
      <img
        suppressHydrationWarning
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=952865&theme=${resolvedTheme}&t=1745089405924`}
        alt="GroupVoyage - Compare prices among groups and join cheapest weekend trips | Product Hunt"
        className="w-40 h-10"
      />
    </a>
  );
}
