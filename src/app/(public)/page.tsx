import { getFeaturedGroupList } from "@/actions/group";
import { getLocations } from "@/actions/location";
import { GroupCard } from "@/components/group-card";
import { HomeHero } from "@/components/home-hero";
import { LocationCard } from "@/components/location-card";
import { SITE_NAME } from "@/lib/constatnts";

export default async function HomePage() {
  const locations = await getLocations();
  const groups = await getFeaturedGroupList({});
  return (
    <div>
      {/* hero section  */}
      <HomeHero />
      {/* locations section  */}
      <section className="max-w-7xl w-full mx-auto px-4 flex flex-col gap-6 md:gap-10 py-8 md:py-16">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Popular <span className="text-destructive">cities</span> on{" "}
            {SITE_NAME}
          </h2>
          <p className="leading-6 font-normal text-muted-foreground">
            Find exciting weekend getaways and group trips starting from your
            city.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {locations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl w-full mx-auto px-4 flex flex-col gap-6 md:gap-10 py-8 md:py-16">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Featured travel <span className="text-destructive">groups</span>{" "}
            across cities
          </h2>
          <p className="leading-6 font-normal text-muted-foreground">
            Explore top travel groups from different cities and find the perfect
            weekend trips for you!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              location={group.locations[0]}
              group={group}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
