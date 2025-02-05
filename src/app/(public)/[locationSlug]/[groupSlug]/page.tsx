import { EventCard } from "@/components/event-card";

export default async function GroupHomePage() {
  return (
    <section className="max-w-7xl px-4 mx-auto mt-12">
      <h3 className="text-xl font-semibold mb-4">Group Events</h3>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...new Array(10)].map((_, i) => (
          <EventCard key={i} />
        ))}
      </div>
    </section>
  );
}
