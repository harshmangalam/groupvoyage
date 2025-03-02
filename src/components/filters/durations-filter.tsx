import { DURATIONS } from "@/lib/constatnts";
import { FiltersMenu } from "./filters-menu";

export function DurationsFilter() {
  return (
    <FiltersMenu options={DURATIONS} label="Durations" paramKey="durations" />
  );
}
