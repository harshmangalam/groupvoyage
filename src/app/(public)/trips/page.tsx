import { getEventList } from "@/actions/event";
import { PageSection } from "@/components/page-section";
import { TripCard } from "@/components/trip-card";

export default async function GroupsPage() {
  const events = await getEventList({});

  return (
    <div className="max-w-7xl mx-auto">
      <PageSection
        label={
          <span>
            Explore <span className="text-destructive">Trips</span>
          </span>
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
