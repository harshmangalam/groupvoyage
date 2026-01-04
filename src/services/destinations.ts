import { cache } from "react";
import { prisma } from "@/lib/db";

type GetDestinationsParams = {
  locationSlug?: string;
  groupSlug?: string;
  take?: number;
  skip?: number;
  search?: string;
};

export const getDestinationList = cache(
  async (params: GetDestinationsParams = {}) => {
    const {
      locationSlug,
      groupSlug,
      take = 10,
      skip = 0,
      search = "",
    } = params;

    const shouldPaginate = take !== undefined;

    const whereClause = {
      ...(locationSlug
        ? { locations: { some: { slug: locationSlug } } }
        : undefined),
      ...(groupSlug ? { groups: { some: { slug: groupSlug } } } : undefined),
      ...(search
        ? { name: { search: search.replace(/[^a-zA-Z]/g, "") } }
        : undefined),
    };
    const destinations = await prisma.destination.findMany({
      where: { ...whereClause },
      select: {
        name: true,
        slug: true,
        id: true,
        _count: { select: { events: true, groups: true } },
        locations: {
          select: { id: true, slug: true, city: true },
          orderBy: { groups: { _count: "desc" } },
        },
      },
      skip,
      take,
      orderBy: [{ groups: { _count: "desc" } }],
    });

    const totalCount = await prisma.destination.count({ where: whereClause });

    return {
      destinations,
      pagination: {
        totalCount,
        totalPages: Math.ceil(totalCount / take),
        currentPage: Math.floor(skip / take) + 1,
        hasNextPage: shouldPaginate ? skip + take < totalCount : false,
        hasPreviousPage: shouldPaginate ? skip > 0 : false,
      },
    };
  }
);

export const getDestinationDetails = cache(
  async (params: { destinationSlug: string }) => {
    const { destinationSlug } = params;

    const whereClause = {
      ...(destinationSlug && { slug: destinationSlug }),
    };

    const destination = await prisma.destination.findFirst({
      where: whereClause,
      select: {
        name: true,
        slug: true,
        id: true,
        _count: { select: { events: true, groups: true } },
        locations: { select: { id: true, slug: true, city: true } },
      },
    });

    return destination;
  }
);

export const getDestinationsOption = cache(async () => {
  return prisma.destination.findMany({
    select: {
      name: true,
      slug: true,
    },
    orderBy: [{ events: { _count: "desc" } }, { groups: { _count: "desc" } }],
  });
});
