import SearchInput from "@/components/search-input";
import { getSearchResults } from "@/actions/common";
import { SITE_NAME } from "@/lib/constants";
import { PageSection } from "@/components/page-section";
import { InstagramProfileCard } from "@/components/instagram/instagram-card";
import { SlidersHorizontal } from "lucide-react";
import { FilterContent } from "./filters";
import { TripCard } from "@/components/trips/trip-card";
import { FiltersSidebar } from "./filters-sidebar";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { DurationsFilter } from "@/components/filters/durations-filter";
import { CategoriesCarousel } from "@/components/categories/categories-carousel";
import { GroupsCarousel } from "@/components/groups/groups-carousel";
import { LocationsCarousel } from "@/components/locations/locations-carousel";
import Empty from "@/components/empty";
import { DestinationsCarousel } from "@/components/destinations/destinations-carousel";
import { InstagramProfilesCarousel } from "@/components/instagram/instagram-carousel";

export async function generateMetadata({ searchParams }) {
  const { q } = await searchParams;

  return {
    title: !q ? `Search` : `Search for ${q}`,
    description: `Discover details about ${q} Compare prices, check itinerary, and choose the best travel experience on ${SITE_NAME}.`,
  };
}

export default async function SearchPage({ searchParams }) {
  const { q = "", locations, durations = "", priceRange } = await searchParams;
  const {
    events,
    groups,
    instagramProfiles,
    destinations,
    locationsList,
    categories,
  } = await getSearchResults({
    search: q,
    locationSlug: locations,
    priceRange,
    durations: durations as any,
  });

  const totalCount =
    (events?.events.length ?? 0) +
    (groups?.length ?? 0) +
    (instagramProfiles?.length ?? 0) +
    (destinations?.destinations.length ?? 0) +
    (categories?.categories.length ?? 0) +
    (locationsList?.length ?? 0);

  return (
    <div className="container mx-auto px-4 py-4 flex-1 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters - Hidden on mobile, sticky on desktop */}
      <aside className="hidden lg:block w-80 sticky top-20 self-start max-h-[calc(100vh-theme(space.12))] overflow-y-auto pr-4">
        <div className="bg-background rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <FilterContent>
            <div className="flex flex-wrap gap-2">
              <LocationsFilter />
              <DurationsFilter />
            </div>
          </FilterContent>
        </div>
      </aside>

      <main className="flex-1">
        {/* Search Input (Desktop) */}
        <div className="mb-6">
          <SearchInput />
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">
              {totalCount} {totalCount === 1 ? "result" : "results"} found{" "}
            </h2>
            <p className="text-muted-foreground text-sm">
              Showing matches across <span className="font-medium">Groups</span>
              , <span className="font-medium">Trips</span>,{" "}
              <span className="font-medium">Instagram Profiles</span>, and{" "}
              <span className="font-medium">Destinations</span>.
            </p>
          </div>
          <FiltersSidebar>
            <div className="flex flex-wrap gap-2">
              <LocationsFilter />
              <DurationsFilter />
            </div>
          </FiltersSidebar>
        </div>

        {categories?.categories?.length ? (
          <PageSection
            href="/categories"
            label={<span>Categories ({categories.categories.length})</span>}
            description="Pick a vibe. Pack your bag. Your weekend just got sorted."
          >
            <CategoriesCarousel categories={categories.categories} />
          </PageSection>
        ) : null}

        {destinations?.destinations?.length ? (
          <PageSection
            href="/destinations"
            label={<span>Must-Visit Weekend Destinations</span>}
            description="Dreamy spots you won’t want to miss this weekend."
          >
            <DestinationsCarousel destinations={destinations.destinations} />
          </PageSection>
        ) : null}

        {groups?.length ? (
          <PageSection
            href="/groups"
            label={<span>Groups</span>}
            description="Join the best groups for weekend adventures."
          >
            <GroupsCarousel groups={groups} />
          </PageSection>
        ) : null}

        {locationsList?.length ? (
          <PageSection
            href="/locations"
            label={<span>Locations</span>}
            description="Kick off your weekend trips from these locations"
          >
            <LocationsCarousel locations={locationsList} />
          </PageSection>
        ) : null}

        {instagramProfiles?.length ? (
          <PageSection
            href="/instagram-profiles"
            label={<span>Instagram Travel Groups</span>}
            description="Discover top travel groups from Instagram for your next getaway"
          >
            <InstagramProfilesCarousel instagramProfiles={instagramProfiles} />
          </PageSection>
        ) : null}

        {events?.events?.length ? (
          <PageSection label={`Trips (${events?.events?.length ?? 0})`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.events.map((trip) => (
                <TripCard key={trip.id} event={trip} />
              ))}
            </div>
          </PageSection>
        ) : null}

        {totalCount === 0 && (
          <Empty title={"results"} showSearch={false} showHome={false} />
        )}
      </main>
    </div>
  );
}
