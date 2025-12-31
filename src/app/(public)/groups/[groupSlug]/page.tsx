import { SocialIconBtn } from "./social-icon-btn";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  CalendarCheckIcon,
  ExternalLinkIcon,
  MapPin,
  MapPinIcon,
} from "lucide-react";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getGroupDetails } from "@/actions/group";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PostersCarousel } from "./posters-carousel";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { SITE_URL } from "@/lib/constants";
import { GroupMetaType } from "@/lib/types";
import { InstagramProfileCard } from "@/components/instagram/instagram-card";
import { getInstagramUsername } from "@/lib/utils";
import { getInstagramProfile } from "@/actions/instagram-profile";
import { TrendingDestinationsCarousel } from "@/components/destinations/trending-destinations-carousel";
import { TrendingTripsCarousel } from "@/components/trips/trending-trips-carousel";
// import AdUnit from "@/components/ad-unit";

export async function generateMetadata({
  params,
}: PageProps<"/groups/[groupSlug]">) {
  const { groupSlug } = await params;
  const group = await getGroupDetails({ slug: groupSlug });
  const cities = group?.locations.map((l) => l.city).join(", ");
  const description = `Join ${group?.name} for weekend trips from ${cities}. Compare prices, check itineraries, and book 1-day & 2-day group tours to top destinations.`;

  return {
    title: `Join ${group?.name} for Weekend Trips & Getaways - Compare Prices`,
    description,
    keywords: [
      `join ${group?.name} travel group`,
      `best weekend trips with ${group?.name}`,
      `${group?.name} group trips from ${cities}`,
      `1-day and 2-day trips with ${group?.name}`,
      `${group?.name} group tour packages`,
      `compare ${group?.name} travel group prices`,
      `${group?.name} budget-friendly weekend tours`,
      `adventure trips with ${group?.name}`,
      `trekking and road trips by ${group?.name}`,
      `affordable weekend getaways with ${group?.name}`,
      `explore destinations with ${group?.name}`,
      `verified travel group: ${group?.name}`,
      `book a weekend tour with ${group?.name}`,
      `short trips and getaways with ${group?.name}`,
      `top-rated weekend travel groups: ${group?.name}`,
    ],
  };
}

export default async function GroupDetailsPage({
  params,
}: PageProps<"/groups/[groupSlug]">) {
  return (
    <Suspense>
      <GroupDetailsWrapper paramsPromise={params} />
    </Suspense>
  );
}
async function GroupDetailsWrapper({ paramsPromise }) {
  const { groupSlug } = await paramsPromise;
  const group = await getGroupDetails({ slug: groupSlug });

  if (!group) return notFound();

  const username = getInstagramUsername(group.instagram);
  const instagramProfile = await getInstagramProfile({ username });

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
                    href={`${group.source}?utm_source=${SITE_URL}&utm_medium=referral`}
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

                <div className="w-fit flex items-center gap-2 text-sm">
                  <MapPinIcon size={18} />
                  <span className="font-medium"> Destinations</span>

                  <Badge variant={"destructive"}>
                    {group._count.destinations}{" "}
                  </Badge>
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
        <div className="flex flex-col gap-4">
          {instagramProfile && <InstagramProfileCard {...instagramProfile} />}

          {/* <AdUnit /> */}
        </div>
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
          href={`/trips/?groups=${groupSlug}`}
          label={<span>Trips</span>}
          description={`Discover unmissable weekend trips offered by ${group.name}`}
        >
          <Suspense key={"trending-events"}>
            <TrendingTripsCarousel groupSlug={groupSlug} />
          </Suspense>
        </PageSection>
      </div>
    </div>
  );
}
