import * as React from "react";

import { getLocations } from "@/services/location";
import { LocationsCarousel } from "./locations-carousel";

export async function TrendingLocationsCarousel() {
  const locations = await getLocations({
    take: 10,
  });

  return <LocationsCarousel locations={locations} />;
}
