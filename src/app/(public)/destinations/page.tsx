import { getDestinationList } from "@/services/destinations";
import { CustomPagination } from "@/components/custom-pagination";
import { DestinationCard } from "@/components/destinations/destination-card";
import { DestinationsSkeleton } from "@/components/destinations/destinations-skeleton";
import Empty from "@/components/empty";
import { GroupsFilter } from "@/components/filters/groups/groups-filter";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { PageSection } from "@/components/page-section";
import { Skeleton } from "@/components/ui/skeleton";
import { DESTINATIONS_PER_PAGE } from "@/lib/constants";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekend Trips from Major Indian Cities | Compare Group Trip Prices",
  description:
    "Discover curated weekend group trips from major Indian cities. Compare prices for 1-day and 2-day getaways, trekking trips, and budget-friendly weekend experiences.",
  keywords: [
    "weekend trips from cities in India",
    "weekend group trips from major cities",
    "1 day trips from Indian cities",
    "2 day weekend trips from India",
    "weekend getaways near major cities",
    "group weekend trips India",
    "budget weekend trips from cities",
    "trekking trips from Indian cities",
    "short weekend trips India",
    "compare weekend trip prices",
  ],
};

export default async function DestinationsPage({
  searchParams,
}: PageProps<"/destinations">) {
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <PageSection
        label={<span>Explore Destinations</span>}
        others={
          <div className="flex items-center gap-2">
            <Suspense fallback={<Skeleton className="h-9 w-32 rounded-md" />}>
              <LocationsFilter />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-9 w-32 rounded-md" />}>
              <GroupsFilter />
            </Suspense>
          </div>
        }
      >
        <Suspense fallback={<DestinationsSkeleton />}>
          <DestinationsWrapper searchParamsPromise={searchParams} />
        </Suspense>
      </PageSection>
    </div>
  );
}
async function DestinationsWrapper({ searchParamsPromise }) {
  const pageStr = (await searchParamsPromise).page ?? "1";
  const page = Number(pageStr);
  const locations = (await searchParamsPromise).locations ?? "";
  const groups = (await searchParamsPromise).groups ?? "";

  const destinations = await getDestinationList({
    take: DESTINATIONS_PER_PAGE,
    skip: (page - 1) * DESTINATIONS_PER_PAGE,
    locationSlug: locations as string,
    groupSlug: groups as string,
  });

  if (!destinations.destinations.length) {
    return <Empty title={"destinations"} />;
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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
    </div>
  );
}
