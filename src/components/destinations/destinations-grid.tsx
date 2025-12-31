import { getDestinationList } from "@/actions/destinations";
import { DestinationCard } from "./destination-card";
export async function DestinationsGrid({
  locationSlug,
  groupSlug,
}: {
  locationSlug?: string;
  groupSlug?: string;
}) {
  const destinationsResp = await getDestinationList({
    take: 8,
    locationSlug,
    groupSlug,
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {destinationsResp.destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          name={destination.name}
          slug={destination.slug}
          eventsCount={destination._count.events}
          groupsCount={destination._count.groups}
          locations={destination.locations}
        />
      ))}
    </div>
  );
}
