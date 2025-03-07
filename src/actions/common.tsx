"use server";

import { prisma } from "@/lib/db"; // Adjust the path as needed
import { getEventList } from "./event";
import { cache } from "react";
import { getGroupList } from "./group";

export const getRandomPosters = cache(async () => {
  const groupPosters = await prisma.group.findMany({
    select: { posterUrls: true },
    take: 3,
    orderBy: { id: "asc" },
  });

  const locationPosters = await prisma.location.findMany({
    select: { posterUrl: true },
    take: 3,
    orderBy: { id: "asc" },
  });

  const posters = [...groupPosters.flatMap((p) => p.posterUrls)];
  const locationsPoster = locationPosters.map((p) => p.posterUrl);

  const randomPosters = [
    ...locationsPoster,
    ...posters.sort(() => Math.random() - 0.5).slice(0, 1),
  ].slice(0, 3);
  return randomPosters;
});

export const getPublicStats = cache(async () => {
  const [eventsCount, groupsCount, locationsCount] = await Promise.all([
    prisma.event.count(),
    prisma.group.count(),
    prisma.location.count(),
  ]);

  return {
    eventsCount,
    groupsCount,
    locationsCount,
  };
});

export const getSearchResults = cache(
  async ({
    search,
    durations,
    locationSlug,
  }: {
    search?: string;
    durations?: string;
    locationSlug?: string;
  }) => {
    if (!search) return {};
    return {
      events: await getEventList({ search, durations, locationSlug }),
      groups: await getGroupList({ search, locationSlug }),
    };
  }
);
