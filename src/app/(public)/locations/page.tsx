import { getLocations } from "@/actions/location";
import { LocationCard } from "@/components/locations/location-card";
import { PageSection } from "@/components/page-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Weekend Trips & Getaways from Your City | Compare Prices",
  description: `Find and compare 1-day & 2-day weekend trips from your city. Discover the best trekking, adventure, and budget-friendly group tours`,
  keywords: [
    "weekend trips from India",
    "best weekend getaways in India",
    "1-day trips from major cities",
    "2-day budget trips from India",
    "compare weekend travel packages",
    "best weekend trekking groups",
    "affordable short trips in India",
    "local travel groups for weekend getaways",
    "quick travel escapes from cities",
    "top short adventure trips in India",
    "cheap weekend group trips in India",
    "short road trips from Indian cities",
    "best budget weekend travel deals",
    "find 2-day travel groups near me",
    "short-distance trekking groups",
    "group travel packages for weekends",
    "explore India's best weekend trips",
    "quick trekking and adventure getaways",
    "local weekend tourism with price comparison",
    "budget-friendly weekend tour options",
  ],
};
export const dynamic = "force-dynamic";

export default async function LocationsPage() {
  const locations = await getLocations();
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
