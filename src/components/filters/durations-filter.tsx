import { DURATIONS } from "@/lib/constatnts";
import { CustomDropdownMenu } from "../custom-dropdown-menu";

export function DurationsFilter() {
  return (
    <CustomDropdownMenu
      placeholder="Filter Durations"
      options={DURATIONS}
      label="Durations"
      paramKey="durations"
    />
  );
}
