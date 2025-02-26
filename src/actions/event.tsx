import { prisma } from "@/lib/db";

export async function getEventList({
  locationSlug,
  groupSlug,
}: {
  locationSlug?: string;
  groupSlug?: string;
}) {
  const filter: Record<string, any> = {};
  if (groupSlug) {
    filter.group = { slug: groupSlug };
  }
  if (locationSlug) {
    filter.location = { slug: locationSlug };
  }
  return prisma.event.findMany({
    where: {
      isArchived: false,
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

export async function getFeaturedEventList() {
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
