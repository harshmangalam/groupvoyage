import { EventCard } from "@/components/event-card";
import { getEventList } from "@/actions/event";
import { SocialIconBtn } from "./social-icon-btn";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarCheckIcon, MapPin, User } from "lucide-react";
import { GroupMetaType } from "@/lib/types";
import Link from "next/link";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { getGroupDetails } from "@/actions/group";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PostersCarousel } from "./posters-carousel";

export default async function GroupHomePage({
  params,
}: {
  params: Promise<{ groupSlug: string; locationSlug: string }>;
}) {
  const { groupSlug, locationSlug } = await params;
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
                  <User size={18} />
                  Organize by{" "}
                  <Link
                    href={`/${locationSlug}/${group.slug}`}
                    className="hover:underline font-semibold capitalize"
                  >
                    {group.name}
                  </Link>
                </div>
                {(group.meta as GroupMetaType)?.source && (
                  <div className="w-fit flex items-center gap-2 font-medium text-sm">
                    <User size={18} />
                    Platform{" "}
                    <span className="font-semibold capitalize">
                      {(group.meta as GroupMetaType).source}
                    </span>
                  </div>
                )}

                <div className="w-fit flex items-center gap-2 text-sm">
                  <CalendarCheckIcon size={18} />
                  <span className="font-medium"> Active Trips</span>

                  <Badge>{group._count.events} </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0">
              <div>
                <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
                <TooltipProvider>
                  <div className="flex space-x-2">
                    <SocialIconBtn url={group.instagram} slug="instagram" />
                    <SocialIconBtn url={`mailto:${group.email}`} slug="email" />
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

      <section className="max-w-7xl mx-auto mt-12 px-4">
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p>{group.details}</p>
      </section>

      <section className="max-w-7xl px-4 mx-auto mt-12">
        <h3 className="text-xl font-semibold mb-4">
          Pack, Go, Explore – {group.name} Trips
        </h3>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.length ? (
            events.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="opacity-50 text-sm">No Events</p>
          )}
        </div>
      </section>
    </div>
  );
}
