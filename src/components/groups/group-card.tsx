import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { T_GroupCard } from "@/lib/types";
import Image from "next/image";

export function GroupCard({ group }: { group: T_GroupCard }) {
  const { _count, posterUrls, name, slug } = group;
  
  // Helper function to safely get first poster URL
  const getFirstPosterUrl = (posterUrls: any): string => {
    if (!posterUrls) return 'placeholder.svg';
    if (Array.isArray(posterUrls)) return posterUrls[0] || 'placeholder.svg';
    if (typeof posterUrls === 'string') {
      if (posterUrls.trim() === '' || posterUrls === 'null') return 'placeholder.svg';
      try {
        const parsed = JSON.parse(posterUrls);
        if (Array.isArray(parsed)) {
          return parsed.find(url => url && typeof url === 'string' && url.length > 0) || 'placeholder.svg';
        }
        return 'placeholder.svg';
      } catch (error) {
        console.warn('Failed to parse posterUrls JSON:', posterUrls, error);
        return 'placeholder.svg';
      }
    }
    return 'placeholder.svg';
  };
  
  const posterUrl = getFirstPosterUrl(posterUrls);
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
