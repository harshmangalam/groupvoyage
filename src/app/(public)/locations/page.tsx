import { getLocations } from "@/actions/location";
import { LocationCard } from "@/components/location-card";
import { PageSection } from "@/components/page-section";

export default async function LocationsPage() {
  const locations = await getLocations({});
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <PageSection
        label={
          <span>
            Explore <span className="text-destructive">Cities</span>
          </span>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {locations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </PageSection>
    </div>
  );
}
