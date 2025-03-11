import { getLocations } from "@/actions/location";
import { TrendingEventsCarousel } from "@/components/trending-events-carousel";
import { TrendingGroupsCarousel } from "@/components/featured-groups-carousel";
import { HomeHero } from "@/components/home-hero";
import { LocationCard } from "@/components/location-card";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const locations = await getLocations({});

  return (
    <div>
      {/* hero section  */}
      <HomeHero />
      <div className="max-w-7xl w-full mx-auto px-4 ">
        <PageSection
          href="/locations"
          label={
            <span>
              Trending <span className="text-destructive">cities</span>
            </span>
          }
          description={
            "Discover the most popular cities buzzing with travel groups and events!"
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {locations.map((location) => (
              <LocationCard key={location.id} {...location} />
            ))}
          </div>
        </PageSection>
        <PageSection
          href="/groups"
          label={
            <span>
              Trending <span className="text-destructive">groups</span>
            </span>
          }
          description={
            "Join the most popular travel communities and explore with like-minded adventurers."
          }
        >
          <TrendingGroupsCarousel />
        </PageSection>
        <PageSection
          href="/trips"
          label={
            <span>
              Trending <span className="text-destructive">trips</span>
            </span>
          }
          description={
            "Check out the hottest upcoming trips and start your next adventure today!"
          }
        >
          <Suspense key={"featured-events"}>
            <TrendingEventsCarousel />
          </Suspense>
        </PageSection>
      </div>
    </div>
  );
}
