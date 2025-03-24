import { getEventList } from "@/actions/event";
import { CustomPagination } from "@/components/custom-pagination";
import { DurationsFilter } from "@/components/filters/durations-filter";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { PageSection } from "@/components/page-section";
import { TripCard } from "@/components/trips/trip-card";
import { Skeleton } from "@/components/ui/skeleton";
import { TRIPS_PER_PAGE } from "@/lib/constants";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Explore Trips",
  description:
    "Browse and compare trips from multiple travel groups. Filter by location and duration to find your perfect journey.",
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
    durations,
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
