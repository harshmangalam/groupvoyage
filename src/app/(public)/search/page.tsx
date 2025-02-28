import { getSearchResults } from "@/actions/common";
import { GroupCard } from "@/components/group-card";
import { LocationCard } from "@/components/location-card";
import { PageSection } from "@/components/page-section";
import { TripCard } from "@/components/trip-card";

type LocationPageProps = {
  searchParams: Promise<{ q: string }>;
};
export default async function SeacrhPage({ searchParams }: LocationPageProps) {
  const q = (await searchParams).q;
  const search = q?.trim();
  const { events, groups, locations } = await getSearchResults(search);
  return (
    <div className="max-w-7xl mx-auto py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
        Search Results for <span className="text-destructive">{search}</span>
      </h1>

      <PageSection label={<span>Locations</span>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {locations?.length ? (
            locations.map((location) => (
              <LocationCard key={location.id} {...location} />
            ))
          ) : (
            <p>No matches found</p>
          )}
        </div>
      </PageSection>

      <PageSection label={<span>Groups</span>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups?.length ? (
            groups.map((group) => (
              <GroupCard
                key={group.id}
                location={group.locations[0]}
                group={group}
              />
            ))
          ) : (
            <p>No matches found</p>
          )}
        </div>
      </PageSection>

      <PageSection label={<span>Trips</span>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {events?.length ? (
            events.map((event) => <TripCard key={event.id} event={event} />)
          ) : (
            <p>No matches found</p>
          )}
        </div>
      </PageSection>
    </div>
  );
}
