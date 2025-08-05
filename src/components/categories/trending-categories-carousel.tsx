import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryCard } from "./category-card";
import { getCategoryList } from "@/actions/categories";
export async function TrendingCategoriesCarousel() {
  const categories = await getCategoryList({
    take: 10,
  });
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {categories.categories.map((category) => (
          <CarouselItem
            key={category.id}
            className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <CategoryCard
              eventCount={category._count.events}
              category={category}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {categories.categories.length > 1 ? (
        <>
          <CarouselPrevious className="absolute -left-3" />
          <CarouselNext className="absolute -right-3" />
        </>
      ) : null}
    </Carousel>
  );
}
