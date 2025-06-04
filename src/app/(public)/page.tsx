import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
import { TrendingGroupsCarousel } from "@/components/groups/featured-groups-carousel";
import { HomeHero } from "@/components/home-hero";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { Metadata } from "next";
import { TrendingInstagramProfiles } from "@/components/instagram/trending-instagram-profiles";
import { TrendingDestinationsCarousel } from "@/components/destinations/trending-destinations-carousel";
import { TrendingLocationsCarousel } from "@/components/locations/trending-locations-carousel";
import { TrendingLocationsFallback } from "@/components/locations/trending-locations-fallback";
import { Collaborators } from "@/components/groups/collaborators";

export const metadata: Metadata = {
  title: "Compare & Book Weekend Group Trips - 1-Day & 2-Day Getaways",
  description:
    "Discover the best weekend group trips from your city. Compare prices, check itineraries, and join 1-day & 2-day budget-friendly trips for trekking, adventure, and scenic getaways.",
  keywords: [
    "weekend group trips",
    "1-day and 2-day trips",
    "best weekend getaways",
    "budget-friendly weekend trips",
    "adventure group trips",
    "trekking weekend getaways",
    "affordable short trips",
    "road trips from my city",
    "quick weekend escapes",
    "nature getaways for the weekend",
    "top weekend destinations",
    "solo and group weekend travel",
    "short trips near me",
    "scenic weekend vacations",
    "best 2-day trip packages",
    "budget weekend tours",
    "weekend hiking trips",
    "best places to visit this weekend",
    "travel groups for weekend trips",
    "price comparison for weekend tours",
  ],
};

export default async function HomePage() {
  return (
    <div>
      {/* hero section  */}
      <HomeHero />
      <div className="max-w-7xl w-full mx-auto px-4">
        <PageSection
          href="/locations"
          label={<span>Top Locations</span>}
          description="Kick off your weekend trips from these locations"
        >
          <Suspense
            fallback={<TrendingLocationsFallback />}
            key={"trending-locations"}
          >
            <TrendingLocationsCarousel />
          </Suspense>
        </PageSection>
        <PageSection
          href="/instagram-profiles"
          label={<span>Instagram Travel Groups</span>}
          description="Discover top travel groups from Instagram for your next getaway"
        >
          <Suspense key={"trending-instagram-profiles"}>
            <TrendingInstagramProfiles />
          </Suspense>
        </PageSection>
        <PageSection
          href="/destinations"
          label={<span>Must-Visit Weekend Destinations</span>}
          description="Dreamy spots you won’t want to miss this weekend."
        >
          <Suspense key={"trending-destinations"}>
            <TrendingDestinationsCarousel />
          </Suspense>
        </PageSection>

        <PageSection
          href="/groups"
          label={<span>Top Travel Groups</span>}
          description="Join the best groups for weekend adventures."
        >
          <Suspense key={"trending-groups"}>
            <TrendingGroupsCarousel />
          </Suspense>
        </PageSection>

        <PageSection
          href="/trips"
          label={<span>Top Weekend Trips</span>}
          description="Unmissable trips to make your weekend epic."
        >
          <Suspense key={"trending-events"}>
            <TrendingTripsCarousel />
          </Suspense>
        </PageSection>

        {/* <PageSection
          label={<span>Collaborators</span>}
          description="Travel groups whose curated trips are featured from publicly available sources."
        >
          <Suspense fallback={<></>}>
            <Collaborators />
          </Suspense>
        </PageSection> */}
      </div>
    </div>
  );
}
