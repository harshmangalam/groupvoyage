import { getGroupList } from "@/actions/group";
import { GroupCard } from "@/components/group-card";

export default async function GroupsPage() {
  const groups = await getGroupList({});
  return (
    <section className="py-12 flex flex-col gap-6 md:gap-10 container mx-auto">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-3xl font-bold tracking-tight">
          Explore <span className="text-destructive">Groups</span> on
          GroupVoyage
        </h2>
      </div>

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
    </section>
  );
}
