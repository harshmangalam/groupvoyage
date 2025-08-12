import { Suspense } from "react";
import { SITE_DESCRIPTION } from "@/lib/constants";
import Balancer from "react-wrap-balancer";
import { Stats } from "./stats";
import { StatsFallback } from "./stats-fallback";
import { SearchForm } from "./search-form";

export async function HomeHero() {
  return (
    <div className="py-12 md:py-6 z-[1]">
      <div className="mx-auto h-full max-w-7xl items-center gap-12 px-4 grid grid-cols-1">
        {/* Left Content */}
        <div className="items-center">
          <div className="text-center mb-6">
            <h1 className="tracking-tight text-3xl md:text-4xl lg:text-5xl :text-4xl font-bold text-gray-900 dark:text-white !leading-9 md:!leading-[48px] lg:!leading-[56px]">
              <Balancer>
                Find local <span className="text-destructive">groups</span>,
                compare <span className="text-destructive">prices</span>, and
                join budget-friendly weekend{" "}
                <span className="text-destructive"> trips</span>
              </Balancer>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              <Balancer>{SITE_DESCRIPTION}</Balancer>
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <SearchForm />
          </div>

          <Suspense key={"home-hero-stats"} fallback={<StatsFallback />}>
            <Stats />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
