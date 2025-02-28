import { getLocations } from "@/actions/location";
import { LocationCard } from "@/components/location-card";

export default async function LocationsPage() {
  const locations = await getLocations({});
  return (
    <section className="max-w-7xl w-full mx-auto px-4 flex flex-col gap-6 md:gap-10 py-8 md:py-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Explore <span className="text-destructive">Cities</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {locations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
    </section>
  );
}
