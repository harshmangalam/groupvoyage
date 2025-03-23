import { getLocations } from "@/actions/location";
import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
import { TrendingGroupsCarousel } from "@/components/groups/featured-groups-carousel";
import { HomeHero } from "@/components/home-hero";
import { LocationCard } from "@/components/location-card";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { Metadata } from "next";
import { TrendingInstagramProfiles } from "@/components/instagram/trending-instagram-profiles";
import { TrendingDestinationsCarousel } from "@/components/destinations/trending-destinations-carousel";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const locations = await getLocations({});

  return (
    <div>
      {/* hero section  */}
      <HomeHero />
      <div className="max-w-7xl w-full mx-auto px-4">
        <PageSection href="/locations" label={<span>Trending Locations</span>}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {locations.map((location) => (
              <LocationCard key={location.id} {...location} />
            ))}
          </div>
        </PageSection>
        <PageSection
          href="/destinations"
          label={<span>Must-Visit Weekend Destinations</span>}
        >
          <Suspense key={"featured-destinations"}>
            <TrendingDestinationsCarousel />
          </Suspense>
        </PageSection>
        <PageSection
          href="/instagram-profiles"
          label={<span>Insta-Worthy Groups</span>}
        >
          <Suspense key={"instagram-profiles"}>
            <TrendingInstagramProfiles />
          </Suspense>
        </PageSection>
        <PageSection href="/groups" label={<span>Trending Groups</span>}>
          <Suspense key={"featured-groups"}>
            <TrendingGroupsCarousel />
          </Suspense>
        </PageSection>

        <PageSection href="/trips" label={<span>Trending Trips</span>}>
          <Suspense key={"featured-events"}>
            <TrendingTripsCarousel />
          </Suspense>
        </PageSection>
      </div>
    </div>
  );
}
