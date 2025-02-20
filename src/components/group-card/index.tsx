import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BusIcon, MapPinIcon } from "lucide-react";
import { T_GroupCard } from "@/lib/types";

type GroupCard = {
  group: T_GroupCard;
  currentLocationSlug: string;
};
export function GroupCard({ group, currentLocationSlug }: GroupCard) {
  const { _count, locations, name, posterUrl, slug } = group;
  const location = locations.find((l) => l.slug === currentLocationSlug);

  return (
    <Link href={`/${location?.slug}/${slug}`} className="block w-full">
      <Card className="w-full h-64 overflow-hidden relative group">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url(${posterUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80" />
        <CardContent className="relative h-full flex flex-col justify-end p-4 text-white">
          <CardTitle className="text-base font-semibold mb-2 line-clamp-1">
            {name}
          </CardTitle>
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <div>{location?.city}</div>
            </div>
            <div className="flex items-center">
              <BusIcon className="w-4 h-4 mr-1" />
              <div>{_count?.events} Trips</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
