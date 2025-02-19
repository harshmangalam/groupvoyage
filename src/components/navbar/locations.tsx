import { getLocationsOption } from "@/actions/locations";
import { LocationsCombobox } from "./locations-combobox";

export async function Locations() {
  const locations = await getLocationsOption();
  return <LocationsCombobox locations={locations} />;
}
