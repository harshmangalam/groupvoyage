import Image from "next/image";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GetEventsType } from "@/services/events";
import Link from "next/link";

type EventCardProps = GetEventsType;

export function EventCard({
  durations,
  group,
  posterUrls,
  price,
  slug,
  location,
  title,
}: EventCardProps) {
  const firstPosterUrl = (posterUrls as string[])[0];
  // const formattedDate = `${format(date, "EEEE")}, ${format(date, "P")} at ${format(date, "p")}`;
  return (
    <Link href={`/${location.slug}/${group.slug}/${slug}`}>
      <Card className="w-full shadow-none mx-auto overflow-hidden hover:shadow-md duration-300">
        <div className="relative h-48 sm:h-64">
          <Image
            src={firstPosterUrl || "/placeholder.svg"}
            alt={`${title} poster`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-lg font-semibold text-green-600 mb-2">
            {price || "Price N/A"}
          </p>
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
            <p className="text-sm text-gray-600">Sunday, 2/10/2025, 6:30pm</p>
          </div>
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
            <p className="text-sm text-gray-600">{durations}</p>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
            <div className="text-sm text-gray-600 ">{location.name}</div>
          </div>
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
            <div className="text-sm text-gray-600 ">{group.name}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
