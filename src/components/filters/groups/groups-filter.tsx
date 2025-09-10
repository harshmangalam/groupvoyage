import { GroupsDropdown } from "./groups-dropdown";
import { ButtonProps } from "@/components/ui/button";
import { getGroupsOption } from "@/actions/group";

export async function GroupsFilter({
  buttonProps,
}: {
  buttonProps?: ButtonProps;
}) {
  const groups = await getGroupsOption();
  const options = groups.map((l) => ({ label: l.name, value: l.slug }));
  return <GroupsDropdown options={options} buttonProps={buttonProps} />;
}
