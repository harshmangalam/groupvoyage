import { prisma } from "@/lib/db";

export async function getEventList({
  locationSlug,
  groupSlug,
  take = 10,
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
}) {
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
    filter.OR = [
      { title: { search: search.replace(/[^a-zA-Z]/g, "") } },
      { details: { search: search.replace(/[^a-zA-Z]/g, "") } },
      { durations: { search: search.replace(/[^a-zA-Z]/g, "") } },
    ];
  }
  if (durations) {
    filter.durations = {
      startsWith: durations,
      mode: "insensitive",
    };
  }

  // Get total count for pagination
  const totalCount = await prisma.event.count({ where: filter });

  // Fetch paginated results
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
    take,
    skip,
  });

  // Calculate pagination metadata
  const totalPages = Math.ceil(totalCount / take);
  const currentPage = Math.floor(skip / take) + 1;

  return {
    events,
    pagination: {
      totalCount,
      totalPages,
      currentPage,
      hasNextPage: skip + take < totalCount,
      hasPreviousPage: skip > 0,
    },
  };
}

export function getEventDetails({ eventSlug }: { eventSlug?: string }) {
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

export async function getTrendingEventList() {
  return prisma.event.findMany({
    where: {
      isArchived: false,
    },
    select: {
      posterUrls: true,
      durations: true,
      id: true,
      title: true,
      price: true,
      slug: true,
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
      meta: true,
    },
    take: 10,
  });
}

export async function getAllEventsCount() {
  return prisma.event.count();
}
