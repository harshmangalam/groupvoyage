import { getDestinationList } from "@/services/destinations";
import { DestinationCard } from "./destination-card";

type DestinationsGridProps = {
  locationSlug?: string;
  groupSlug?: string;
  showLocations?: boolean;
};

export async function DestinationsGrid({
  locationSlug,
  groupSlug,
  showLocations = true,
}: DestinationsGridProps) {
  const destinationsResp = await getDestinationList({
    take: 8,
    locationSlug,
    groupSlug,
  });
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {destinationsResp.destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          name={destination.name}
          slug={destination.slug}
          eventsCount={destination._count.events}
          groupsCount={destination._count.groups}
          locations={destination.locations}
          showLocations={showLocations}
        />
      ))}
    </div>
  );
}
