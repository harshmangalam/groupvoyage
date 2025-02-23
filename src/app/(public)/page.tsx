import { getLocations } from "@/actions/location";
import { FeaturedEventsCarousel } from "@/components/featured-events-carousel";
import { FeaturedGroupsCarousel } from "@/components/featured-groups-carousel";
import { HomeHero } from "@/components/home-hero";
import { LocationCard } from "@/components/location-card";
import { SITE_NAME } from "@/lib/constatnts";
import { Suspense } from "react";

export default async function HomePage() {
  const locations = await getLocations();

  return (
    <div>
      {/* hero section  */}
      <HomeHero />
      {/* locations section  */}
      <section className="max-w-7xl w-full mx-auto px-4 flex flex-col gap-6 md:gap-10 py-8 md:py-16">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Popular <span className="text-destructive">cities</span> on{" "}
            {SITE_NAME}
          </h2>
          <p className="leading-6 font-normal text-muted-foreground text-center">
            Find exciting weekend getaways and group trips starting from your
            city.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {locations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl w-full mx-auto px-4 flex flex-col gap-6 md:gap-10 py-8 md:py-16">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Featured travel <span className="text-destructive">groups</span>{" "}
            across cities
          </h2>
          <p className="leading-6 font-normal text-muted-foreground text-center">
            Explore top travel groups from different cities and find the perfect
            weekend trips for you!
          </p>
        </div>

        <FeaturedGroupsCarousel />
      </section>

      <section className="max-w-7xl w-full mx-auto px-4 flex flex-col gap-6 md:gap-10 py-8 md:py-16">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Featured weekend <span className="text-destructive">trips</span>
          </h2>
          <p className="leading-6 font-normal text-muted-foreground text-center">
            Discover the best budget-friendly trips from top travel groups and
            plan your next getaway!
          </p>
        </div>

        <Suspense key={"featured-events"}>
          <FeaturedEventsCarousel />
        </Suspense>
      </section>
    </div>
  );
}
