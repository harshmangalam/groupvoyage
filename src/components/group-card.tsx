import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Users, MapPin } from "lucide-react";

interface TravelGroupCardProps {
  name: string;
  posterUrl: string;
  membersCount: number;
  location: string;
  slug: string;
}

export function GroupCard({
  name,
  posterUrl,
  membersCount,
  location,
  slug,
}: TravelGroupCardProps) {
  return (
    <Link href={`/${slug}`} className="block w-full">
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
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{membersCount}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
