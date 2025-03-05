import { getSearchResults } from "@/actions/common";
import { PageSection } from "@/components/page-section";
import PriceComparisonTable from "@/components/price-comparison-table";
import { TripCard } from "@/components/trip-card";

type LocationPageProps = {
  searchParams: Promise<{ q: string }>;
};
export default async function SeacrhPage({ searchParams }: LocationPageProps) {
  const q = (await searchParams).q;
  const search = q?.trim();
  const { events } = await getSearchResults(search);
  return (
    <div className="max-w-7xl mx-auto py-6 md:py-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
        Search Results for <span className="text-destructive">{search}</span>
      </h1>

      <PageSection label={<span>Trips</span>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {events?.events?.length ? (
            events.events.map((event) => (
              <TripCard key={event.id} event={event} />
            ))
          ) : (
            <p>No matches found</p>
          )}
        </div>
      </PageSection>

      {events?.events?.length ? (
        <PageSection label={<span>Price Comparisons</span>}>
          <PriceComparisonTable trips={events.events} />
        </PageSection>
      ) : null}
    </div>
  );
}
