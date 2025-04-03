import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { T_GroupCard } from "@/lib/types";
import Image from "next/image";

export function GroupCard({ group }: { group: T_GroupCard }) {
  const { _count, posterUrls, name, slug } = group;
  return (
    <Link href={`/groups/${slug}`} className="block h-full">
      <Card className="hover:shadow-md hover:bg-muted transition-all cursor-pointer group overflow-hidden h-full">
        <CardContent className="p-0">
          {(posterUrls as any)?.length && (
            <div className="relative w-full aspect-video">
              <Image
                src={posterUrls?.[0]}
                alt={name}
                width={300}
                height={300}
                className="object-cover rounded-t-lg aspect-video w-full h-40"
                loading="lazy"
              />
            </div>
          )}
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
