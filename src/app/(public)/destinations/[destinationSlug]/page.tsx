import { notFound } from "next/navigation";
import { PageSection } from "@/components/page-section";
import { getDestinationDetails } from "@/actions/destinations";
import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
import { Suspense } from "react";
import { TrendingGroupsCarousel } from "@/components/groups/featured-groups-carousel";

type DestinationPageProps = {
  params: Promise<{ destinationSlug: string }>;
};

export async function generateMetadata({ params }) {
  const { destinationSlug } = await params;
  const destination = await getDestinationDetails({ destinationSlug });
  return {
    title: `${destination?.name}`,
    description: `Discover groups and trips going to ${destination?.name}.`,
  };
}

export default async function DestinationDetailsPage({
  params,
}: DestinationPageProps) {
  const destinationSlug = (await params).destinationSlug.toString();
  const destination = await getDestinationDetails({ destinationSlug });
  if (!destination) return notFound();
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <PageSection
        href={`/groups?destinations=${destinationSlug}`}
        label={<span>{destination.name} Getaways with Top Groups</span>}
        description={`Unwind in ${destination.name} with curated group trips for a perfect escape`}
      >
        <Suspense key={`featured-events-destination-${destinationSlug}`}>
          <TrendingGroupsCarousel destinations={destinationSlug} />
        </Suspense>
      </PageSection>

      <PageSection
        href={`/trips/?destinations=${destinationSlug}`}
        label={<span>Trips to {destination.name}</span>}
        description={`Discover ${destination.name} with expertly planned trips for a memorable getaway`}
      >
        <Suspense key={`featured-events-destination-${destinationSlug}`}>
          <TrendingTripsCarousel destinations={destinationSlug} />
        </Suspense>
      </PageSection>
    </div>
  );
}
