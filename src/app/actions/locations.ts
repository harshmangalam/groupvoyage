"use server";

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

export async function getLocations() {
  return locations;
}

export async function deleteLocation(id: string) {
  locations = locations.filter((location) => location.id !== id);
  revalidatePath("/locations");
  return { success: true };
}
