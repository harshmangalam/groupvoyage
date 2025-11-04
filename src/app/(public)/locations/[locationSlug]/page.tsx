import { getLocation } from "@/actions/location";
import { notFound } from "next/navigation";
import { PageSection } from "@/components/page-section";
import { TrendingInstagramProfiles } from "@/components/instagram/trending-instagram-profiles";
import { Suspense } from "react";
import { TrendingDestinationsCarousel } from "@/components/destinations/trending-destinations-carousel";
import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
import { TrendingGroupsCarousel } from "@/components/groups/featured-groups-carousel";

export async function generateMetadata({
  params,
}: PageProps<"/locations/[locationSlug]">) {
  const { locationSlug } = await params;
  const location = await getLocation({ locationSlug });
  return {
    title: `Explore ${location?.city} Travel Groups & Trips`,
    description: `Join the best travel groups in ${location?.city} for budget-friendly trips & treks. Explore weekend getaways, adventure tours, and affordable group travel options.`,
    keywords: [
      `travel groups in ${location?.city}`,
      `group trips from ${location?.city}`,
      `trekking groups in ${location?.city}`,
      `best weekend trips from ${location?.city}`,
      `1-day trips from ${location?.city}`,
      `2-day group trips from ${location?.city}`,
      `affordable weekend getaways from ${location?.city}`,
      `top trekking groups in ${location?.city} for weekends`,
      `budget adventure trips from ${location?.city}`,
      `compare weekend trip prices in ${location?.city}`,
      `best short travel escapes from ${location?.city}`,
      `local weekend travel groups in ${location?.city}`,
      `find the best 2-day trips from ${location?.city}`,
      `${location?.city} travel groups`,
    ],
  };
}

export default async function LocationDetailsPage({
  params,
}: PageProps<"/locations/[locationSlug]">) {
  return (
    <Suspense>
      <LocationDetailsWrapper paramsPromise={params} />
    </Suspense>
  );
}

async function LocationDetailsWrapper({ paramsPromise }) {
  const params = await paramsPromise;
  const location = await getLocation({ locationSlug: params.locationSlug });

  if (!location) return notFound();
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <PageSection
        href={`/instagram-profiles?locations=${params.locationSlug}`}
        label={<span>Instagram Travel Groups From {location.city}</span>}
        description={`Discover top travel groups on Instagram from ${location.city} for your next getaway`}
      >
        <Suspense>
          <TrendingInstagramProfiles locationSlug={params.locationSlug} />
        </Suspense>
      </PageSection>
      <PageSection
        href={`/destinations/?locations=${params.locationSlug}`}
        label={<span> Weekend Destinations From {location.city}</span>}
        description={`Stunning spots near ${location.city} you need to explore.`}
      >
        <Suspense>
          <TrendingDestinationsCarousel locationSlug={params.locationSlug} />
        </Suspense>
      </PageSection>

      <PageSection
        href={`/groups?locations=${params.locationSlug}`}
        label={<span>Top Travel Groups from {location.city}</span>}
        description={`Connect with the top travel groups starting from ${location.city}.`}
      >
        <Suspense>
          <TrendingGroupsCarousel locationSlug={params.locationSlug} />
        </Suspense>
      </PageSection>

      <PageSection
        href={`/trips/?locations=${params.locationSlug}&durations=short-trips`}
        label={<span>Epic 1-Day Trips from {location.city}</span>}
        description={`Discover unmissable 1 day short weekend trips near ${location.city}`}
      >
        <Suspense>
          <TrendingTripsCarousel
            locationSlug={params.locationSlug}
            durations={"short-trips"}
          />
        </Suspense>
      </PageSection>

      <PageSection
        href={`/trips/?locations=${params.locationSlug}&durations=weekend-trips`}
        label={<span>Epic 2-Days Trips from {location.city}</span>}
        description={`Discover unmissable 2 days weekend trips near ${location.city}`}
      >
        <Suspense>
          <TrendingTripsCarousel
            locationSlug={params.locationSlug}
            durations={"weekend-trips"}
          />
        </Suspense>
      </PageSection>
      <PageSection
        href={`/trips/?locations=${params.locationSlug}&durations=long-weekend`}
        label={<span>Epic 3+ days Trips from {location.city}</span>}
        description={`Discover unmissable 3+ days long weekend trips near ${location.city}`}
      >
        <Suspense>
          <TrendingTripsCarousel
            locationSlug={params.locationSlug}
            durations={"long-weekend"}
          />
        </Suspense>
      </PageSection>
    </div>
  );
}
