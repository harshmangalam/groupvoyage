import { getGroupList } from "@/actions/group";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { GroupCard } from "@/components/groups/group-card";
import { PageSection } from "@/components/page-section";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Explore Groups",
  description: `Discover and compare travel groups effortlessly. Filter by location and choose the best group trip for your journey.`,
};

type GroupsPageProps = {
  searchParams: Promise<{
    locations: string;
    durations: string;
    destinations: string;
  }>;
};
export default async function GroupsPage({ searchParams }: GroupsPageProps) {
  const locations = (await searchParams).locations ?? "";
  const destinations = (await searchParams).destinations ?? "";

  const groups = await getGroupList({
    locationSlug: locations,
    destinationSlug: destinations,
  });
  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={<span>Explore Groups</span>}
        others={
          <Suspense
            fallback={<Skeleton className="h-10 w-32 rounded-md" />}
            key={`locations-filter`}
          >
            <LocationsFilter />
          </Suspense>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups.length ? (
            groups.map((group) => <GroupCard key={group.id} group={group} />)
          ) : (
            <p>No groups</p>
          )}
        </div>
      </PageSection>
    </div>
  );
}
