import { TripCard } from "@/components/trips/trip-card";
import { getEventList } from "@/actions/event";
import { SocialIconBtn } from "./social-icon-btn";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarCheckIcon, ExternalLinkIcon, MapPin } from "lucide-react";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getGroupDetails } from "@/actions/group";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PostersCarousel } from "./posters-carousel";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { LocationsFilter } from "@/components/filters/locations/locations-filter";
import { DurationsFilter } from "@/components/filters/durations-filter";
import { CustomPagination } from "@/components/custom-pagination";
import { SITE_NAME, TRIPS_PER_PAGE } from "@/lib/constants";
import { GroupMetaType } from "@/lib/types";
import { InstagramProfileCard } from "@/components/instagram/instagram-card";
import { getInstagramUsername } from "@/lib/utils";
import { getInstagramProfile } from "@/actions/instagram-profile";
import { TrendingDestinationsCarousel } from "@/components/destinations/trending-destinations-carousel";

export async function generateMetadata({ params }) {
  const { groupSlug } = await params;
  const group = await getGroupDetails({ slug: groupSlug });
  const description = `Explore ${group?.name} group details and their listed trips on ${SITE_NAME}. Compare and choose the best travel experience.`;
  return {
    title: `${group?.name} (${group?._count?.events} trips)`,
    description,
  };
}

export default async function GroupHomePage({
  params,
  searchParams,
}: {
  params: Promise<{ groupSlug: string; locationSlug: string }>;
  searchParams: Promise<{ locations: string; durations: string; page: string }>;
}) {
  const { groupSlug } = await params;
  const group = await getGroupDetails({ slug: groupSlug });
  if (!group) return notFound();

  const username = getInstagramUsername(group.instagram);
  const instagramProfile = await getInstagramProfile({ username });

  const { durations = "", locations = "" } = await searchParams;
  const pageStr = (await searchParams).page ?? "1";
  const page = Number(pageStr);
  const events = await getEventList({
    groupSlug,
    durations,
    locationSlug: locations,
    take: TRIPS_PER_PAGE,
    skip: (page - 1) * TRIPS_PER_PAGE,
  });
  return (
    <div>
      <Card className="w-full border-none max-w-7xl py-5 lg:px-4 mx-auto shadow-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 h-full">
          <div className="w-full h-full">
            <div className="relative md:w-full h-auto">
              <PostersCarousel posterUrls={group.posterUrls as string[]} />
            </div>
          </div>
          <div className="flex-1 w-full flex-col h-full px-4 lg:px-0  flex justify-between">
            <CardContent className="flex-1 p-0">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold">{group.name}</h1>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <div className="w-fit flex items-center gap-2 font-medium text-sm">
                  <MapPin size={18} />
                  {group.locations.map((location, _, arr) => (
                    <Link
                      key={location.id}
                      href={`/locations/${location.slug}`}
                      className="hover:underline"
                    >
                      {location.city}
                      {arr.length > 1 ? "," : ""}
                    </Link>
                  ))}
                </div>

                <div className="w-fit flex items-center gap-2 font-medium text-sm">
                  <ExternalLinkIcon size={18} />
                  <a
                    target="_blank"
                    href={group.source}
                    className="hover:underline"
                  >
                    Website
                  </a>
                </div>

                <div className="w-fit flex items-center gap-2 text-sm">
                  <CalendarCheckIcon size={18} />
                  <span className="font-medium"> Available Trips</span>

                  <Badge variant={"destructive"}>{group._count.events} </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0">
              <div>
                <h3 className="text-lg font-semibold mb-2">Connect with us</h3>

                <div className="flex space-x-2">
                  <SocialIconBtn url={group.instagram} slug="instagram" />
                  {group.email && (
                    <SocialIconBtn url={`mailto:${group.email}`} slug="email" />
                  )}
                  <SocialIconBtn url={`tel:${group.phone}`} slug="tel" />
                  <SocialIconBtn
                    url={
                      (group.meta as GroupMetaType)?.whatsappGroup ||
                      `https://wa.me/${group.phone}`
                    }
                    slug="whatsapp"
                  />
                </div>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
      <Separator />

      <div className="max-w-7xl mx-auto px-4">
        <PageSection label={"About us"}>
          <p className="mb-0">{group.details}</p>
        </PageSection>
        {instagramProfile && <InstagramProfileCard {...instagramProfile} />}
        <PageSection
          href={`/destinations/?groups=${groupSlug}`}
          label={<span>Weekend Destinations</span>}
          description={`Stunning destinations covered by ${group.name}, ideal for a quick escape and explore.`}
        >
          <Suspense key={`featured-destinations-${groupSlug}`}>
            <TrendingDestinationsCarousel groupSlug={groupSlug} />
          </Suspense>
        </PageSection>
        <PageSection
          label={<span>Trips</span>}
          description={`Discover unmissable weekend trips offered by ${group.name}`}
          others={
            <div className="flex items-center flex-wrap gap-2  md:justify-end justify-start">
              <Suspense
                fallback={<Skeleton className="h-10 w-32 rounded-md" />}
                key={`locations-filter`}
              >
                <LocationsFilter />
              </Suspense>

              <Suspense
                fallback={<Skeleton className="h-10 w-32 rounded-md" />}
                key={`durations-filter`}
              >
                <DurationsFilter />
              </Suspense>
            </div>
          }
        >
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.events.length ? (
              events.events.map((event) => (
                <TripCard key={event.id} event={event} />
              ))
            ) : (
              <p className="opacity-50 text-sm">No Events</p>
            )}
          </div>
          <div className="mt-6">
            <CustomPagination {...events.pagination} />
          </div>
        </PageSection>
      </div>
    </div>
  );
}
