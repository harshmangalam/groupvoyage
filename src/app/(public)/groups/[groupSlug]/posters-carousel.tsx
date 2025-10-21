"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function PostersCarousel({ posterUrls }: { posterUrls: string[] }) {
  // Filter out invalid URLs and provide fallback
  const validUrls = posterUrls.filter(url => url && typeof url === 'string' && url.length > 0);
  
  // If no valid URLs, show a placeholder
  if (validUrls.length === 0) {
    return (
      <div className="w-full aspect-video md:rounded-md bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {validUrls.map((posterUrl, index) => (
          <CarouselItem key={index}>
            <Image
              src={posterUrl}
              alt={`Poster ${index + 1}`}
              className="object-cover aspect-video md:rounded-md w-full h-full overflow-hidden"
              width={600}
              height={600}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {validUrls.length > 1 ? (
        <>
          <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 " />
          <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 " />
        </>
      ) : null}
    </Carousel>
  );
}
