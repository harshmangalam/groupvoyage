import { getEventList } from "@/actions/event";
import { getLocation } from "@/actions/location";
import { TripCard } from "@/components/trip-card";
import { notFound } from "next/navigation";

type LocationEventsPageProps = {
  params: Promise<{ locationSlug: string }>;
};
export default async function LocationEventssPage({
  params,
}: LocationEventsPageProps) {
  const { locationSlug } = await params;
  const location = await getLocation({ locationSlug });
  const events = await getEventList({ locationSlug });

  if (!location) return notFound();
  return (
    <div className=" max-w-7xl mx-auto px-4">
      <section className="py-12 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Trips from <span className="text-destructive">{location.city}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.length ? (
            events.map((event) => <TripCard key={event.id} event={event} />)
          ) : (
            <p>No Trips</p>
          )}
        </div>
      </section>
    </div>
  );
}
