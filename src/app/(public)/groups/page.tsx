import { getGroupList } from "@/actions/group";
import { LocationsFilter } from "@/components/filters/locations-filter";
import { GroupCard } from "@/components/group-card";
import { PageSection } from "@/components/page-section";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

type GroupsPageProps = {
  searchParams: Promise<{ locations: string; durations: string }>;
};
export default async function GroupsPage({ searchParams }: GroupsPageProps) {
  const locations = (await searchParams).locations ?? "";
  const groups = await getGroupList({ locationSlug: locations });
  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={
          <span>
            Explore <span className="text-destructive">Groups</span>
          </span>
        }
        others={
          <div className="flex items-center flex-wrap gap-2 flex-1 justify-end">
            <Suspense
              fallback={<Skeleton className="h-10 w-32 rounded-md" />}
              key={`locations-filter`}
            >
              <LocationsFilter />
            </Suspense>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups.length ? (
            groups.map((group) => (
              <GroupCard
                location={group.locations[0]}
                key={group.id}
                group={group}
              />
            ))
          ) : (
            <p>No groups</p>
          )}
        </div>
      </PageSection>
    </div>
  );
}
