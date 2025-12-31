"use server";

import { prisma } from "@/lib/db"; // Adjust the path as needed
import { getEventList } from "./event";
import { cache } from "react";
import { getGroupList } from "./group";
import { getInstagramProfileList } from "./instagram-profile";
import { getDestinationList } from "./destinations";
import { getLocations } from "./location";
import { DurationFilter } from "@/lib/types";
import { getCategoryList } from "./categories";

export const getPublicStats = cache(async () => {
  const [eventsCount, groupsCount, locationsCount, destinationsCount] =
    await Promise.all([
      prisma.event.count({ where: { status: "processed" } }),
      prisma.group.count({ where: { status: "processed" } }),
      prisma.location.count(),
      prisma.destination.count(),
    ]);

  return {
    eventsCount,
    groupsCount,
    locationsCount,
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
      categories: await getCategoryList({ search }),
    };
  }
);
