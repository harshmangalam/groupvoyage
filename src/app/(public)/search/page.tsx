import SearchInput from "@/components/search-input";
import { getSearchResults } from "@/actions/common";
import { SITE_NAME } from "@/lib/constants";
import { PageSection } from "@/components/page-section";
import { SlidersHorizontal } from "lucide-react";
import { TripCard } from "@/components/trips/trip-card";
import { FiltersSidebar } from "@/components/filters-sidebar/filters-sidebar";
import { CategoriesCarousel } from "@/components/categories/categories-carousel";
import { GroupsCarousel } from "@/components/groups/groups-carousel";
import { LocationsCarousel } from "@/components/locations/locations-carousel";
import Empty from "@/components/empty";
import { DestinationsCarousel } from "@/components/destinations/destinations-carousel";
import { InstagramProfilesCarousel } from "@/components/instagram/instagram-carousel";
import { Filters } from "@/components/filters-sidebar/filters";
import { Suspense } from "react";

export async function generateMetadata() {
  return {
    title: `Search`,
    description: `Discover details, Compare prices, check itinerary, and choose the best travel experience on ${SITE_NAME}.`,
  };
}

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  return (
    <div className="container mx-auto px-4 py-4 flex-1 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters - Hidden on mobile, sticky on desktop */}
      <aside className="hidden lg:block w-80 sticky top-20 self-start max-h-[calc(100vh-theme(space.12))] overflow-y-auto pr-4">
        <div className="bg-background rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <Filters />
        </div>
      </aside>
      <Suspense>
        <SearchWrapper searchParamsPromise={searchParams} />
      </Suspense>
    </div>
  );
}
async function SearchWrapper({ searchParamsPromise }) {
  const {
    q = "",
    locations,
    durations = "",
    priceRange,
  } = await searchParamsPromise;
  const {
    events,
    groups,
    instagramProfiles,
    destinations,
    locationsList,
    categories,
  } = await getSearchResults({
    search: q as string,
    locationSlug: locations as string,
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
    <main className="flex-1">
      {/* Results Header */}
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            {totalCount} {totalCount === 1 ? "result" : "results"} found{" "}
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Showing matches across <span className="font-medium">Groups</span>,{" "}
            <span className="font-medium">Trips</span>,{" "}
            <span className="font-medium">locations</span>,{" "}
            <span className="font-medium">Instagram Profiles</span>,{" "}
            <span className="font-medium">Categories</span> and{" "}
            <span className="font-medium">Destinations</span>.
          </p>
        </div>
        <FiltersSidebar>
          <Filters />
        </FiltersSidebar>
      </div>

      {/* Search Input (Desktop) */}
      <div className="mb-6">
        <SearchInput />
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
  );
}
