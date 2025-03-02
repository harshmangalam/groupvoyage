import { getLocationsOption } from "@/actions/location";
import { SelecLocations } from "./select-locations";

export async function LocationsFilter() {
  const locations = await getLocationsOption();
  return <SelecLocations locations={locations} />;
}
