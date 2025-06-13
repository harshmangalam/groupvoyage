"use server";

import { prisma } from "@/lib/db"; // Adjust the path as needed
import { getEventList } from "./event";
import { cache } from "react";
import { getGroupList } from "./group";
import { getInstagramProfileList } from "./instagram-profile";
import { getDestinationList } from "./destinations";
import { getLocations } from "./location";
import { DurationFilter } from "@/lib/types";

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
  return randomPosters as string[];
});

export const getPublicStats = cache(async () => {
  const [
    eventsCount,
    groupsCount,
    locationsCount,
    instagramProfilesCount,
    destinationsCount,
  ] = await Promise.all([
    prisma.event.count({ where: { isArchived: false } }),
    prisma.group.count({ where: { active: true } }),
    prisma.location.count({ where: { active: true } }),
    prisma.instagramProfile.count(),
    prisma.destination.count({ where: { active: true } }),
  ]);

  return {
    eventsCount,
    groupsCount,
    locationsCount,
    instagramProfilesCount,
    destinationsCount,
  };
});

export const getSearchResults = cache(
  async ({
    search,
    durations,
    locationSlug,
    priceRange,
  }: {
    search?: string;
    durations?: DurationFilter;
    locationSlug?: string;
    priceRange?: any;
  }) => {
    if (!search || search?.trim().length <= 2) return {};
    return {
      events: await getEventList({
        search,
        durations,
        locationSlug,
        take: 50,
        priceRange,
      }),
      groups: await getGroupList({ search, locationSlug }),
      instagramProfiles: await getInstagramProfileList({
        search,
        locationSlug,
      }),
      destinations: await getDestinationList({
        search,
        take: 50,
        locationSlug,
      }),
      locationsList: await getLocations({
        search,
      }),
    };
  }
);
