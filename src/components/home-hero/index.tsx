import { Suspense } from "react";
import { SITE_NAME } from "@/lib/constants";
import { ProductHuntBadge } from "../product-hunt-badge";
import Balancer from "react-wrap-balancer";
import { Skeleton } from "../ui/skeleton";
import { Stats } from "./stats";

export async function HomeHero() {
  return (
    <div className="py-12 lg:h-[100vh] z-[1]">
      <div className="mx-auto h-full max-w-7xl items-center gap-12 px-4 grid grid-cols-1">
        {/* Left Content */}
        <div className="items-center">
          <div className="text-center">
            <h1 className="tracking-tight text-3xl md:text-4xl lg:text-5xl :text-4xl font-bold text-gray-900 dark:text-white !leading-9 md:!leading-[48px] lg:!leading-[56px]">
              <Balancer>
                Find local <span className="text-destructive">groups</span>,
                compare <span className="text-destructive">prices</span>, and
                join budget-friendly weekend{" "}
                <span className="text-destructive"> trips</span>
              </Balancer>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              <Balancer>
                {SITE_NAME} connects you with like-minded travelers from your
                city, making weekend getaways effortless and exciting. Explore a
                curated list of local and city-specific travel groups, compare
                trip prices, and find the perfect adventure that fits your
                budget.
              </Balancer>
            </p>
          </div>

          <div className="mt-6 md:mt-14 flex justify-center">
            <ProductHuntBadge />
          </div>
          <div className="mt-16">
            <Suspense
              key={"home-hero-stats"}
              fallback={
                <div className="grid grid-cols-2 md:grid-cols-4   gap-4">
                  <Skeleton className="w-full h-[98px]" />
                  <Skeleton className="w-full h-[98px]" />
                  <Skeleton className="w-full h-[98px]" />
                  <Skeleton className="w-full h-[98px]" />
                </div>
              }
            >
              <Stats />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
