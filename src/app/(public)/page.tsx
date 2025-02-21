import { getFeaturedEventList } from "@/actions/event";
import FeaturedHeroEvents from "@/components/featured-hero-events";

export default async function HomePage() {
  const featuredEvents = await getFeaturedEventList();

  return (
    <div>
      <FeaturedHeroEvents events={featuredEvents} />
    </div>
  );
}
