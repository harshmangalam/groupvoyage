"use server";
import { prisma } from "@/lib/db";
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
  }: {
    locationSlug?: string;
    groupSlug?: string;
    take?: number;
    skip?: number;
    search?: string;
    includeArchieve?: boolean;
    durations?: string;
  }) => {
    const filter: Record<string, unknown> = {};

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
      filter.OR = [{ title: { contains: search.replace(/[^a-zA-Z]/g, "") } }];
    }

    if (durations) {
      const searchValue = durations.replace("-", " ").toLowerCase(); // Normalize input

      filter.durations = {
        contains: searchValue,
      };
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
