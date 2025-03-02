import { getEventList } from "@/actions/event";
import { DurationsFilter } from "@/components/filters/durations-filter";
import { LocationsFilter } from "@/components/filters/locations-filter";
import { PageSection } from "@/components/page-section";
import { TripCard } from "@/components/trip-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

type TripsPageProps = {
  searchParams: Promise<{ locations: string; durations: string }>;
};
export default async function TripsPage({ searchParams }: TripsPageProps) {
  const locations = (await searchParams).locations ?? "";
  const durations = (await searchParams).durations ?? "";

  const events = await getEventList({
    locationSlug: locations,
    durations,
  });

  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={
          <span>
            Explore <span className="text-destructive">Trips</span>
          </span>
        }
        others={
          <div className="flex items-center flex-wrap gap-2 flex-1 justify-end">
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
          {events.length ? (
            events.map((event) => <TripCard key={event.id} event={event} />)
          ) : (
            <p>No Trips</p>
          )}
        </div>
      </PageSection>
    </div>
  );
}
