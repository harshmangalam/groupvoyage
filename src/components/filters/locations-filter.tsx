import { getLocationsOption } from "@/actions/location";
import { CustomDropdownMenu } from "../custom-dropdown-menu";

export async function LocationsFilter() {
  const locations = await getLocationsOption();
  const options = locations.map((l) => ({ label: l.city, value: l.slug }));
  return (
    <CustomDropdownMenu
      placeholder="Filter Locations"
      options={options}
      label="Locations"
      paramKey="locations"
    />
  );
}
