import { StatsCard } from "./stats-card";
import { getPublicStats } from "@/actions/common";

export async function Stats() {
  const publicStats = await getPublicStats();
  return (
    <div className="grid grid-cols-4  gap-4">
      <StatsCard label="Locations" count={publicStats.locationsCount} />
      <StatsCard label="Groups" count={publicStats.groupsCount} />
      <StatsCard
        label="Insagram groups"
        count={publicStats.instagramProfilesCount}
      />
      <StatsCard label="Trips" count={publicStats.eventsCount} />
    </div>
  );
}
