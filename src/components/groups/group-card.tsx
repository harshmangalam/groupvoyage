import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { T_GroupCard } from "@/lib/types";
import Image from "next/image";

export function GroupCard({ group }: { group: T_GroupCard }) {
  const { _count, posterUrls, name, slug } = group;
  const posterUrl = posterUrls[0] || "placeholder.svg";
  return (
    <Link href={`/groups/${slug}`} className="max-h-fit">
      <Card className="hover:shadow-md hover:bg-muted transition-all cursor-pointer group overflow-hidden max-h-fit w-full">
        <CardContent className="p-0">
          <div className="relative w-full aspect-video">
            <Image
              src={posterUrl}
              alt={name}
              width={300}
              height={300}
              className="object-cover rounded-t-lg aspect-video w-full h-full md:h-40"
              loading="lazy"
            />
          </div>

          <div className="p-4">
            <h3 className="font-semibold line-clamp-1">{name}</h3>
            <p className="text-muted-foreground text-sm">
              {group.locations.length >= 2
                ? "Multiple locations"
                : group.locations[0].city}{" "}
              · {_count.events} Trips
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
