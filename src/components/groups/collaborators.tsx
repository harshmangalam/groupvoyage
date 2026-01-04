import { env } from "@/lib/env";
import { CollaboratorsCarousel } from "./collaborators-carousel";
import { getCollaborators } from "@/services/group";

export async function Collaborators() {
  const slugs = [];
  console.log(slugs);
  const groupsLogo = await getCollaborators({
    slugs,
  });
  return <CollaboratorsCarousel collaborators={groupsLogo} />;
}
