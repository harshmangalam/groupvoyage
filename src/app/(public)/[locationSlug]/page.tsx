import { getEventList } from "@/actions/event";
import { getGroupList } from "@/actions/group";
import { getLocation } from "@/actions/location";
import { EventCard } from "@/components/event-card";
import { GroupCard } from "@/components/group-card";

import { notFound } from "next/navigation";

type LocationPageProps = {
  params: Promise<{ locationSlug: string }>;
};
export default async function LocationPage({ params }: LocationPageProps) {
  const locationSlug = (await params).locationSlug.toString();
  const location = await getLocation({ locationSlug });
  const groups = await getGroupList({ locationSlug });
  const events = await getEventList({ locationSlug });

  if (!location) return notFound();
  return (
    <div className="max-w-7xl px-4 mx-auto py-6 md:py-12">
      {/* Groups  */}
      <section>
        <div className="flex justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Groups in {location.city}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups.length ? (
            groups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                currentLocationSlug={locationSlug}
              />
            ))
          ) : (
            <p>No groups</p>
          )}
        </div>
      </section>

      {/* Events  */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Trips from {location.city}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.length ? (
            events.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p>No Trips</p>
          )}
        </div>
      </section>
    </div>
  );
}
