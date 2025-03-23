import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { T_GroupCard } from "@/lib/types";
import Image from "next/image";

export function GroupCard({ group }: { group: T_GroupCard }) {
  const { _count, posterUrls, name, slug } = group;
  return (
    <Link href={`/groups/${slug}`}>
      <Card className="hover:shadow-md transition-all cursor-pointer group overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full aspect-square">
            {" "}
            {/* Fixed aspect ratio */}
            <Image
              src={posterUrls?.[0] || ""}
              alt={name}
              fill
              className="object-cover rounded-t-lg group-hover:scale-105 transition duration-300"
            />
          </div>
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
