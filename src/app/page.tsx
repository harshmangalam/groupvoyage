import { GroupCard } from "@/components/group-card";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      {/* Groups  */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Groups in Hyderabad</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...new Array(10)].map(() => (
            <GroupCard />
          ))}
        </div>
      </section>
    </div>
  );
}
