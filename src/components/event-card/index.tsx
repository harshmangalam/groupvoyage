import Image from "next/image";
import { MapPin, Clock, User, IndianRupee } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { T_EventCard } from "@/lib/types";
import { Button } from "../ui/button";

type EventCardProps = {
  event: T_EventCard;
};

export function EventCard({ event }: EventCardProps) {
  const { posterUrls, slug, group, location, title, durations, price } = event;
  const firstPosterUrl = posterUrls[0];

  return (
    <Card className="w-full shadow-none mx-auto overflow-hidden hover:shadow-md duration-300 h-full">
      <div className="relative h-48 sm:h-64">
        <Image
          src={firstPosterUrl || ""}
          alt={`${title} poster`}
          objectFit="cover"
          width={400}
          height={400}
          className="w-full h-full aspect-auto object-cover"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-lg font-semibold text-destructive mb-2 flex items-center">
          <IndianRupee className="w-4 h-4" />
          {price || "N/A"}
        </p>

        <div className="flex items-center mb-2">
          <Clock className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
          <p className="text-sm text-gray-600">{durations || "N/A"}</p>
        </div>
        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
          <div className="text-sm text-gray-600 ">{location.city}</div>
        </div>
        <div className="flex items-center mb-2">
          <User className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
          <div className="text-sm text-gray-600 ">{group.name}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={"destructive"}>
          <Link href={`/${location.slug}/${group.slug}/${slug}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
