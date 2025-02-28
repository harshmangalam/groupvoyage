import { prisma } from "@/lib/db";

export async function getEventList({
  locationSlug,
  groupSlug,
  take,
  skip,
  search,
  includeArchieve = false,
}: {
  locationSlug?: string;
  groupSlug?: string;
  take?: number;
  skip?: number;
  search?: string;
  includeArchieve?: boolean;
}) {
  const filter: Record<string, any> = {};
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
    filter.title = { search };
    filter.details = { search };
    filter.durations = { search };
  }

  return prisma.event.findMany({
    where: {
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
    take,
    skip,
  });
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
