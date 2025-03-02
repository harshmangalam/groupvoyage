import { getLocationsOption } from "@/actions/location";
import { LocationsCombobox } from "./locations-combobox";

export async function LocationsFilter() {
  const locations = await getLocationsOption();
  await new Promise((r) => setTimeout(r, 5000));
  return <LocationsCombobox locations={locations} />;
}
