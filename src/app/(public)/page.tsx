import { HomeHero } from "@/components/home-hero";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { Metadata } from "next";
// import AdUnit from "@/components/ad-unit";
import { ErrorBoundary } from "react-error-boundary";
import { StatsFallback } from "@/components/home-hero/stats-fallback";
import { Stats } from "@/components/home-hero/stats";
import { prisma } from "@/lib/db";
import { LocationsGrid } from "@/components/locations/locations-grid";
import { LocationsGridSkeleton } from "@/components/locations/locations-grid-skeleton";
import { DestinationsGridSkeleton } from "@/components/destinations/destinations-grid-skeleton";
import { DestinationsGrid } from "@/components/destinations/destinations-grid";
import { CategoriesGrid } from "@/components/categories/categories-grid";
import { CategoriesGridSkeleton } from "@/components/categories/categories-grid-skeleton";
// import { OrganizerSubmission } from "@/components/organisation-submission";

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
  const locations = await prisma.location.findMany({
    select: { city: true, slug: true },
    orderBy: { events: { _count: "desc" } },
  });
  return (
    <div>
      {/* hero section  */}
      <HomeHero locations={locations} />
      <ErrorBoundary fallback={"stats error"}>
        <Suspense fallback={<StatsFallback />}>
          <Stats />
        </Suspense>
      </ErrorBoundary>

      <div className="max-w-7xl w-full mx-auto px-4">
        <PageSection
          href="/locations"
          label={<span> Start from your city</span>}
          description="Tap a city to explore weekend trips, travel groups, and nearby destinations starting from there."
        >
          <ErrorBoundary fallback={"TrendingLocationsCarousel error"}>
            <Suspense
              fallback={<LocationsGridSkeleton />}
              key={"trending-locations"}
            >
              <LocationsGrid />
            </Suspense>
          </ErrorBoundary>
        </PageSection>

        <PageSection
          href="/destinations"
          label={<span>Trending weekend destinations</span>}
          description="Popular weekend getaways travelers are exploring right now across India."
        >
          <ErrorBoundary fallback={"TrendingDestinationsCarousel error"}>
            <Suspense fallback={<DestinationsGridSkeleton />}>
              <DestinationsGrid />
            </Suspense>
          </ErrorBoundary>
        </PageSection>

        <PageSection
          href="/categories"
          label={<span>Trending trip categories</span>}
          description="Pick a vibe. Pack your bag. Your weekend just got sorted."
        >
          <ErrorBoundary fallback={"TrendingCategoriesCarousel error"}>
            <Suspense fallback={<CategoriesGridSkeleton />}>
              <CategoriesGrid />
            </Suspense>
          </ErrorBoundary>
        </PageSection>

        {/* <AdUnit /> */}
        {/* <OrganizerSubmission /> */}
      </div>
    </div>
  );
}
