export const SITE_NAME = "GroupVoyage";
export const SITE_URL = "https://groupvoyage.in";
export const SITE_EMAIL = "harshdev8218@gmail.com";
export const SITE_TAGLINE =
  "GroupVoyage is a free, open platform to discover and compare weekend group trips, then join organizers directly on their official page.";
export const SITE_DESCRIPTION = `${SITE_NAME} is a free, open platform to discover and compare weekend group trips, then join organizers directly on their official page.
`;
export const REPO_LINK = "https://github.com/harshmangalam/groupvoyage";

export const DURATIONS = [
  { label: "Short Trips (1 day)", value: "short-trips" },
  { label: "Weekend Trips (2 days)", value: "weekend-trips" },
  { label: "Long Weekend Trips (3+ days)", value: "long-weekend" },
] as const;

export const TRIPS_PER_PAGE = 12;
export const DESTINATIONS_PER_PAGE = 16;

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
    name: "Categories",
    href: "/categories",
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

export const SOCIAL_LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/harshmangalam/",
  GITHUB: "https://www.github.com/harshmangalam/groupvoyage",
};
