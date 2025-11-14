import { getInstagramProfileList } from "@/actions/instagram-profile";
import Empty from "@/components/empty";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { InstagramProfileCard } from "@/components/instagram/instagram-card";
import InstagramProfileSkeleton from "@/components/instagram/instagram-skeleton";
import { PageSection } from "@/components/page-section";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Explore Instagram Groups",
  description: `Discover instagram travel accounts for weekend trips. Filter by location and choose the best instagram group for your journey.`,
};

export default async function InstagramProfilePage({
  searchParams,
}: PageProps<"/instagram-profiles">) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <PageSection
        label={<span>Explore Instagram Groups</span>}
        others={
          <Suspense
            fallback={<Skeleton className="h-9 w-32 rounded-md" />}
            key={`locations-filter`}
          >
            <LocationsFilter />
          </Suspense>
        }
      >
        <Suspense fallback={<InstagramProfileSkeleton />}>
          <InstagramProfileWrapper searchParamsPromise={searchParams} />
        </Suspense>
      </PageSection>
    </div>
  );
}
async function InstagramProfileWrapper({ searchParamsPromise }) {
  const locations = (await searchParamsPromise).locations ?? "";
  const instagramProfiles = await getInstagramProfileList({
    locationSlug: locations as string,
  });

  if (!instagramProfiles.length)
    return (
      <Empty title={"Instagram Profiles"} showHome={false} showSearch={false} />
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {instagramProfiles.map((instagramProfile) => (
        <InstagramProfileCard key={instagramProfile.id} {...instagramProfile} />
      ))}
    </div>
  );
}
