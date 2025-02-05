import { EventCard } from "@/components/event-card";
import { getEvents } from "@/services/events";

export default async function GroupHomePage({
  params,
}: {
  params: Promise<{ groupSlug: string }>;
}) {
  const { groupSlug } = await params;
  const events = await getEvents({
    groupSlug,
  });
  return (
    <section className="max-w-7xl px-4 mx-auto mt-12">
      <h3 className="text-xl font-semibold mb-4">Events</h3>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.length ? (
          events.map((event) => <EventCard key={event.id} {...event} />)
        ) : (
          <p className="opacity-50 text-sm">No Events</p>
        )}
      </div>
    </section>
  );
}
