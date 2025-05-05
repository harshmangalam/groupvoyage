import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getFeaturedEvents } from "@/actions/event";
import { TripCard } from "./trip-card";

export async function TrendingTripsCarousel({
  locationSlug,
  durations,
  destinations,
}: {
  locationSlug?: string;
  durations?: string;
  destinations?: string;
}) {
  const events = await getFeaturedEvents({
    locationSlug,
    durations,
    destinationSlug: destinations,
  });
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {events?.map((event, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            {event && <TripCard key={event.id} event={event} />}
          </CarouselItem>
        ))}
      </CarouselContent>
      {events.length > 1 ? (
        <>
          <CarouselPrevious className="absolute -left-3" />
          <CarouselNext className="absolute -right-3" />
        </>
      ) : null}
    </Carousel>
  );
}
