import { getEventDetails } from "@/actions/event";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_NAME } from "@/lib/constatnts";
import { EventMetaType } from "@/lib/types";
import {
  Clock,
  MapPin,
  Check,
  Users,
  Sparkles,
  IndianRupeeIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GroupDetailsCard } from "./group-details-card";
import { BookNow } from "./book-now";
import { SectionList } from "./section-list";
import { TripPostersCarousel } from "./trip-posters-carousel";

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

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <TripPostersCarousel
          posterUrls={event.posterUrls}
          title={event.title}
        />
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

      <div className="max-w-7xl  mx-auto px-4 py-8 md:py-12">
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
            <SectionList
              label={"Trip Highlights"}
              Icon={
                <Sparkles className="h-4 w-4 mt-1 flex-none  text-blue-500" />
              }
              data={highlights}
            />

            <SectionList
              label={"What's Included"}
              Icon={<Check className="h-4 w-4 mt-1 flex-none text-green-500" />}
              data={event.includes}
            />

            <SectionList
              label={`What's Not Included`}
              Icon={<XIcon className="h-4 w-4 mt-1 flex-none  text-red-500" />}
              data={event.excludes}
            />
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
                <BookNow source={event.source} />
              </CardContent>
            </Card>
            <GroupDetailsCard group={event.group} />
          </div>
        </div>
      </div>
    </div>
  );
}
