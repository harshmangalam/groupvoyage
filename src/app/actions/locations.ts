"use server";

import { revalidatePath } from "next/cache";

// This is a mock database. In a real application, you'd use a proper database.
let locations: { id: string; name: string; country: string; slug: string }[] =
  [];

export async function createLocation(formData: FormData) {
  const name = formData.get("name") as string;
  const country = formData.get("country") as string;
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  const newLocation = { id: Date.now().toString(), name, country, slug };
  locations.push(newLocation);

  revalidatePath("/locations");
  return { success: true };
}

export async function getLocations() {
  return locations;
}

export async function deleteLocation(id: string) {
  locations = locations.filter((location) => location.id !== id);
  revalidatePath("/locations");
  return { success: true };
}
