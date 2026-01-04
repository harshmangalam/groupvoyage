import * as React from "react";

import { getInstagramProfileList } from "@/services/instagram-profile";
import { InstagramProfilesCarousel } from "./instagram-carousel";

export async function TrendingInstagramProfiles({
  locationSlug,
}: {
  locationSlug?: string;
}) {
  const instagramProfiles = await getInstagramProfileList({
    take: 10,
    locationSlug,
  });

  return (
    <InstagramProfilesCarousel instagramProfiles={instagramProfiles ?? []} />
  );
}
