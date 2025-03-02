"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createGroup(formData: FormData) {
  const formObject = Object.fromEntries(formData.entries()) as unknown as any;
  const isActive = formObject.active === "on";
  await prisma.group.create({
    data: {
      ...formObject,
      active: isActive,
      locations: {
        connect: {
          id: formObject.locationId,
        },
      },
    },
  });

  revalidatePath("/superadmin/groups");
}

export async function getGroupsOption() {
  const groups = await prisma.group.findMany({
    where: {
      active: true,
    },
    select: {
      name: true,
      slug: true,
      id: true,
    },
  });

  return groups;
}

export async function getGroupList({
  locationSlug,
  take,
  skip,
  search,
}: {
  locationSlug?: string;
  take?: number;
  skip?: number;
  search?: string;
}) {
  const filter: Record<string, any> = {};
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
  return prisma.group.findMany({
    where: {
      ...filter,
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
    take,
    skip,
    orderBy: {
      events: {
        _count: "desc",
      },
    },
  });
}

export async function getGroupDetails({ slug }: { slug: string }) {
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
}

export async function getAllGroupsCount() {
  return prisma.group.count();
}

export async function getTrendingGroupList({
  locationSlug,
}: {
  locationSlug?: string;
}) {
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
