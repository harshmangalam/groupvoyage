import * as React from "react";

import { getGroupList } from "@/actions/group";
import { GroupsCarousel } from "./groups-carousel";

export async function TrendingGroupsCarousel({
  locationSlug,
  destinations,
}: {
  locationSlug?: string;
  destinations?: string;
}) {
  const groups = await getGroupList({
    locationSlug,
    destinationSlug: destinations,
    take: 10,
  });
  return <GroupsCarousel groups={groups} />;
}
