import Image from "next/image";
import { MapPin, Clock, Users, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { T_EventCard } from "@/lib/types";

type EventCardProps = {
  event: T_EventCard;
};

export function EventCard({ event }: EventCardProps) {
  const { posterUrls, slug, group, location, title, durations, price } = event;
  const firstPosterUrl = posterUrls[0];

  return (
    <Link href={`/${location.slug}/${group.slug}/${slug}`}>
      <Card className="w-full shadow-none mx-auto overflow-hidden hover:shadow-md duration-300">
        <div className="relative h-48 sm:h-64">
          <Image
            src={firstPosterUrl || "/placeholder.svg"}
            alt={`${title} poster`}
            objectFit="cover"
            width={200}
            height={200}
            className="w-full h-full aspect-square"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-lg font-semibold text-green-600 mb-2 flex items-center">
            <IndianRupee className="w-4 h-4" />
            {price || "Price N/A"}
          </p>

          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
            <p className="text-sm text-gray-600">{durations}</p>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
            <div className="text-sm text-gray-600 ">{location.city}</div>
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
