import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TripCard } from "./trip-card";
import { T_EventCard } from "@/lib/types";

export async function TripsCarousel({ events }: { events: T_EventCard[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {events.map((event, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <TripCard key={event.id} event={event} />
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
