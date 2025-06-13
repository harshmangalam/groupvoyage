import { getEventList } from "@/actions/event";
import { CustomPagination } from "@/components/custom-pagination";
import { DestinationsFilter } from "@/components/filters/destinations/destinations-filter";
import { DurationsFilter } from "@/components/filters/durations-filter";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { PageSection } from "@/components/page-section";
import { TripCard } from "@/components/trips/trip-card";
import { Skeleton } from "@/components/ui/skeleton";
import { TRIPS_PER_PAGE } from "@/lib/constants";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Best Weekend Trips - 1-Day & 2-Day Getaways at Affordable Price",
  description:
    "Explore the best weekend trips from major cities. Compare prices for 1-day & 2-day getaways, adventure tours, trekking trips, and road trips to top destinations.",
  keywords: [
    "best weekend trips",
    "1-day and 2-day trips",
    "short trips near me",
    "budget weekend getaways",
    "group trips for the weekend",
    "adventure weekend trips",
    "trekking weekend trips",
    "road trips for the weekend",
    "affordable group trips",
    "scenic weekend destinations",
    "best quick getaways",
    "short road trips from major cities",
    "family-friendly weekend trips",
    "solo travel weekend trips",
    "offbeat weekend escapes",
    "nature getaways this weekend",
    "best places to visit this weekend",
    "top weekend travel packages",
    "quick vacation ideas",
    "best 2-day tour packages",
  ],
};
type TripsPageProps = {
  searchParams: Promise<{
    locations: string;
    durations: string;
    page: string;
    destinations: string;
  }>;
};
export default async function TripsPage({ searchParams }: TripsPageProps) {
  const locations = (await searchParams).locations ?? "";
  const durations = (await searchParams).durations ?? "";
  const pageStr = (await searchParams).page ?? "1";
  const page = Number(pageStr);
  const destinations = (await searchParams).destinations ?? "";

  const events = await getEventList({
    locationSlug: locations,
    durations: durations as any,
    take: TRIPS_PER_PAGE,
    skip: (page - 1) * TRIPS_PER_PAGE,
    destinationSlug: destinations,
  });

  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={<span>Explore Trips</span>}
        others={
          <div className="flex items-center flex-wrap gap-2  md:justify-end justify-start">
            <Suspense
              fallback={<Skeleton className="h-10 w-32 rounded-md" />}
              key={`locations-filter`}
            >
              <LocationsFilter />
            </Suspense>
            <Suspense
              fallback={<Skeleton className="h-10 w-32 rounded-md" />}
              key={`destinations-filter`}
            >
              <DestinationsFilter />
            </Suspense>

            <Suspense
              fallback={<Skeleton className="h-10 w-32 rounded-md" />}
              key={`durations-filter`}
            >
              <DurationsFilter />
            </Suspense>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.events.length ? (
            events.events.map((event) => (
              <TripCard key={event.id} event={event} />
            ))
          ) : (
            <p>No Trips</p>
          )}
        </div>
        <div className="mt-6">
          <CustomPagination {...events.pagination} />
        </div>
      </PageSection>
    </div>
  );
}
