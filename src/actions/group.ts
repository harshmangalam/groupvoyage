"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export async function createGroup(formData: FormData) {
  const formObject = Object.fromEntries(formData.entries()) as unknown as any;

  await prisma.group.create({
    data: {
      ...formObject,

      locations: {
        connect: {
          id: formObject.locationId,
        },
      },
    },
  });

  revalidatePath("/superadmin/groups");
}

export const getGroupsOption = cache(async () => {
  const groups = await prisma.group.findMany({
    select: {
      name: true,
      slug: true,
      id: true,
    },
  });

  return groups;
});

export const getGroupList = cache(
  async ({
    locationSlug,
    take,
    skip,
    search,
    destinationSlug,
  }: {
    locationSlug?: string;
    take?: number;
    skip?: number;
    search?: string;
    destinationSlug?: string;
  }) => {
    const filter: Record<string, unknown> = {};
    if (search) {
      filter.name = { search: search.replace(/[^a-zA-Z]/g, "") };
      filter.details = { search: search.replace(/[^a-zA-Z]/g, "") };
    }

    if (locationSlug) {
      filter.locations = {
        some: {
          slug: locationSlug,
        },
      };
    }

    if (destinationSlug) {
      filter.destinations = {
        some: {
          slug: destinationSlug,
        },
      };
    }
    return prisma.group.findMany({
      where: {
        ...filter,
      },
      select: {
        id: true,
        slug: true,
        name: true,
        posterUrls: true,
        logo: true,
        locations: {
          select: {
            id: true,
            city: true,
            slug: true,
          },
        },
        _count: {
          select: {
            events: true,
          },
        },
      },
      take,
      skip,
      orderBy: {
        events: {
          _count: "desc",
        },
      },
    });
  }
);

export const getGroupDetails = cache(async ({ slug }: { slug: string }) => {
  return prisma.group.findUnique({
    where: {
      slug,
    },
    include: {
      _count: {
        select: {
          events: true,
        },
      },
      locations: {
        select: {
          city: true,
          slug: true,
          id: true,
        },
      },
    },
  });
});

export const getAllGroupsCount = cache(async () => {
  return prisma.group.count();
});

export const getTrendingGroupList = cache(
  async ({ locationSlug }: { locationSlug?: string }) => {
    return prisma.group.findMany({
      where: {
        locations: {
          some: {
            slug: locationSlug,
          },
        },
      },
      select: {
        id: true,
        slug: true,
        name: true,
        posterUrls: true,
        locations: {
          select: {
            id: true,
            city: true,
            slug: true,
          },
        },
        _count: {
          select: {
            events: true,
          },
        },
      },
      orderBy: {
        events: {
          _count: "desc",
        },
      },
    });
  }
);

export const getCollaborators = cache(async (filters?: { slugs: string[] }) => {
  const where: Record<string, any> = {};

  if (filters?.slugs.length) {
    where.slug = {
      in: filters.slugs,
    };
  }

  const groups = await prisma.group.findMany({
    where,
    select: {
      logo: true,
      slug: true,
      name: true,
    },
    orderBy: {
      events: {
        _count: "desc",
      },
    },
  });

  return groups.filter((g) => g.logo);
});
