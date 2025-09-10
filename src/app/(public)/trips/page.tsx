import { getEventList } from "@/actions/event";
import { CustomPagination } from "@/components/custom-pagination";
import Empty from "@/components/empty";
import { Filters } from "@/components/filters-sidebar/filters";
import { FiltersSidebar } from "@/components/filters-sidebar/filters-sidebar";
import { FilterWrapper } from "@/components/filters-sidebar/filters-wrapper";
import { TripCard } from "@/components/trips/trip-card";
import { TRIPS_PER_PAGE } from "@/lib/constants";
import { SlidersHorizontal } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Weekend Trips - 1-Day & 2-Day Getaways at Affordable Price",
  description:
    "Explore the best weekend trips from major cities. Compare prices for 1-day & 2-day getaways, adventure tours, trekking trips, and road trips to top destinations.",
  keywords: [
    "best weekend trips",
    "1-day and 2-day trips",
    "short trips near me",
    "budget weekend getaways",
    "group trips for the weekend",
    "adventure weekend trips",
    "trekking weekend trips",
    "road trips for the weekend",
    "affordable group trips",
    "scenic weekend destinations",
    "best quick getaways",
    "short road trips from major cities",
    "family-friendly weekend trips",
    "solo travel weekend trips",
    "offbeat weekend escapes",
    "nature getaways this weekend",
    "best places to visit this weekend",
    "top weekend travel packages",
    "quick vacation ideas",
    "best 2-day tour packages",
  ],
};
type TripsPageProps = {
  searchParams: Promise<{
    locations: string;
    durations: string;
    page: string;
    destinations: string;
    categories: string;
    priceRange: string;
    groups: string;
  }>;
};
export default async function TripsPage({ searchParams }: TripsPageProps) {
  const {
    locations = "",
    destinations = "",
    categories = "",
    durations = "",
    page = "1",
    priceRange = "",
    groups = "",
  } = await searchParams;

  const pageNum = Number(page);

  const events = await getEventList({
    locationSlug: locations,
    durations: durations as any,
    take: TRIPS_PER_PAGE,
    skip: (pageNum - 1) * TRIPS_PER_PAGE,
    destinationSlug: destinations,
    categories,
    priceRange,
    groupSlug: groups,
  });

  return (
    <div className="container mx-auto px-4 py-4 flex-1 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters - Hidden on mobile, sticky on desktop */}
      <aside className="hidden lg:block w-80 sticky top-20 self-start max-h-[calc(100vh-theme(space.12))] overflow-y-auto pr-4">
        <div className="bg-background rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <FilterWrapper>
            <Filters />
          </FilterWrapper>
        </div>
      </aside>

      <main className="flex-1">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Explore Trips</h2>
          </div>
          <FiltersSidebar>
            <Filters />
          </FiltersSidebar>
        </div>

        {events.events.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-4">
            {events.events.map((event) => (
              <TripCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <Empty title={"results"} showSearch={false} showHome={false} />
        )}

        <div className="mt-6">
          <CustomPagination {...events.pagination} />
        </div>
      </main>
    </div>
  );
}
