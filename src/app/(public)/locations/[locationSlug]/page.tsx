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
    <div className="max-w-7xl px-4 mx-auto">
      {/* Groups  */}
      <section className="py-8 md:py-16 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Top Travel Groups in{" "}
            <span className="text-destructive">{location.city}</span>
          </h2>
          <p className="leading-6 font-normal text-muted-foreground text-center">
            Join local travel communities in {location.city} and connect with
            fellow explorers for amazing weekend trips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups.length ? (
            groups.map((group) => (
              <GroupCard location={location} key={group.id} group={group} />
            ))
          ) : (
            <p>No groups</p>
          )}
        </div>
      </section>

      {/* Events  */}
      <section className="py-8 md:py-16 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Upcoming Trips from{" "}
            <span className="text-destructive">{location.city}</span>
          </h2>
          <p className="leading-6 font-normal text-muted-foreground text-center">
            Browse and compare budget-friendly weekend trips organized by
            different travel groups in {location.city}
          </p>
        </div>

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
