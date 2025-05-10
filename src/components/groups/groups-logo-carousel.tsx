"use client";

import { T_Group } from "@/lib/types";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export function GroupsLogoCarousel({
  groupsLogo,
}: {
  groupsLogo: Pick<T_Group, "slug" | "name" | "logo">[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnFocusIn: true,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {groupsLogo.map((groupLogo) => (
          <CarouselItem key={groupLogo.slug} className="basis-1/1">
            <div className="flex-shrink-0 mx-4 grayscale hover:grayscale-0 transition-all duration-300">
              <Link href={`/groups/${groupLogo.slug}`}>
                <Image
                  src={groupLogo.logo || "/placeholder.svg"}
                  alt={groupLogo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
