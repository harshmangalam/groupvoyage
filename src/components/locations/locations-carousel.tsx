import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LocationCard } from "./location-card";

export async function LocationsCarousel({ locations }: { locations: any[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {locations.map((location) => (
          <CarouselItem
            key={location.id}
            className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 w-full"
          >
            <LocationCard {...location} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {locations.length > 1 ? (
        <>
          <CarouselPrevious className="absolute -left-3" />
          <CarouselNext className="absolute -right-3" />
        </>
      ) : null}
    </Carousel>
  );
}
