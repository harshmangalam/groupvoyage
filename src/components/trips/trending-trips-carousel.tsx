import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TripCard } from "./trip-card";
import { DurationFilter } from "@/lib/types";
import { getEventList } from "@/services/event";
import { EventOrderByWithRelationInput } from "../../../prisma/generated/models";

export async function TrendingTripsCarousel({
  locationSlug,
  durations,
  destinations,
  groupSlug,
  priceRange,
  orderBy,
}: {
  locationSlug?: string;
  durations?: DurationFilter;
  destinations?: string;
  groupSlug?: string;
  priceRange?: number;
  orderBy?: EventOrderByWithRelationInput;
}) {
  const events = await getEventList({
    locationSlug,
    durations,
    destinationSlug: destinations,
    take: 10,
    groupSlug,
    priceRange,
    orderBy,
  });
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {events?.events.map((event, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            {event && <TripCard key={event.id} event={event} />}
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
