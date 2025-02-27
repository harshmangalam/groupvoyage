import { getEventList } from "@/actions/event";
import { getGroupList } from "@/actions/group";
import { getLocation } from "@/actions/location";
import { TripCard } from "@/components/trip-card";
import { GroupCard } from "@/components/group-card";

import { notFound } from "next/navigation";
import { PageSection } from "@/components/page-section";

type LocationPageProps = {
  params: Promise<{ locationSlug: string }>;
};
export default async function LocationPage({ params }: LocationPageProps) {
  const locationSlug = (await params).locationSlug.toString();
  const location = await getLocation({ locationSlug });
  const groups = await getGroupList({ locationSlug, take: 5 });
  const events = await getEventList({ locationSlug, take: 4 });

  if (!location) return notFound();
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <PageSection
        href="/groups"
        label={
          <span>
            Trending Groups from{" "}
            <span className="text-destructive">{location.city}</span>
          </span>
        }
        description={` Join local travel communities in ${location.city} and connect with
            fellow explorers for amazing weekend trips.`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups.length ? (
            groups.map((group) => (
              <GroupCard location={location} key={group.id} group={group} />
            ))
          ) : (
            <p>No groups</p>
          )}
        </div>
      </PageSection>

      <PageSection
        href="/trips"
        label={
          <span>
            Trending Trips from{" "}
            <span className="text-destructive">{location.city}</span>
          </span>
        }
        description={`Browse and compare budget-friendly weekend trips organized by
            different travel groups in {location.city}`}
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
