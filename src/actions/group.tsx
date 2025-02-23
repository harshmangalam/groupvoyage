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
