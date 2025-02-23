import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getFeaturedGroupList } from "@/actions/group";
import { GroupCard } from "./group-card";

export async function FeaturedGroupsCarousel() {
  const groups = await getFeaturedGroupList({});
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {groups.map((group) => (
          <CarouselItem
            key={group.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <GroupCard location={group.locations[0]} group={group} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {groups.length > 1 ? (
        <>
          <CarouselPrevious className="absolute -left-3" />
          <CarouselNext className="absolute -right-3" />
        </>
      ) : null}
    </Carousel>
  );
}
