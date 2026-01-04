import { getDestinationsOption } from "@/services/destinations";
import { DestinationsDropdown } from "./destinations-dropdown";
import { ButtonProps } from "@/components/ui/button";

export async function DestinationsFilter({
  buttonProps,
}: {
  buttonProps?: ButtonProps;
}) {
  const destinations = await getDestinationsOption();
  const options = destinations.map((l) => ({ label: l.name, value: l.slug }));
  return <DestinationsDropdown options={options} buttonProps={buttonProps} />;
}
