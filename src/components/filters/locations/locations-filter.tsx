import { getLocationsOption } from "@/actions/location";
import { CustomDropdownMenu } from "../../custom-dropdown-menu";
import { LocationsDropdown } from "./locations-dropdown";
import { ButtonProps } from "@/components/ui/button";

export async function LocationsFilter({
  buttonProps,
}: {
  buttonProps?: ButtonProps;
}) {
  const locations = await getLocationsOption();
  const options = locations.map((l) => ({ label: l.city, value: l.slug }));
  return <LocationsDropdown options={options} buttonProps={buttonProps} />;
}
