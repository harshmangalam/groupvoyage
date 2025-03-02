import { getLocationsOption } from "@/actions/location";
import { FiltersMenu } from "./filters-menu";

export async function LocationsFilter() {
  const locations = await getLocationsOption();
  const options = locations.map((l) => ({ label: l.city, value: l.slug }));
  return (
    <FiltersMenu label="Locations" options={options} paramKey="locations" />
  );
}
