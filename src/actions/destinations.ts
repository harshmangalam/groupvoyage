import { cache } from "react";
import { prisma } from "@/lib/db";

type GetDestinationsParams = {
  locationSlug?: string;
  groupSlug?: string;
  take?: number;
  skip?: number;
};

export const getDestinationList = cache(
  async (params: GetDestinationsParams = {}) => {
    const { locationSlug, groupSlug, take = 10, skip = 0 } = params;

    const shouldPaginate = take !== undefined;

    const whereClause = {
      ...(locationSlug && { locations: { some: { slug: locationSlug } } }),
      ...(groupSlug && { groups: { some: { slug: groupSlug } } }),
    };

    const destinations = await prisma.destination.findMany({
      where: whereClause,
      select: {
        name: true,
        slug: true,
        id: true,
        _count: { select: { events: true, groups: true } },
        locations: { select: { id: true, slug: true, city: true } },
      },
      skip,
      take,
      orderBy: [{ events: { _count: "desc" } }, { groups: { _count: "desc" } }],
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
