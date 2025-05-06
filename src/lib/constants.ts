import { DurationMap } from "./types";
export const SITE_NAME = "GroupVoyage";
export const SITE_URL = "https://groupvoyage.in";
export const SITE_EMAIL = "groupvoyagetravel@gmail.com";
export const SITE_TAGLINE =
  "Find local groups, compare prices, and join budget-friendly weekend trips";
export const SITE_DESCRIPTION = `${SITE_NAME} connects you with like-minded travelers from your
city, making weekend getaways effortless and exciting. Explore a
curated list of local and city-specific travel groups, compare
trip prices, and find the perfect adventure that fits your
budget.`;

export const DURATIONS: DurationMap[] = [
  { label: "Short Trips (1 day)", value: "1-day" },
  { label: "Long Trips (2+ days)", value: "2-days" },
];

export const TRIPS_PER_PAGE = 8;
export const DESTINATIONS_PER_PAGE = 15;

export const NAVIGATIONS_MENU = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Locations",
    href: "/locations",
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "Groups",
    href: "/groups",
  },
  {
    name: "Trips",
    href: "/trips",
  },
  {
    name: "Instagram",
    href: "/instagram-profiles",
  },
];

export const INSTAGRAM = "https://www.instagram.com/groupvoyageofficial/";
export const X = "https://x.com/groupvoyage_";
