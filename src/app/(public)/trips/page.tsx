import { getEventList } from "@/actions/event";
import { LocationsFilter } from "@/components/locations-filter";
import { PageSection } from "@/components/page-section";
import { TripCard } from "@/components/trip-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default async function GroupsPage() {
  const events = await getEventList({});

  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={
          <span>
            Explore <span className="text-destructive">Trips</span>
          </span>
        }
        others={
          <div>
            <Suspense
              fallback={<Skeleton className="h-10 w-32 rounded-md" />}
              key={`locations-filter`}
            >
              <LocationsFilter />
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
