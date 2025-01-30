import { EventCard } from "@/components/event-card";

export default function GroupHomePage() {
  return (
    <section className="max-w-6xl px-4 mx-auto mt-12">
      <h3 className="text-xl font-semibold mb-4">Group Events</h3>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
  );
}
