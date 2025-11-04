import { getGroupList } from "@/actions/group";
import Empty from "@/components/empty";
import { DestinationsFilter } from "@/components/filters/destinations/destinations-filter";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { GroupCard } from "@/components/groups/group-card";
import { GroupsSkeleton } from "@/components/groups/groups-skeleton";
import { PageSection } from "@/components/page-section";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Find & Compare the Best Travel Groups for Weekend Trips",
  description: `Explore verified travel groups for weekend getaways. Compare prices, join budget-friendly trips, and find the best group tours near you.`,
  keywords: [
    "find the best travel groups in India",
    "compare travel groups for weekend trips",
    "top-rated travel groups in India",
    "budget travel groups for weekend getaways",
    "adventure travel groups in India",
    "join local travel groups for weekend trips",
    "affordable group trips and trekking tours",
    "1-day & 2-day travel groups in India",
    "best travel communities for weekend trips",
    "compare prices for group travel in India",
    "women-only travel groups in India",
    "solo traveler groups for weekend getaways",
    "short adventure trips with travel groups",
    "best group tours for weekend escapes",
    "local trekking and adventure travel groups",
    "find budget travel groups near me",
    "verified travel groups with price comparison",
    "road trip groups for short getaways",
    "trekking communities for weekend trips",
    "compare budget vs luxury travel groups",
  ],
};

export default async function GroupsPage({
  searchParams,
}: PageProps<"/groups">) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={<span>Explore Groups</span>}
        others={
          <div className="flex items-center flex-wrap gap-2  md:justify-end justify-start">
            <Suspense fallback={<Skeleton className="h-9 w-32 rounded-md" />}>
              <LocationsFilter />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-9 w-32 rounded-md" />}>
              <DestinationsFilter />
            </Suspense>
          </div>
        }
      >
        <Suspense fallback={<GroupsSkeleton />}>
          <GroupsPageWrapper searchParamsPromise={searchParams} />
        </Suspense>
      </PageSection>
    </div>
  );
}
async function GroupsPageWrapper({ searchParamsPromise }) {
  const locations = (await searchParamsPromise).locations ?? "";
  const destinations = (await searchParamsPromise).destinations ?? "";

  const groups = await getGroupList({
    locationSlug: locations as string,
    destinationSlug: destinations as string,
  });

  if (!groups.length) return <Empty title={"Groups"} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}
