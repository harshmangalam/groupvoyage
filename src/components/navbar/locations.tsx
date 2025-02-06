import { getLocations } from "@/actions/locations";
import { LocationsCombobox } from "./locations-combobox";

export async function Locations() {
  const locations = await getLocations({ fields: ["city", "slug"] });
  return <LocationsCombobox locations={locations} />;
}
