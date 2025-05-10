import { GroupsLogoCarousel } from "./groups-logo-carousel";
import { getGroupsLogo } from "@/actions/group";

export async function GroupsLogo() {
  const groupsLogo = await getGroupsLogo();
  return <GroupsLogoCarousel groupsLogo={groupsLogo} />;
}
