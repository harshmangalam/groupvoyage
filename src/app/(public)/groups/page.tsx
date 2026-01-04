import { getGroupList } from "@/services/group";
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
  title: "Verified Travel Groups for Weekend Trips in India | Compare & Choose",
  description:
    "Discover verified travel groups offering weekend trips across India. Compare organizers, trip styles, and prices to find the right group for your next weekend getaway.",
  keywords: [
    "travel groups for weekend trips",
    "verified travel groups in India",
    "weekend group trips India",
    "compare travel groups",
    "trekking and adventure travel groups",
    "budget travel groups India",
    "group travel organizers India",
    "local travel groups for weekend trips",
    "weekend trip organizers India",
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}
