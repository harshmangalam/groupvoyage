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
        href={`/destinations/?locations=${locationSlug}`}
        label={
          <span>
            Trending destinations from{" "}
            <span className="text-destructive">{location.city}</span>
          </span>
        }
      >
        <Suspense key={`featured-destinations-${locationSlug}`}>
          <TrendingDestinationsCarousel locationSlug={locationSlug} />
        </Suspense>
      </PageSection>
      <PageSection
        href={`/instagram-profiles?locations=${locationSlug}`}
        label={
          <span>
            Instagram groups from{" "}
            <span className="text-destructive">{location.city} </span>
          </span>
        }
      >
        <TrendingInstagramProfiles locationSlug={locationSlug} />
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
        <Suspense key={`featured-groups-${locationSlug}`}>
          <TrendingGroupsCarousel locationSlug={locationSlug} />
        </Suspense>
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
        <Suspense key={`featured-events-1-day-${locationSlug}`}>
          <TrendingTripsCarousel
            locationSlug={locationSlug}
            durations={"1-day"}
          />
        </Suspense>
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
        <Suspense key={`featured-events-2-days-${locationSlug}`}>
          <TrendingTripsCarousel
            locationSlug={locationSlug}
            durations={"2-days"}
          />
        </Suspense>
      </PageSection>
    </div>
  );
}
