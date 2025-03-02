import { DURATIONS } from "@/lib/constatnts";
import { SelectDurations } from "./select-durations";

export function DurationsFilter() {
  return <SelectDurations options={DURATIONS} />;
}
