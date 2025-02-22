import { getFeaturedEventList } from "@/actions/event";
import { getLocations } from "@/actions/location";
import { LocationCard } from "@/components/location-card";
import { SITE_NAME } from "@/lib/constatnts";

export default async function HomePage() {
  const featuredEvents = await getFeaturedEventList();
  const featuredLocations = await getLocations();

  return (
    <div>
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
          {featuredLocations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </section>
    </div>
  );
}
