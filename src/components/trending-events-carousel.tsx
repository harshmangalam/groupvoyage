import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getEventList } from "@/actions/event";
import { TripCard } from "./trip-card";

export async function TrendingEventsCarousel() {
  const events = await getEventList({ take: 10 });
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {events.events.map((event, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <TripCard key={event.id} event={event} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {events.events.length > 1 ? (
        <>
          <CarouselPrevious className="absolute -left-3" />
          <CarouselNext className="absolute -right-3" />
        </>
      ) : null}
    </Carousel>
  );
}
