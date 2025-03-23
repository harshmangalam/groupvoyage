import { getEventList } from "@/actions/event";
import { getGroupList } from "@/actions/group";

import { notFound } from "next/navigation";
import { PageSection } from "@/components/page-section";
import { GroupsCarousel } from "@/components/groups/groups-carousel";
import { getDestinationDetails } from "@/actions/destinations";
import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
import { Suspense } from "react";

type DestinationPageProps = {
  params: Promise<{ destinationSlug: string }>;
};

export async function generateMetadata({ params }) {
  const { destinationSlug } = await params;
  const destination = await getDestinationDetails({ destinationSlug });
  return {
    title: `Destination ${destination?.name}`,
    description: `Discover groups and trips going for ${destination?.name}.`,
  };
}

export default async function DestinationDetailsPage({
  params,
}: DestinationPageProps) {
  const destinationSlug = (await params).destinationSlug.toString();
  const destination = await getDestinationDetails({ destinationSlug });
  if (!destination) return notFound();
  const groups = await getGroupList({ destinationSlug, take: 10 });
  const events = await getEventList({
    destinationSlug,
    take: 10,
  });

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <PageSection
        href={`/groups?destinations=${destinationSlug}`}
        label={
          <span>
            Groups going for{" "}
            <span className="text-destructive">{destination.name}</span>
          </span>
        }
      >
        <GroupsCarousel groups={groups} />
      </PageSection>

      <PageSection
        href={`/trips/?destinations=${destinationSlug}`}
        label={
          <span>
            Trips going for{" "}
            <span className="text-destructive">{destination.name}</span>
          </span>
        }
      >
        <Suspense key={`featured-events-destination-${destinationSlug}`}>
          <TrendingTripsCarousel destinations={destinationSlug} />
        </Suspense>
      </PageSection>
    </div>
  );
}
