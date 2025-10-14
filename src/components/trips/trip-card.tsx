import Image from "next/image";
import { MapPin, Clock, User, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { EventMetaType, T_EventCard } from "@/lib/types";
import { Badge } from "../ui/badge";

type TripCardProps = {
  event: T_EventCard;
};

export function TripCard({ event }: TripCardProps) {
  const { posterUrls, slug, group, location, title, durations, price, meta } =
    event;
  const firstPosterUrl = posterUrls?.[0];
  const originalPrice = (meta as EventMetaType)?.originalPrice;

  const percentageSaved =
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <Link href={`/trips/${slug}`} className="max-h-fit">
      <Card className="shadow-none mx-auto overflow-hidden hover:shadow-md duration-300 max-h-fit w-full">
        {/* ✅ Improved Image Section */}
        <div className="overflow-hidden relative group">
          <Image
            src={firstPosterUrl || "/images/placeholder.jpg"}
            alt={`${title} poster`}
            width={400}
            height={300}
            className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            unoptimized
          />
          {percentageSaved > 0 && (
            <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {percentageSaved}% OFF
            </span>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2 line-clamp-1">{title}</h3>

          {/* Price & Discount */}
          <div className="flex items-center gap-2 mb-2">
            <p className="font-semibold flex items-center">
              <IndianRupee className="w-4 h-4" />
              {price || "N/A"}
            </p>
            {originalPrice && percentageSaved > 0 && (
              <>
                <span className="text-sm text-muted-foreground line-through flex items-center">
                  <IndianRupee className="w-3 h-3" />
                  {originalPrice}
                </span>
                <span className="text-xs text-green-600 dark:text-green-500 font-semibold">
                  ({percentageSaved}% OFF)
                </span>
              </>
            )}
          </div>

          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              {durations || "N/A"}
            </p>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0" />
            <div className="text-sm text-muted-foreground">{location.city}</div>
          </div>
          <div className="flex items-center mb-2">
            <User className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0" />
            <div className="text-sm text-muted-foreground line-clamp-1">
              {group.name}
            </div>
          </div>
          <div className="flex items-center mb-2 gap-1 flex-wrap mt-4">
            {event.categories.slice(0, 3).map((category) => (
              <Badge
                variant={"secondary"}
                key={category.id}
                className="capitalize"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
