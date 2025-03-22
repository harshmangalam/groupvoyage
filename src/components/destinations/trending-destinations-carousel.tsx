import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DestinationCard } from "./destination-card";
import { getDestinationList } from "@/actions/destinations";
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
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {destinations.destinations.map((destination) => (
          <CarouselItem
            key={destination.id}
            className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <DestinationCard
              eventsCount={destination._count.events}
              groupsCount={destination._count.groups}
              locations={destination.locations}
              name={destination.name}
              slug={destination.slug}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {destinations.destinations.length > 1 ? (
        <>
          <CarouselPrevious className="absolute -left-3" />
          <CarouselNext className="absolute -right-3" />
        </>
      ) : null}
    </Carousel>
  );
}
