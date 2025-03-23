import { getLocation } from "@/actions/location";
import { notFound } from "next/navigation";
import { PageSection } from "@/components/page-section";
import { SITE_NAME } from "@/lib/constatnts";
import { TrendingInstagramProfiles } from "@/components/instagram/trending-instagram-profiles";
import { Suspense } from "react";
import { TrendingDestinationsCarousel } from "@/components/destinations/trending-destinations-carousel";
import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
import { TrendingGroupsCarousel } from "@/components/groups/featured-groups-carousel";

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

  if (!location) return notFound();

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <PageSection
        href={`/instagram-profiles?locations=${locationSlug}`}
        label={<span>Instagram Travel Groups From {location.city}</span>}
        description={`Discover top travel groups on Instagram from ${location.city} for your next getaway`}
      >
        <TrendingInstagramProfiles locationSlug={locationSlug} />
      </PageSection>
      <PageSection
        href={`/destinations/?locations=${locationSlug}`}
        label={<span> Weekend Destinations From {location.city}</span>}
        description={`Stunning spots near ${location.city} you need to explore.`}
      >
        <Suspense key={`featured-destinations-${locationSlug}`}>
          <TrendingDestinationsCarousel locationSlug={locationSlug} />
        </Suspense>
      </PageSection>

      <PageSection
        href={`/groups?locations=${locationSlug}`}
        label={<span>Top Travel Groups from {location.city}</span>}
        description={`Connect with the top travel groups starting from ${location.city}.`}
      >
        <Suspense key={`featured-groups-${locationSlug}`}>
          <TrendingGroupsCarousel locationSlug={locationSlug} />
        </Suspense>
      </PageSection>

      <PageSection
        href={`/trips/?locations=${locationSlug}&durations=2-days`}
        label={<span>Epic 2-Days Trips from {location.city}</span>}
        description={`Discover unmissable 2-days weekend trips near ${location.city}`}
      >
        <Suspense key={`featured-events-2-days-${locationSlug}`}>
          <TrendingTripsCarousel
            locationSlug={locationSlug}
            durations={"2-days"}
          />
        </Suspense>
      </PageSection>

      <PageSection
        href={`/trips/?locations=${locationSlug}&durations=1-day`}
        label={<span>Epic 1-Day Trips from {location.city}</span>}
        description={`Discover unmissable 1-day weekend trips near ${location.city}`}
      >
        <Suspense key={`featured-events-1-day-${locationSlug}`}>
          <TrendingTripsCarousel
            locationSlug={locationSlug}
            durations={"1-day"}
          />
        </Suspense>
      </PageSection>
    </div>
  );
}
