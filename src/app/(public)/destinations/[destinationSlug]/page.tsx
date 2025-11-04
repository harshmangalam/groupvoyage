import { notFound } from "next/navigation";
import { PageSection } from "@/components/page-section";
import { getDestinationDetails } from "@/actions/destinations";
import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
import { Suspense } from "react";
import { TrendingGroupsCarousel } from "@/components/groups/featured-groups-carousel";
import ComparePrice from "./compare-price";

export async function generateMetadata({
  params,
}: PageProps<"/destinations/[destinationSlug]">) {
  const { destinationSlug } = await params;
  const destination = await getDestinationDetails({ destinationSlug });
  return {
    title: `Weekend Trip to ${destination?.name} - Best 1-Day & 2-Day Getaways`,
    description: `Plan a weekend trip to ${destination?.name}. Compare prices, check itineraries, and book 1-day & 2-day group trips. Explore adventure, trekking & scenic getaways!`,
    keywords: [
      `weekend trip to ${destination?.name}`,
      `best 1-day and 2-day trips to ${destination?.name}`,
      `budget-friendly weekend trips to ${destination?.name}`,
      `group trips to ${destination?.name}`,
      `short trips to ${destination?.name} from major cities`,
      `top places to visit in ${destination?.name} this weekend`,
      `adventure and trekking trips to ${destination?.name}`,
      `road trip to ${destination?.name} this weekend`,
      `scenic getaways to ${destination?.name}`,
      `best weekend travel packages for ${destination?.name}`,
      `affordable travel deals for ${destination?.name}`,
      `top things to do in ${destination?.name} on a short trip`,
      `family-friendly weekend trips to ${destination?.name}`,
      `solo and group travel to ${destination?.name}`,
      `offbeat weekend escapes to ${destination?.name}`,
    ],
  };
}

export default async function DestinationDetailsPage({
  params,
}: PageProps<"/destinations/[destinationSlug]">) {
  return (
    <div className="max-w-7xl px-4 mx-auto relative">
      <Suspense>
        <DestinationDetailsWrapper paramsPromise={params} />
      </Suspense>
    </div>
  );
}

async function DestinationDetailsWrapper({ paramsPromise }) {
  const destinationSlug = (await paramsPromise).destinationSlug.toString();
  const destination = await getDestinationDetails({ destinationSlug });
  if (!destination) return notFound();
  return (
    <>
      <PageSection
        href={`/groups?destinations=${destinationSlug}`}
        label={<span>{destination.name} Getaways with Top Groups</span>}
        description={`Unwind in ${destination.name} with curated group trips for a perfect escape`}
      >
        <Suspense>
          <TrendingGroupsCarousel destinations={destinationSlug} />
        </Suspense>
      </PageSection>

      <PageSection
        href={`/trips/?destinations=${destinationSlug}`}
        label={<span>Trips to {destination.name}</span>}
        description={`Discover ${destination.name} with expertly planned trips for a memorable getaway`}
      >
        <Suspense>
          <TrendingTripsCarousel destinations={destinationSlug} />
        </Suspense>
      </PageSection>
      <PageSection
        label={<span> {destination.name} Price Comparison</span>}
        description={`Find the best deals for ${destination.name} across all available groups and trips.`}
      >
        <Suspense>
          <ComparePrice destinationSlug={destinationSlug} />
        </Suspense>
      </PageSection>
    </>
  );
}
