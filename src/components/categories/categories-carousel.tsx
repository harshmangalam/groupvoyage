import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryCard } from "./category-card";
import { T_Category } from "@/lib/types";
export async function CategoriesCarousel({
  categories,
}: {
  categories: Partial<T_Category>[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {categories.map((category) => (
          <CarouselItem
            key={category.id}
            className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <CategoryCard
              eventCount={category._count?.events || 0}
              category={category}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {categories.length > 1 ? (
        <>
          <CarouselPrevious className="absolute -left-3" />
          <CarouselNext className="absolute -right-3" />
        </>
      ) : null}
    </Carousel>
  );
}
