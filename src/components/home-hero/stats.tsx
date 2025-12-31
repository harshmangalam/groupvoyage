import { StatsCard } from "./stats-card";
import { getPublicStats } from "@/actions/common";

export async function Stats() {
  const publicStats = await getPublicStats();
  return (
    <div className="px-4 py-12 max-w-4xl container w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-4">
      <StatsCard label="Locations" count={publicStats.locationsCount} />
      <StatsCard label="Destinations" count={publicStats.destinationsCount} />
      <StatsCard label="Trips" count={publicStats.eventsCount} />
      <StatsCard label="Groups" count={publicStats.groupsCount} />
    </div>
  );
}
