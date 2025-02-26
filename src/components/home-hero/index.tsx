import { Posters } from "./posters";
import { Suspense } from "react";
import { Stats } from "./stats";

export function HomeHero() {
  return (
    <div className="relative overflow-hidden py-12 lg:py-0 lg:h-[90vh] z-[1]">
      {/* Top and Bottom Gradients */}

      <div className="mx-auto h-full max-w-7xl items-center gap-12 px-4 grid grid-cols-1 lg:grid-cols-3">
        {/* Left Content */}
        <div className="col-span-2 items-center md:items-start">
          <div className="text-center lg:text-left">
            <h1 className="tracking-tight text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white !leading-9 md:!leading-[48px] lg:!leading-[56px]">
              Find local <span className="text-destructive">groups</span>,
              compare <span className="text-destructive">prices</span>, and join
              budget-friendly <span className="text-destructive"> trips</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              GroupVoyage connects you with like-minded travelers from your
              city, making weekend getaways effortless and exciting. Explore a
              curated list of local and city-specific travel groups, compare
              trip prices, and find the perfect adventure that fits your budget.
            </p>
          </div>

          <div className="mt-6 md:mt-14">
            <Suspense key={"home-hero-stats"}>
              <Stats />
            </Suspense>
          </div>
        </div>

        <div className="relative h-full">
          <Suspense key={"home-hero-posters"}>
            <Posters />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
