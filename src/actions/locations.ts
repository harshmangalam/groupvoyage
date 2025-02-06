"use server";

import { db } from "@/db/connection";
import { locationsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// This is a mock database. In a real application, you'd use a proper database.
let locations: { id: string; city: string; country: string; slug: string }[] =
  [];

export async function createLocation(formData: FormData) {
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const slug = country + city;

  const newLocation = { id: Date.now().toString(), slug, country, city };
  locations.push(newLocation);

  revalidatePath("/superadmin/locations");
  redirect("/superadmin/locations");
}

export async function getLocations(
  fields: (keyof typeof locationsTable._.columns)[]
) {
  const defaultFields: Record<string, true> = { city: true, slug: true };
  const selectedFields = fields.reduce((acc, field) => {
    acc[field] = true;
    return acc;
  }, defaultFields);

  return await db.query.locationsTable.findMany({
    columns: selectedFields,
  });
}

export async function deleteLocation(id: string) {
  locations = locations.filter((location) => location.id !== id);
  revalidatePath("/locations");
  return { success: true };
}
