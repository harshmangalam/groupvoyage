import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { InstagramProfileCard } from "./instagram-card";
import { T_InstagramProfile } from "@/lib/types";

export async function InstagramProfilesCarosel({
  instagramProfiles,
}: {
  instagramProfiles: T_InstagramProfile[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {instagramProfiles.map((instagramProfile, index) => (
          <CarouselItem
            key={instagramProfile.id}
            className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <InstagramProfileCard {...instagramProfile} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {instagramProfiles.length > 1 ? (
        <>
          <CarouselPrevious className="absolute -left-3" />
          <CarouselNext className="absolute -right-3" />
        </>
      ) : null}
    </Carousel>
  );
}
