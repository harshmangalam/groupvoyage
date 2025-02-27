import { getGroupList } from "@/actions/group";
import { GroupCard } from "@/components/group-card";
import { PageSection } from "@/components/page-section";

export default async function GroupsPage() {
  const groups = await getGroupList({});
  return (
    <div className="max-w-7xl mx-auto">
      <PageSection
        label={
          <span>
            Explore <span className="text-destructive">Groups</span>
          </span>
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
