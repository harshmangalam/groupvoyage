"use server";
import { prisma } from "@/lib/db";
import { env } from "@/lib/env";
import { cache } from "react";

export const getEventList = cache(
  async ({
    locationSlug,
    groupSlug,
    take,
    skip = 0,
    search,
    includeArchieve = false,
    durations,
    destinationSlug,
    priceRange,
  }: {
    locationSlug?: string;
    groupSlug?: string;
    take?: number;
    skip?: number;
    search?: string;
    includeArchieve?: boolean;
    durations?: string;
    destinationSlug?: string;
    priceRange?: any;
  }) => {
    const filter: Record<string, unknown> = {};

    if (destinationSlug) {
      filter.destinations = { some: { slug: destinationSlug } };
    }
    if (groupSlug) {
      filter.group = { slug: groupSlug };
    }
    if (locationSlug) {
      filter.location = { slug: locationSlug };
    }
    if (!includeArchieve) {
      filter.isArchived = false;
    }
    if (search) {
      filter.OR = [
        { title: { search: search.replace(/[^a-zA-Z]/g, "") } },
        { details: { search: search.replace(/[^a-zA-Z]/g, "") } },
        { durations: { search: search.replace(/[^a-zA-Z]/g, "") } },
      ];
    }

    if (priceRange) {
      filter.price = {
        lte: +priceRange,
      };
    }

    if (durations) {
      const durationVal = parseInt(durations.replace("-", " ").toLowerCase());

      if (durationVal === 1) {
        // Only 1-day trips
        filter.durations = {
          contains: "1 day",
          mode: "insensitive",
        };
      } else {
        // All except 1-day trips (correct structure)
        filter.durations = {
          not: {
            contains: "1 day",
          },
          mode: "insensitive",
        };
      }
    }

    // Get total count for pagination
    const totalCount = await prisma.event.count({ where: filter });

    // Determine if pagination should be applied
    const shouldPaginate = take !== undefined;

    // Fetch results (apply take & skip only if shouldPaginate is true)
    const events = await prisma.event.findMany({
      where: filter,
      select: {
        posterUrls: true,
        durations: true,
        id: true,
        title: true,
        price: true,
        slug: true,
        meta: true,
        location: {
          select: {
            slug: true,
            city: true,
          },
        },
        group: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
      ...(shouldPaginate ? { take, skip } : {}), // Apply only if pagination is needed
      orderBy: [
        {
          destinations: {
            _count: "desc",
          },
        },
      ],
    });

    // Calculate pagination metadata
    const totalPages = shouldPaginate ? Math.ceil(totalCount / take!) : 1;
    const currentPage = shouldPaginate ? Math.floor(skip / take!) + 1 : 1;

    return {
      events,
      pagination: {
        totalCount,
        totalPages,
        currentPage,
        hasNextPage: shouldPaginate ? skip + take! < totalCount : false,
        hasPreviousPage: shouldPaginate ? skip > 0 : false,
      },
    };
  }
);

export const getEventDetails = cache(
  async ({ eventSlug }: { eventSlug?: string }) => {
    return prisma.event.findUnique({
      where: {
        slug: eventSlug,
      },
      include: {
        location: {
          select: {
            city: true,
            slug: true,
          },
        },
        group: {
          select: {
            id: true,
            slug: true,
            name: true,
            instagram: true,
            phone: true,
          },
        },
      },
    });
  }
);

export const getFeaturedEvents = cache(
  async ({
    durations,
    destinationSlug,
    groupSlug,
    locationSlug,
  }: {
    locationSlug?: string;
    groupSlug?: string;
    durations?: string;
    destinationSlug?: string;
  }) => {
    const filter: Record<string, unknown> = {};

    if (destinationSlug) {
      filter.destinations = { some: { slug: destinationSlug } };
    }
    if (groupSlug) {
      filter.group = { slug: groupSlug };
    }
    if (locationSlug) {
      filter.location = { slug: locationSlug };
    }

    const durationsVal = durations?.replace("-", " ")?.toLowerCase();
    if (durations) {
      const searchValue = durationsVal;
      filter.durations = {
        contains: searchValue,
        mode: "insensitive",
      };
    }

    const featuredGroups = env.FEATURED_GROUPS?.split(",") || [];
    const eventsPerGroup = await Promise.all(
      featuredGroups.map((slug) =>
        prisma.event.findFirst({
          where: {
            price: {
              lte: 5500,
            },
            group: {
              slug: slug,
            },
            ...filter,
          },
          select: {
            posterUrls: true,
            durations: true,
            id: true,
            title: true,
            price: true,
            slug: true,
            meta: true,
            location: {
              select: {
                slug: true,
                city: true,
              },
            },
            group: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
          orderBy: {
            destinations: {
              _count: "desc",
            },
          },
          take: 1,
        })
      )
    );

    // Filter out nulls (in case some groups have no events)
    const events = eventsPerGroup.filter(Boolean);

    return events;
  }
);
