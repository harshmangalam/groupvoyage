import { getDestinationList } from "@/actions/destinations";
import { CustomPagination } from "@/components/custom-pagination";
import { DestinationCard } from "@/components/destinations/destination-card";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { PageSection } from "@/components/page-section";
import { DESTINATIONS_PER_PAGE } from "@/lib/constatnts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Destinations",
  description:
    "Explore top weekend getaway destinations for a refreshing escape.",
};

type DestinationsPageProps = {
  searchParams: Promise<{ locations: string; durations: string; page: string }>;
};
export default async function DestinationsPage({
  searchParams,
}: DestinationsPageProps) {
  const pageStr = (await searchParams).page ?? "1";
  const page = Number(pageStr);
  const locations = (await searchParams).locations ?? "";

  const destinations = await getDestinationList({
    take: DESTINATIONS_PER_PAGE,
    skip: (page - 1) * DESTINATIONS_PER_PAGE,
    locationSlug: locations,
  });

  return (
    <div className="px-4 max-w-7xl mx-auto">
      <PageSection
        label={
          <span>
            Explore <span className="text-destructive">Destinations</span>
          </span>
        }
        others={
          <div>
            <LocationsFilter />
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {destinations.destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              eventsCount={destination._count.events}
              groupsCount={destination._count.groups}
              locations={destination.locations}
              name={destination.name}
              slug={destination.slug}
            />
          ))}
        </div>
        <div className="mt-6">
          <CustomPagination {...destinations.pagination} />
        </div>
      </PageSection>
    </div>
  );
}
