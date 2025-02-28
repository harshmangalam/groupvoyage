import { prisma } from "@/lib/db"; // Adjust the path as needed
import { getEventList } from "./event";
import { getGroupList } from "./group";
import { getLocations } from "./location";

export async function getRandomPosters() {
  const groupPosters = await prisma.group.findMany({
    select: { posterUrls: true },
    take: 3,
    orderBy: { id: "asc" },
  });

  const locationPosters = await prisma.location.findMany({
    select: { posterUrl: true },
    take: 3,
    orderBy: { id: "asc" },
  });

  const posters = [...groupPosters.flatMap((p) => p.posterUrls)];
  const locationsPoster = locationPosters.map((p) => p.posterUrl);

  const randomPosters = [
    ...locationsPoster,
    ...posters.sort(() => Math.random() - 0.5).slice(0, 1),
  ].slice(0, 3);
  return randomPosters;
}

export async function getPublicStats() {
  const eventsCount = await prisma.event.count();
  const groupsCount = await prisma.group.count();
  const locationsCount = await prisma.location.count();

  return {
    eventsCount,
    groupsCount,
    locationsCount,
  };
}

export async function getSearchResults(search?: string) {
  if (!search) return {};
  return {
    events: await getEventList({ search }),
    groups: await getGroupList({ search }),
    locations: await getLocations({ search }),
  };
}
