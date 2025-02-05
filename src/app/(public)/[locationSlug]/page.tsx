import { EventCard } from "@/components/event-card";
import { GroupCard } from "@/components/group-card";
import { getEvents } from "@/services/events";
import { getGroups } from "@/services/groups";
import Link from "next/link";

type LocationPageProps = {
  params: Promise<{ locationSlug: string }>;
};
export default async function LocationPage({ params }: LocationPageProps) {
  const locationSlug = (await params).locationSlug.toString();
  const groups = await getGroups({
    locationSlug,
  });

  const events = await getEvents({ locationSlug });
  return (
    <div className="max-w-7xl px-4 mx-auto py-6 md:py-12">
      {/* Groups  */}
      <section>
        <div className="flex justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Meetup Groups
          </h2>
          <Link href={`/locations/${locationSlug}`}>See all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups.map((group) => (
            <GroupCard key={group.id} {...group} />
          ))}
        </div>
      </section>

      {/* Events  */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Trips from Hyderabad</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
}
