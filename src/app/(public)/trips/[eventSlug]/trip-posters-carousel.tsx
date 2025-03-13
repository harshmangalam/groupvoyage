import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function TripPostersCarousel({
  posterUrls,
  title,
}: {
  posterUrls: string[];
  title: string;
}) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {posterUrls.map((poster, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src={poster}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                style={{
                  maxWidth: "100%",
                  height: "100%",
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {posterUrls.length > 1 && (
        <>
          <CarouselPrevious className="left-4 z-[8]" />
          <CarouselNext className="right-4 z-[8]" />
        </>
      )}
    </Carousel>
  );
}
