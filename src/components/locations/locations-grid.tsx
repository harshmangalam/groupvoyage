import { getLocations } from "@/services/location";
import { LocationCard } from "./location-card";

export async function LocationsGrid() {
  const locations = await getLocations({
    take: 8,
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {locations.map((location) => (
        <LocationCard key={location.id} {...location} />
      ))}
    </div>
  );
}
