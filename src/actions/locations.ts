"use server";

import { db } from "@/db/connection";
import { locationsTable, SelectLocation } from "@/db/schema";
import { createLocationSlug } from "@/lib/utils";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createLocation(formData: FormData) {
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const slug = createLocationSlug(country, city);
  const active = formData.get("active") as string;

  const newLocation = { slug, country, city, active: active === "on" };
  await db.insert(locationsTable).values(newLocation);

  revalidatePath("/superadmin/locations");
  redirect("/superadmin/locations");
}

export async function getLocations<
  T extends (keyof SelectLocation)[] = (keyof SelectLocation)[]
>({
  fields,
}: {
  fields?: T; // fields is optional
} = {}): Promise<Pick<SelectLocation, T[number]>[]> {
  // Default empty object if no arguments are passed
  // Use default fields only if no fields are provided
  const selectedFieldsArray: (keyof SelectLocation)[] | undefined =
    fields && fields.length > 0 ? fields : undefined; // Default if fields are not provided

  const selectedFields = selectedFieldsArray?.reduce((acc, field) => {
    acc[field] = true;
    return acc;
  }, {} as Record<keyof SelectLocation, true>);

  return await db.query.locationsTable.findMany({
    columns: selectedFields,
  });
}

export async function editLocation(formData: FormData) {
  const locationId = formData.get("locationId") as string;
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const active = formData.get("active") as string;

  const slug = createLocationSlug(country, city);
  const newLocation = { slug, country, city, active: active === "on" };
  await db
    .update(locationsTable)
    .set(newLocation)
    .where(eq(locationsTable.id, locationId));
  revalidatePath("/superadmin/locations");
  redirect("/superadmin/locations");
}

export async function deleteLocation(formData: FormData) {
  const locationId = formData.get("locationId") as string;
  if (!locationId) return;

  await db.delete(locationsTable).where(eq(locationsTable.id, locationId));
  revalidatePath("/locations");
}

export async function getLocation(locationId: string) {
  return db.query.locationsTable.findFirst({
    where(fields, { eq }) {
      return eq(fields.id, locationId);
    },
  });
}
