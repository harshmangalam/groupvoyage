import { getInstagramProfileList } from "@/actions/instagram-profile";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { InstagramProfileCard } from "@/components/instagram/instagram-card";
import { PageSection } from "@/components/page-section";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Explore Instagram Groups",
  description: `Discover instagram travel accounts for weekend trips. Filter by location and choose the best instagram group for your journey.`,
};

type InstagramProfilePageProps = {
  searchParams: Promise<{ locations: string; durations: string }>;
};
export default async function InstagramProfilePage({
  searchParams,
}: InstagramProfilePageProps) {
  const locations = (await searchParams).locations ?? "";
  const instagramProfiles = await getInstagramProfileList({
    locationSlug: locations,
  });
  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={<span>Explore Instagram Groups</span>}
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
