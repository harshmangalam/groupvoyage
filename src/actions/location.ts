"use server";

import { prisma } from "@/lib/db";
import { createLocationSlug } from "@/lib/utils";
import { revalidatePath } from "next/cache";

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

export async function getLocationsOption() {
  return prisma.location.findMany({
    where: { active: true },
    select: { id: true, slug: true, city: true },
  });
}

export async function getLocation({ locationSlug }: { locationSlug: string }) {
  return prisma.location.findUnique({
    where: { slug: locationSlug },
    select: { id: true, slug: true, city: true },
  });
}

export async function getLocations({
  search,
  includeInactive,
}: {
  search?: string;
  includeInactive?: boolean;
}) {
  const filter: Record<string, any> = {};
  if (search) {
    filter.city = { search: search.replace(/[^a-zA-Z]/g, "") };
  }
  if (!includeInactive) {
    filter.active = true;
  }
  return prisma.location.findMany({
    take: 5,
    where: { ...filter },
    select: {
      slug: true,
      city: true,
      posterUrl: true,
      id: true,
      _count: {
        select: {
          events: true,
          groups: true,
        },
      },
    },
  });
}

export async function getAllLocationsCount() {
  return prisma.location.count();
}
