import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { GetGroupsType } from "@/services/groups";
import { GroupLocation } from "./group-location";

export function GroupCard({ location, name, posterUrl, slug }: GetGroupsType) {
  return (
    <Link href={`/${location.slug}/${slug}`} className="block w-full">
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
            <GroupLocation {...location} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
