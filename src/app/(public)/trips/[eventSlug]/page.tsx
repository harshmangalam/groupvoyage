import { getEventDetails } from "@/actions/event";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SITE_NAME } from "@/lib/constatnts";
import { EventMetaType } from "@/lib/types";
import {
  Clock,
  MapPin,
  Phone,
  User,
  Check,
  Users,
  Sparkles,
  IndianRupeeIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siInstagram } from "simple-icons";

export async function generateMetadata({ params }) {
  const { eventSlug } = params;
  const event = await getEventDetails({ eventSlug });
  return {
    title: event.title,
    description: `Discover details about ${event.title} Compare prices, check itinerary, and choose the best travel experience on ${SITE_NAME}.`,
  };
}

export default async function TripDetailsPage({
  params,
}: {
  params: Promise<{
    groupSlug: string;
    locationSlug: string;
    eventSlug: string;
  }>;
}) {
  const { eventSlug } = await params;
  const event = await getEventDetails({ eventSlug });
  if (!event) return notFound();

  const originalPrice = (event.meta as EventMetaType)?.originalPrice;
  const price = event.price || 0;
  const groupSize = (event.meta as EventMetaType)?.groupSize;
  const highlights = (event.meta as EventMetaType)?.highlights;
  const discount =
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  function getBookingUrl() {
    const url = new URL(event.source);
    url.searchParams.set("utm_source", SITE_NAME);
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "booking");
    return url.toString();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {event.posterUrls.map((poster, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] md:h-[500px] w-full">
                  <Image
                    src={poster}
                    alt={`${event.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {event.posterUrls.length > 1 && (
            <>
              <CarouselPrevious className="left-4 z-[8]" />
              <CarouselNext className="right-4 z-[8]" />
            </>
          )}
        </Carousel>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent pt-24 pb-6 px-6 md:px-8">
          <div className="flex items-start justify-between gap-4 flex-wrap text-primary-foreground">
            <div className="max-w-3xl flex flex-col gap-4">
              <h1
                title={event.title}
                className="text-2xl md:text-3xl lg:text-4xl  font-bold tracking-tight mb-2 line-clamp-2"
              >
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm md:text-base">
                {event.durations && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.durations}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <Link href={`/${event.location.slug}`}>
                    {event.location.city}
                  </Link>
                </div>
                {groupSize && (
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{groupSize} people</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl  mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {event?.details && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: event.details }}
                  className="prose leading-relaxed"
                />
              </div>
            )}

            {highlights?.length ? (
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    Trip Highlights
                  </h3>
                  <ul className="space-y-2">
                    {highlights.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 ">
                        <Sparkles className="h-4 w-4 mt-1 flex-none  text-blue-500" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
            <div className="grid grid-cols-1 gap-6">
              {event.includes.length ? (
                <Card className="shadow-none border-none">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2">
                      {event.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-1 flex-none text-green-500" />
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ) : null}

              {event.excludes.length ? (
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      What&apos;s Not Included
                    </h3>
                    <ul className="space-y-2">
                      {event.excludes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 ">
                          <XIcon className="h-4 w-4 mt-1 flex-none  text-red-500" />
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-muted-foreground mb-1">
                    Price per person
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-4xl font-bold flex items-center">
                      <IndianRupeeIcon size={28} />
                      {price}
                    </div>
                    {originalPrice > price && (
                      <div className="text-lg text-muted-foreground line-through flex items-center">
                        <IndianRupeeIcon className="w-4 h-4" />
                        {originalPrice}
                      </div>
                    )}
                  </div>
                  {originalPrice > price && (
                    <div className="text-sm font-medium text-green-500">
                      Save {discount}%
                    </div>
                  )}
                </div>
                <Button
                  asChild
                  className="w-full"
                  size="lg"
                  variant={"destructive"}
                >
                  <a target="_blank" href={getBookingUrl()} className="block">
                    Book Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Group Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{event.group.name}</span>
                  </div>

                  {event.group.instagram && (
                    <div className="flex items-center gap-2">
                      <span
                        dangerouslySetInnerHTML={{ __html: siInstagram.svg }}
                        className="h-4 w-4"
                      />
                      <a
                        target="_blank"
                        className="hover:underline"
                        href={event.group.instagram}
                      >
                        Instagram
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{event.group.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
