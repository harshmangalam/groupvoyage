import { getLocations } from "@/actions/location";
import { LocationCard } from "@/components/location-card";
import { PageSection } from "@/components/page-section";
import { SITE_NAME } from "@/lib/constatnts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Locations",
  description: `Find the best travel groups and compare prices from multiple departure cities for free on ${SITE_NAME}`,
  metadataBase: new URL("https://www.groupvoyage.in/"),
};
export default async function LocationsPage() {
  const locations = await getLocations({});
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <PageSection label={"Explore Locations"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {locations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </PageSection>
    </div>
  );
}
