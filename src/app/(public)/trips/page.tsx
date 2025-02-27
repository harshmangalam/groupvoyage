import { getEventList } from "@/actions/event";
import { EventCard } from "@/components/trip-card";

export default async function GroupsPage() {
  const events = await getEventList({});

  return (
    <section className="py-12 flex flex-col gap-6 md:gap-10 container mx-auto">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-3xl font-bold tracking-tight">
          Explore <span className="text-destructive">Events</span> on
          GroupVoyage
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.length ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p>No Trips</p>
        )}
      </div>
    </section>
  );
}
