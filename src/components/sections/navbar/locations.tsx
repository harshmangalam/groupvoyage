import { getLocationsOption } from "@/actions/location";
import { LocationsCombobox } from "./locations-combobox";

export async function Locations() {
  const locations = await getLocationsOption();
  return <LocationsCombobox locations={locations} />;
}
