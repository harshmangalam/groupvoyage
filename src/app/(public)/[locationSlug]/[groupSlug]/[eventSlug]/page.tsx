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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const originalPrice = (event.meta as any)?.originalPrice;
  const price = event.price || 0;
  const groupSize = (event.meta as any)?.groupSize;
  const highlights = (event.meta as any)?.highlights;
  const discount =
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

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
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
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
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{event.durations}</span>
                </div>
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
            {/* <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(rating.average)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">{rating.average}</span>
                <span className="text-muted-foreground">
                  {" "}
                  ({rating.count} reviews)
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <main className="max-w-7xl  mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: event?.details || "" }}
                    className="text-muted-foreground leading-relaxed"
                  ></p>
                </div>

                {highlights?.length ? (
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-blue-500" />
                        Trip Highlights
                      </h3>
                      <ul className="space-y-2">
                        {highlights.map((item: any, index: number) => (
                          <li key={index} className="flex items-start gap-2 ">
                            <Sparkles className="h-4 w-4 mt-1 flex-none  text-blue-500" />
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ) : null}
                <div className="grid sm:grid-cols-2 gap-6">
                  {event.includes.length ? (
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
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
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <XIcon className="h-5 w-5 text-red-500" />
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
              </TabsContent>

              {/* <TabsContent value="itinerary" className="space-y-6">
                <h2 className="text-2xl font-semibold">Trip Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((day, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-lg font-semibold text-primary">
                              D{day.day}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold">
                              {day.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {day.description}
                            </p>
                            <ul className="grid gap-2 mt-4">
                              {day.activities.map((activity, actIndex) => (
                                <li
                                  key={actIndex}
                                  className="flex items-center gap-2"
                                >
                                  <Check className="h-4 w-4 text-green-500" />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent> */}

              {/* <TabsContent value="location" className="space-y-6">
                <h2 className="text-2xl font-semibold">Location</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Navigation className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium">Meeting Point</h3>
                          <p className="text-muted-foreground">{location}</p>
                        </div>
                      </div>
                      <div className="aspect-video relative rounded-lg overflow-hidden border">
                        <iframe
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          loading="lazy"
                          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${coordinates.lat},${coordinates.lng}`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent> */}

              {/* <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Reviews</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(rating.average)
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">{rating.average}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        ({rating.count} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-semibold">{review.name}</h3>
                              <div className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "fill-primary text-primary"
                                      : "fill-muted text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            {review.comment}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent> */}
            </Tabs>
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
                <Button asChild className="w-full" size="lg">
                  <a target="_blank" href={event.source} className="block">
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
