import { getGroupList } from "@/actions/group";
import { getLocation } from "@/actions/location";
import { GroupCard } from "@/components/group-card";
import { notFound } from "next/navigation";

type LocationGroupPageProps = {
  params: Promise<{ locationSlug: string }>;
};
export default async function LocationGroupsPage({
  params,
}: LocationGroupPageProps) {
  const { locationSlug } = await params;
  const location = await getLocation({ locationSlug });
  const groups = await getGroupList({});

  if (!location) return notFound();
  return (
    <section className="py-12 flex flex-col gap-6 md:gap-10 container mx-auto">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-3xl font-bold tracking-tight">
          Explore Groups in{" "}
          <span className="text-destructive">{location.city}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {groups.length ? (
          groups.map((group) => (
            <GroupCard location={location} key={group.id} group={group} />
          ))
        ) : (
          <p>No groups</p>
        )}
      </div>
    </section>
  );
}
