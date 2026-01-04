import { getEventList } from "@/services/event";
import { CustomPagination } from "@/components/custom-pagination";
import Empty from "@/components/empty";
import { TripCard } from "@/components/trips/trip-card";
import TripsSkeleton from "@/components/trips/trips-skeleton";
import { TRIPS_PER_PAGE } from "@/lib/constants";
import { Metadata } from "next";
import { Suspense } from "react";

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

export default async function TripsPage({ searchParams }: PageProps<"/trips">) {
  return (
    <Suspense fallback={<TripsSkeleton />}>
      <TripsWrapper searchParamsPromise={searchParams} />
    </Suspense>
  );
}
async function TripsWrapper({ searchParamsPromise }) {
  const {
    locations = "",
    destinations = "",
    categories = "",
    durations = "",
    page = "1",
    priceRange = "",
    groups = "",
  } = await searchParamsPromise;

  const pageNum = Number(page);

  const events = await getEventList({
    locationSlug: locations as string,
    durations: durations as any,
    take: TRIPS_PER_PAGE,
    skip: (pageNum - 1) * TRIPS_PER_PAGE,
    destinationSlug: destinations as string,
    categories: categories as string,
    priceRange,
    groupSlug: groups as string,
  });

  if (!events.events.length) {
    return <Empty title={"results"} showSearch={false} showHome={false} />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.events.map((event) => (
          <TripCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mt-6">
        <CustomPagination {...events.pagination} />
      </div>
    </div>
  );
}
