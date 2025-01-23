import { EventCard } from "@/components/event-card";
import { GroupCard } from "@/components/group-card";

export default function Home() {
  return (
    <div className="max-w-7xl px-4 mx-auto py-12">
      {/* Groups  */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Groups in Hyderabad</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...new Array(10)].map((_, i) => (
            <GroupCard
              key={i}
              groupName="Culinary Adventures"
              organiserName="Emily Chen"
              location="Chicago, IL"
              posterUrl="https://secure.meetupstatic.com/photos/event/b/d/9/a/clean_518628538.webp"
            />
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
