import { DurationMap } from "./types";
export const SITE_NAME = "GroupVoyage";
export const SITE_URL = "https://groupvoyage.in";
export const SITE_EMAIL = "groupvoyagetravel@gmail.com";

export const DURATIONS: DurationMap[] = [
  { label: "1 Day Trip", value: "1-day" },
  { label: "2 Days Trip", value: "2-days" },
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
