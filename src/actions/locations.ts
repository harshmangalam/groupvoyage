"use server";

import { db } from "@/db/connection";
import { SelectLocation } from "@/db/schema";
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

export async function getLocations<T extends (keyof SelectLocation)[]>({
  fields,
}: {
  fields?: T;
}): Promise<Pick<SelectLocation, T[number]>[]> {
  // Use default fields only if no fields are provided
  const selectedFieldsArray: (keyof SelectLocation)[] = fields?.length
    ? fields
    : ["city", "country"];

  const selectedFields = selectedFieldsArray.reduce((acc, field) => {
    acc[field] = true;
    return acc;
  }, {} as Record<keyof SelectLocation, true>);

  return await db.query.locationsTable.findMany({
    columns: selectedFields,
  });
}

export async function deleteLocation(id: string) {
  locations = locations.filter((location) => location.id !== id);
  revalidatePath("/locations");
  return { success: true };
}
