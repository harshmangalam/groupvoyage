import { EventCard } from "@/components/event-card";
import { GroupCard } from "@/components/group-card";
import { getGroups } from "@/services/groups";

export default async function Home() {
  const groups = await getGroups({
    locationId: "0194b5aa-6227-7000-b1ce-8ad011c0317b",
  });
  return (
    <div className="max-w-7xl px-4 mx-auto py-6 md:py-12">
      {/* Groups  */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Meetup Groups in Hyderabad
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups.map((group) => (
            <GroupCard key={group.id} {...group} />
          ))}
        </div>
      </section>

      {/* Events  */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Trips from Hyderabad</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...new Array(10)].map((_, i) => (
            <EventCard
              key={i}
              posterUrl="https://secure.meetupstatic.com/photos/event/c/f/0/5/600_523852997.webp?w=750"
              eventName="Bhongir Fort: 300 feet Rappelling & Trekking"
              price={99.99}
              date={new Date("2023-07-15")}
              time="7:00 PM"
              numberOfDays={3}
              location="Central Park, New York"
              groupName="escape and explore"
              dayName="Sunday"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
