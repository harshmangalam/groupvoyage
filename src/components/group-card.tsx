import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { T_GroupCard } from "@/lib/types";
import Image from "next/image";

export function GroupCard({
  group,
  location,
}: {
  group: T_GroupCard;
  location?: { slug: string; city: string };
}) {
  const { _count, posterUrls, name, slug } = group;
  return (
    <Link href={`/groups/${slug}`}>
      <Card className="hover:shadow-md transition-all cursor-pointer group overflow-hidden">
        <CardContent className="p-0">
          <Image
            src={posterUrls?.[0] || ""}
            alt={name}
            width={200}
            height={300}
            className="w-full h-60 md:h-48 object-cover rounded-t-lg aspect-square group-hover:scale-105 transition duration-300"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1">{name}</h3>
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
