import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getLocations } from "@/actions/location";
import { getGroupList } from "@/actions/group";
import { getDestinationList } from "@/actions/destinations";
import { getEventList } from "@/actions/event";

const staticRoutes = [
  "/",
  "/locations",
  "/destinations",
  "/groups",
  "/trips",
  "/instagram-profiles",
];
const staticRoutesSitemap: MetadataRoute.Sitemap = staticRoutes.map(
  (route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "/" ? 1 : 0.8,
  })
);

const locations = await getLocations();
const locationsRoutesSitemap: MetadataRoute.Sitemap = locations.map(
  (location) => ({
    url: `${SITE_URL}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  })
);

const groups = await getGroupList({ take: 10 });
const groupsRoutesSitemap: MetadataRoute.Sitemap = groups.map((group) => ({
  url: `${SITE_URL}/groups/${group.slug}`,
  lastModified: new Date(),
  changeFrequency: "weekly" as const,
  priority: 0.8,
}));

const destinations = await getDestinationList({ take: 10 });
const destinationsRoutesSitemap: MetadataRoute.Sitemap =
  destinations.destinations.map((destination) => ({
    url: `${SITE_URL}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

const events = await getEventList({ take: 10 });
const tripsRoutesSitemap: MetadataRoute.Sitemap = events.events.map(
  (event) => ({
    url: `${SITE_URL}/trips/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  })
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutesSitemap,
    ...locationsRoutesSitemap,
    ...groupsRoutesSitemap,
    ...destinationsRoutesSitemap,
    ...tripsRoutesSitemap,
  ];
}
