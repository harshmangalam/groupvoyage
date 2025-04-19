"use server";

import { prisma } from "@/lib/db";
import { createLocationSlug } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export async function createLocation(formData: FormData) {
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const slug = createLocationSlug(country, city);
  const active = formData.get("active") as string;
  const posterUrl = formData.get("posterUrl") as string;

  const newLocation = {
    slug,
    country,
    city,
    active: active === "on",
    posterUrl,
  };
  await prisma.location.create({
    data: newLocation,
  });

  revalidatePath("/superadmin/locations");
}

export async function editLocation(formData: FormData) {
  const locationId = formData.get("locationId") as string;
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const active = formData.get("active") as string;

  const slug = createLocationSlug(country, city);
  const newLocation = { slug, country, city, active: active === "on" };
  await prisma.location.update({
    where: {
      id: locationId,
    },
    data: newLocation,
  });
  revalidatePath("/superadmin/locations");
}

export async function deleteLocation(formData: FormData) {
  const locationId = formData.get("locationId") as string;
  if (!locationId) return;
  await prisma.location.delete({ where: { id: locationId } });
  revalidatePath("/locations");
}

export const getLocationsOption = cache(async () => {
  return prisma.location.findMany({
    where: { active: true },
    select: { id: true, slug: true, city: true },
  });
});

export const getLocation = cache(
  async ({ locationSlug }: { locationSlug: string }) => {
    return prisma.location.findUnique({
      where: { slug: locationSlug },
      select: { id: true, slug: true, city: true },
    });
  }
);

export const getLocations = cache(
  async ({
    search,
    includeInactive,
    take,
    skip,
  }: {
    search?: string;
    includeInactive?: boolean;
    take?: number;
    skip?: number;
  } = {}) => {
    const filter: Record<string, unknown> = {};

    if (search) {
      filter.city = { search: search.replace(/[^a-zA-Z]/g, "") };
    }

    if (!includeInactive) {
      filter.active = true;
    }

    return prisma.location.findMany({
      where: filter,
      select: {
        slug: true,
        city: true,
        posterUrl: true,
        id: true,
        _count: {
          select: {
            groups: true,
            events: true,
          },
        },
      },
      orderBy: [
        {
          groups: {
            _count: "desc",
          },
        },
        {
          events: {
            _count: "desc",
          },
        },
      ],
      ...(typeof take === "number" ? { take } : {}),
      ...(typeof skip === "number" ? { skip } : {}),
    });
  }
);

export const getAllLocationsCount = cache(async () => {
  return prisma.location.count({ where: { active: true } });
});
