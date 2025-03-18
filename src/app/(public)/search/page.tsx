import SearchInput from "@/components/search-input";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { DurationsFilter } from "@/components/filters/durations-filter";
import { ViewMode } from "./view-mode";
import { getSearchResults } from "@/actions/common";
import TableView from "./table-view";
import { ListView } from "./list-view";
import { SITE_NAME } from "@/lib/constatnts";
import { PageSection } from "@/components/page-section";
import { GroupCard } from "@/components/group-card";
import { InstagramProfileCard } from "@/components/instagram-card";

export async function generateMetadata({ searchParams }) {
  const { q } = await searchParams;

  return {
    title: !q ? `Search` : `Search for ${q}`,
    description: `Discover details about ${q} Compare prices, check itinerary, and choose the best travel experience on ${SITE_NAME}.`,
  };
}

export default async function SearchPage({ searchParams }) {
  const { viewMode = "list", q, locations, durations } = await searchParams;
  const { events, groups, instagramProfiles } = await getSearchResults({
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

      <PageSection
        label={`${events?.events?.length ?? 0} Trips found`}
        others={<ViewMode />}
      >
        {events?.events?.length ? (
          <div>
            {viewMode === "list" ? (
              <ListView trips={events.events} />
            ) : viewMode === "table" ? (
              <TableView trips={events.events} />
            ) : null}
          </div>
        ) : (
          <p className="text-muted-foreground">No trips found</p>
        )}
      </PageSection>

      {groups?.length ? (
        <PageSection label={`${groups?.length ?? 0} Groups found`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {groups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        </PageSection>
      ) : null}
      {instagramProfiles?.length ? (
        <PageSection label={`${groups?.length ?? 0} Instagram groups found`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
            {instagramProfiles.map((instagramProfile) => (
              <InstagramProfileCard
                key={instagramProfile.id}
                {...instagramProfile}
              />
            ))}
          </div>
        </PageSection>
      ) : null}
    </div>
  );
}
