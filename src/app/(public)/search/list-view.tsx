import { TripCard } from "@/components/trip-card";
import { T_EventCard } from "@/lib/types";

export function ListView({ trips }: { trips: T_EventCard[] }) {
  if (!trips.length) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {trips.map((trip) => (
        <TripCard key={trip.id} event={trip} />
      ))}
    </div>
  );
}
