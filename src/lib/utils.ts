import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createLocationSlug(country: string, city: string): string {
  // Get the country code (2-letter code)
  const countrySlug = country.slice(0, 2).toLowerCase();

  // Convert the city name to lowercase and replace spaces with hyphens
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");

  // Combine the country and city slugs
  return `${countrySlug}-${citySlug}`;
}
