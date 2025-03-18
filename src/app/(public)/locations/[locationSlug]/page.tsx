import { getEventList } from "@/actions/event";
import { getGroupList } from "@/actions/group";
import { getLocation } from "@/actions/location";

import { notFound } from "next/navigation";
import { PageSection } from "@/components/page-section";
import { GroupsCarousel } from "@/components/groups-carousel";
import { TripsCarousel } from "@/components/trips-carousel";
import { SITE_NAME } from "@/lib/constatnts";
import { InstagramProfilesCarosel } from "@/components/instagram-profiles-carousel";
import { getInstagramProfileList } from "@/actions/instagram-profile";

type LocationPageProps = {
  params: Promise<{ locationSlug: string }>;
};

export async function generateMetadata({ params }) {
  const { locationSlug } = await params;
  const location = await getLocation({ locationSlug });
  return {
    title: `Explore ${location?.city} Top Groups & Trips`,
    description: `Discover groups and trips in ${location?.city}. Compare prices and join budget-friendly adventures with ${SITE_NAME}.`,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const locationSlug = (await params).locationSlug.toString();
  const location = await getLocation({ locationSlug });
  const groups = await getGroupList({ locationSlug, take: 10 });
  const instagramProfiles = await getInstagramProfileList({
    locationSlug,
    take: 10,
  });
  const oneDayEvents = await getEventList({
    locationSlug,
    take: 10,
    durations: "1 day",
  });
  const twoDaysEvents = await getEventList({
    locationSlug,
    take: 10,
    durations: "2 day",
  });

  if (!location) return notFound();
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <PageSection
        href={`/instagram-profiles?locations=${locationSlug}`}
        label={
          <span>
            Instagram groups from{" "}
            <span className="text-destructive">{location.city} </span>
          </span>
        }
      >
        <InstagramProfilesCarosel instagramProfiles={instagramProfiles} />
      </PageSection>
      <PageSection
        href={`/groups?locations=${locationSlug}`}
        label={
          <span>
            Trending Groups from{" "}
            <span className="text-destructive">{location.city}</span>
          </span>
        }
        description={` Join local travel communities in ${location.city} and connect with
            fellow explorers for amazing weekend trips.`}
      >
        <GroupsCarousel groups={groups} />
      </PageSection>

      <PageSection
        href={`/trips/?locations=${locationSlug}&durations=1-day`}
        label={
          <span>
            Trending 1 Day Trips from{" "}
            <span className="text-destructive">{location.city}</span>
          </span>
        }
        description={`Browse and compare budget-friendly weekend trips organized by
            different travel groups in {location.city}`}
      >
        <TripsCarousel events={oneDayEvents.events} />
      </PageSection>
      <PageSection
        href={`/trips/?locations=${locationSlug}&durations=2-days`}
        label={
          <span>
            Trending 2 Days Trips from{" "}
            <span className="text-destructive">{location.city}</span>
          </span>
        }
      >
        <TripsCarousel events={twoDaysEvents.events} />
      </PageSection>
    </div>
  );
}
