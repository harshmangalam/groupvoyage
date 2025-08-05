"use server";
import { prisma } from "@/lib/db";
import { env } from "@/lib/env";
import { DurationFilter } from "@/lib/types";
import { cache } from "react";
import { id } from "zod/v4/locales";

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
    categories,
  }: {
    locationSlug?: string;
    groupSlug?: string;
    take?: number;
    skip?: number;
    search?: string;
    includeArchieve?: boolean;
    durations?: DurationFilter;
    destinationSlug?: string;
    priceRange?: any;
    categories?: string;
  }) => {
    const filter: Record<string, unknown> = {};

    if (destinationSlug) {
      filter.destinations = { some: { slug: destinationSlug } };
    }
    if (categories) {
      filter.categories = { some: { slug: categories } };
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
        { group: { name: { search: search.replace(/[^a-zA-Z]/g, "") } } },
      ];
    }

    if (priceRange) {
      filter.price = {
        lte: +priceRange,
      };
    }

    if (durations) {
      switch (durations) {
        case "short-trips":
          // Only 1-day trips
          filter.durations = {
            contains: "1 day",
            mode: "insensitive",
          };
          break;

        case "weekend-trips":
          // 2 or 3-day trips
          filter.OR = [
            {
              durations: {
                contains: "2 days",
                mode: "insensitive",
              },
            },
            {
              durations: {
                contains: "3 days",
                mode: "insensitive",
              },
            },
          ];
          break;

        case "long-weekend":
          // 4+ day trips
          filter.OR = [
            {
              durations: {
                contains: "4 days",
                mode: "insensitive",
              },
            },
            {
              durations: {
                contains: "5 days",
                mode: "insensitive",
              },
            },
            {
              durations: {
                contains: "6 days",
                mode: "insensitive",
              },
            },
            {
              durations: {
                contains: "7 days",
                mode: "insensitive",
              },
            },
            // Add more if needed
          ];
          break;

        default:
          // Optional: handle unknown filter values
          console.warn(`Unknown duration filter: ${durations}`);
          break;
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
        categories: {
          select: {
            slug: true,
            id: true,
            name: true,
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
