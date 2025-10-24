import { getDestinationList } from "@/actions/destinations";
import { CustomPagination } from "@/components/custom-pagination";
import { DestinationCard } from "@/components/destinations/destination-card";
import Empty from "@/components/empty";
import { GroupsFilter } from "@/components/filters/groups/groups-filter";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { PageSection } from "@/components/page-section";
import { DESTINATIONS_PER_PAGE } from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata() {
  const destinationsName = (await getDestinationList({ take: 5 })).destinations
    .map((d) => d.name)
    .join(", ");
  return {
    title:
      "Best Weekend Trips - Explore 1-Day & 2-Day Getaways to Top Destinations",
    description: `Discover top weekend trips to ${destinationsName} & more. Compare prices, book 1-day & 2-day getaways, and explore adventure & scenic destinations.`,
    keywords: [
      "best weekend destinations in India",
      "top short trips for the weekend",
      "1-day and 2-day travel destinations",
      "affordable weekend getaways near me",
      "budget-friendly travel destinations in India",
      "best adventure destinations for weekend trips",
      "short road trips and weekend escapes",
      "top trekking destinations for weekend trips",
      "nature escapes and weekend retreats",
      "best holiday destinations for quick getaways",
      "best travel spots for short trips",
      "mountain getaways for weekend trips",
      "beach destinations for 2-day vacations",
      "best scenic destinations for short travel",
      "solo-friendly weekend travel destinations",
      "family-friendly weekend getaways",
      "top destinations for road trips in India",
      "nature and wildlife weekend travel spots",
      "best unexplored weekend destinations in India",
      "best offbeat weekend destinations near me",
    ],
  };
}

export default async function DestinationsPage({
  searchParams,
}: PageProps<"/destinations">) {
  const pageStr = (await searchParams).page ?? "1";
  const page = Number(pageStr);
  const locations = (await searchParams).locations ?? "";
  const groups = (await searchParams).groups ?? "";

  const destinations = await getDestinationList({
    take: DESTINATIONS_PER_PAGE,
    skip: (page - 1) * DESTINATIONS_PER_PAGE,
    locationSlug: locations as string,
    groupSlug: groups as string,
  });

  return (
    <div className="px-4 max-w-7xl mx-auto">
      <PageSection
        label={<span>Explore Destinations</span>}
        others={
          <div className="flex items-center gap-2">
            <LocationsFilter />
            <GroupsFilter />
          </div>
        }
      >
        {destinations.pagination.totalCount > 0 ? (
          <div>
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
          </div>
        ) : (
          <Empty title={"destinations"} />
        )}
      </PageSection>
    </div>
  );
}
