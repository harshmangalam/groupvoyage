import SearchInput from "@/components/search-input";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { DurationsFilter } from "@/components/filters/durations-filter";
import { ViewMode } from "./view-mode";
import { getSearchResults } from "@/actions/common";
import { ListView } from "./list-view";
import { SITE_NAME } from "@/lib/constants";
import { PageSection } from "@/components/page-section";
import { GroupCard } from "@/components/groups/group-card";
import { InstagramProfileCard } from "@/components/instagram/instagram-card";
import { DestinationCard } from "@/components/destinations/destination-card";
import PriceTable from "@/components/trips/price-table";

export async function generateMetadata({ searchParams }) {
  const { q } = await searchParams;

  return {
    title: !q ? `Search` : `Search for ${q}`,
    description: `Discover details about ${q} Compare prices, check itinerary, and choose the best travel experience on ${SITE_NAME}.`,
  };
}

export default async function SearchPage({ searchParams }) {
  const { viewMode = "list", q, locations, durations } = await searchParams;
  const { events, groups, instagramProfiles, destinations } =
    await getSearchResults({
      search: q,
      durations,
      locationSlug: locations,
    });

  return (
    <div className="max-w-7xl w-full mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="mb-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex-1 max-w-sm w-full">
            <SearchInput />
          </div>
          <div className="flex items-center gap-2">
            <LocationsFilter />
            <DurationsFilter />
          </div>
        </div>
      </div>

      {destinations?.destinations?.length ? (
        <PageSection
          label={`Destinations (${destinations?.destinations?.length ?? 0})`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
        </PageSection>
      ) : null}
      {instagramProfiles?.length ? (
        <PageSection label={`Instagram Groups (${instagramProfiles.length})`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {instagramProfiles.map((instagramProfile) => (
              <InstagramProfileCard
                key={instagramProfile.id}
                {...instagramProfile}
              />
            ))}
          </div>
        </PageSection>
      ) : null}
      {groups?.length ? (
        <PageSection label={`Groups (${groups?.length ?? 0})`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {groups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        </PageSection>
      ) : null}
      {events?.events?.length ? (
        <PageSection
          label={`Trips (${events?.events?.length ?? 0})`}
          others={<ViewMode />}
        >
          <div>
            {viewMode === "list" ? (
              <ListView trips={events.events} />
            ) : viewMode === "table" ? (
              <PriceTable trips={events.events} />
            ) : null}
          </div>
        </PageSection>
      ) : null}
    </div>
  );
}
