import { prisma } from "@/lib/db";

export async function getEventList({
  locationSlug,
}: {
  locationSlug?: string;
}) {
  return prisma.event.findMany({
    where: {
      location: {
        slug: locationSlug,
      },
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
    },
  });
}
