import { getLocation } from "@/services/location";
import { notFound } from "next/navigation";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
import { TrendingGroupsCarousel } from "@/components/groups/featured-groups-carousel";
import { ErrorBoundary } from "react-error-boundary";
import { InstagramsGrid } from "@/components/instagram/instagrams-grid";
import { InstagramsGridSkeleton } from "@/components/instagram/instagrams-grid-skeleton";
import { DestinationsGrid } from "@/components/destinations/destinations-grid";
import { DestinationsGridSkeleton } from "@/components/destinations/destinations-grid-skeleton";

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
  const { locationSlug } = await params;
  const location = await getLocation({ locationSlug });

  if (!location) return notFound();
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <PageSection
        href={`/destinations/?locations=${locationSlug}`}
        label={<span> Weekend Destinations From {location.city}</span>}
        description={`Stunning spots near ${location.city} perfect for your next weekend escape.`}
      >
        <ErrorBoundary fallback={"DestinationsGrid error"}>
          <Suspense fallback={<DestinationsGridSkeleton />}>
            <DestinationsGrid
              locationSlug={locationSlug}
              showLocations={false}
            />
          </Suspense>
        </ErrorBoundary>
      </PageSection>

      <PageSection
        href={`/trips?priceRange=5000&locations=${location.slug}`}
        label={<span>Weekend Trips Under ₹5,000 from {location.city}</span>}
        description={`Explore affordable group weekend trips under ₹5,000 starting from ${location.city}`}
      >
        <ErrorBoundary fallback={"TrendingTripsCarousel error"}>
          <Suspense>
            <TrendingTripsCarousel
              locationSlug={locationSlug}
              priceRange={5000}
            />
          </Suspense>
        </ErrorBoundary>
      </PageSection>
      <PageSection
        label={<span>Best Deals This Weekend from {location.city}</span>}
        description={`Save more on popular group weekend trips from ${location.city}. Handpicked trips with the highest discounts and best value.`}
      >
        <ErrorBoundary fallback={"TrendingTripsCarousel error"}>
          <Suspense>
            <TrendingTripsCarousel
              locationSlug={locationSlug}
              orderBy={{
                discountPercentage: {
                  sort: "desc",
                  nulls: "last",
                },
              }}
            />
          </Suspense>
        </ErrorBoundary>
      </PageSection>

      <PageSection
        href={`/groups?locations=${locationSlug}`}
        label={<span>Top Travel Groups from {location.city}</span>}
        description={`Connect with active travel groups organizing weekend trips from ${location.city}`}
      >
        <ErrorBoundary fallback={"TrendingGroupsCarousel error"}>
          <Suspense>
            <TrendingGroupsCarousel locationSlug={locationSlug} />
          </Suspense>
        </ErrorBoundary>
      </PageSection>

      <PageSection
        href={`/trips/?locations=${locationSlug}&durations=short-trips`}
        label={<span>Epic 1-Day Trips from {location.city}</span>}
        description={`Discover unmissable 1 day short weekend trips near ${location.city}`}
      >
        <ErrorBoundary fallback={"TrendingTripsCarousel error"}>
          <Suspense>
            <TrendingTripsCarousel
              locationSlug={locationSlug}
              durations={"short-trips"}
            />
          </Suspense>
        </ErrorBoundary>
      </PageSection>

      <PageSection
        href={`/trips/?locations=${locationSlug}&durations=weekend-trips`}
        label={<span>Epic 2-Days Trips from {location.city}</span>}
        description={`Discover unmissable 2 days weekend trips near ${location.city}`}
      >
        <ErrorBoundary fallback={"TrendingTripsCarousel error"}>
          <Suspense>
            <TrendingTripsCarousel
              locationSlug={locationSlug}
              durations={"weekend-trips"}
            />
          </Suspense>
        </ErrorBoundary>
      </PageSection>

      <PageSection
        href={`/instagram-profiles?locations=${locationSlug}`}
        label={<span>Instagram Travel Groups From {location.city}</span>}
        description={` Top ${location.city}-based Instagram communities planning your next weekend getaway.`}
      >
        <ErrorBoundary fallback={"InstagramsGrid error"}>
          <Suspense fallback={<InstagramsGridSkeleton />}>
            <InstagramsGrid locationSlug={locationSlug} />
          </Suspense>
        </ErrorBoundary>
      </PageSection>

      <PageSection
        href={`/trips/?locations=${locationSlug}&durations=long-weekend`}
        label={<span>Epic 3+ days Trips from {location.city}</span>}
        description={`Discover unmissable 3+ days long weekend trips near ${location.city}`}
      >
        <ErrorBoundary fallback={"TrendingTripsCarousel error"}>
          <Suspense>
            <TrendingTripsCarousel
              locationSlug={locationSlug}
              durations={"long-weekend"}
            />
          </Suspense>
        </ErrorBoundary>
      </PageSection>
    </div>
  );
}
