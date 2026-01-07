import { HomeHero } from "@/components/home-hero";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { Metadata } from "next";
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
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title:
    "Weekend Group Trips from Your City | 1–2 Day Getaways, Treks & Experiences",
  description:
    "Discover curated weekend group trips from your city. Compare 1-day and 2-day getaways, trekking adventures, budget trips, and scenic experiences that run every weekend.",
  keywords: [
    "weekend group trips",
    "weekend trips from my city",
    "1 day weekend trips",
    "2 day weekend getaways",
    "group trips near me",
    "budget weekend trips",
    "trekking weekend trips",
    "short trips near me",
    "weekend travel groups",
    "affordable weekend getaways",
    "adventure weekend trips",
    "road trips from city",
    "nature weekend getaways",
    "best weekend trips in india",
  ],
};

export default async function HomePage() {
  const locations = await prisma.location.findMany({
    select: { city: true, slug: true },
    orderBy: { events: { _count: "desc" } },
  });
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GroupVoyage",
          url: "https://groupvoyage.in",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://groupvoyage.in/groups?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

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
      </div>
    </div>
  );
}
