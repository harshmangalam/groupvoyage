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
        {posterUrls.map((posterUrl, index) => (
          <CarouselItem key={index}>
            <Image
              src={posterUrl || ""}
              alt={`Poster ${index + 1}`}
              className="object-cover aspect-video md:rounded-md w-full h-full overflow-hidden"
              width={600}
              height={600}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {posterUrls.length > 1 ? (
        <>
          <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75" />
          <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75" />
        </>
      ) : null}
    </Carousel>
  );
}
