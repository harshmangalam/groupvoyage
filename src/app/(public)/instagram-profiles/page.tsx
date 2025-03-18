import { getInstagramProfileList } from "@/actions/instagram-profile";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { InstagramProfileCard } from "@/components/instagram-card";
import { PageSection } from "@/components/page-section";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Find Travel Groups",
  description: `Discover and compare travel groups effortlessly. Filter by location and choose the best group trip for your journey.`,
};

type GroupsPageProps = {
  searchParams: Promise<{ locations: string; durations: string }>;
};
export default async function GroupsPage({ searchParams }: GroupsPageProps) {
  const locations = (await searchParams).locations ?? "";
  const instagramProfiles = await getInstagramProfileList({
    locationSlug: locations,
  });
  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={
          <span>
            Explore groups on{" "}
            <span className="text-destructive">Instagram</span>
          </span>
        }
        others={
          <Suspense
            fallback={<Skeleton className="h-10 w-32 rounded-md" />}
            key={`locations-filter`}
          >
            <LocationsFilter />
          </Suspense>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {instagramProfiles.length ? (
            instagramProfiles.map((instagramProfile) => (
              <InstagramProfileCard
                key={instagramProfile.id}
                {...instagramProfile}
              />
            ))
          ) : (
            <p>No groups</p>
          )}
        </div>
      </PageSection>
    </div>
  );
}
