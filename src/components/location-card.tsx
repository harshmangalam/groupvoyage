import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CalendarCheckIcon, UserIcon } from "lucide-react";
import { T_LocationWithCount } from "@/lib/types";

export function LocationCard({
  city,
  posterUrl,
  slug,
  _count,
}: T_LocationWithCount) {
  return (
    <Link href={`/locations/${slug}`} className="block w-full">
      <Card className="w-full h-64 overflow-hidden relative group">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url(${posterUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
        <CardContent className="relative h-full flex flex-col justify-end p-4 text-white">
          <CardTitle className="text-lg font-semibold mb-2 line-clamp-1">
            {city}
          </CardTitle>
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 mr-1" />
              <div>{_count?.groups} Groups</div>
            </div>
            <div className="flex items-center">
              <CalendarCheckIcon className="w-4 h-4 mr-1" />
              <div>{_count?.events} Trips</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
