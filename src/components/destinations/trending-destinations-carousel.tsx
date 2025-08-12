import * as React from "react";

import { getDestinationList } from "@/actions/destinations";
import { DestinationsCarousel } from "./destinations-carousel";
export async function TrendingDestinationsCarousel({
  locationSlug,
  groupSlug,
}: {
  locationSlug?: string;
  groupSlug?: string;
}) {
  const destinations = await getDestinationList({
    take: 10,
    locationSlug,
    groupSlug,
  });
  return <DestinationsCarousel destinations={destinations.destinations} />;
}
