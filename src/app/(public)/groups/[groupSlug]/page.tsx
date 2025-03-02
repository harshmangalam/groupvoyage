import { TripCard } from "@/components/trip-card";
import { getEventList } from "@/actions/event";
import { SocialIconBtn } from "./social-icon-btn";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarCheckIcon, ExternalLinkIcon, MapPin } from "lucide-react";

import Link from "next/link";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { getGroupDetails } from "@/actions/group";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PostersCarousel } from "./posters-carousel";
import { PageSection } from "@/components/page-section";

export default async function GroupHomePage({
  params,
}: {
  params: Promise<{ groupSlug: string; locationSlug: string }>;
}) {
  const { groupSlug } = await params;
  const group = await getGroupDetails({ slug: groupSlug });
  if (!group) return notFound();

  const events = await getEventList({
    groupSlug,
  });
  return (
    <div>
      <Card className="w-full border-none max-w-7xl py-5 lg:px-4 mx-auto shadow-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 h-full">
          <div className="w-full h-full">
            <div className="relative md:w-full h-auto">
              <PostersCarousel posterUrls={group.posterUrls} />
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
                <TooltipProvider>
                  <div className="flex space-x-2">
                    <SocialIconBtn url={group.instagram} slug="instagram" />
                    {group.email && (
                      <SocialIconBtn
                        url={`mailto:${group.email}`}
                        slug="email"
                      />
                    )}
                    <SocialIconBtn url={`tel:${group.phone}`} slug="tel" />
                    <SocialIconBtn
                      url={
                        (group.meta as any)?.whatsappGroup ||
                        `https://wa.me/${group.phone}`
                      }
                      slug="whatsapp"
                    />
                  </div>
                </TooltipProvider>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
      <Separator />

      <div className="max-w-7xl mx-auto px-4">
        <PageSection label={"About us"}>
          <p>{group.details}</p>
        </PageSection>

        <PageSection
          label={
            <span>
              Trips by <span className="text-destructive">{group.name}</span>
            </span>
          }
          description={`Check out the latest trips organized by ${group.name} and find the
            perfect weekend adventure for you!`}
        >
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.length ? (
              events.map((event) => <TripCard key={event.id} event={event} />)
            ) : (
              <p className="opacity-50 text-sm">No Events</p>
            )}
          </div>
        </PageSection>
      </div>
    </div>
  );
}
