import { StatsCard } from "./stats-card";
import { getPublicStats } from "@/actions/common";

export async function Stats() {
  const publicStats = await getPublicStats();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <StatsCard label="Locations" count={publicStats.locationsCount} />
      <StatsCard label="Trips" count={publicStats.eventsCount} />
      <StatsCard label="Groups" count={publicStats.groupsCount} />
    </div>
  );
}
