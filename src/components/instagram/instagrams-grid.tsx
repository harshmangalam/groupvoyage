import { getInstagramProfileList } from "@/actions/instagram-profile";
import { InstagramProfileCard } from "./instagram-card";

export async function InstagramsGrid({
  locationSlug,
}: {
  locationSlug?: string;
}) {
  const instagramProfiles = await getInstagramProfileList({
    take: 8,
    locationSlug,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {instagramProfiles.map((instagram) => (
        <InstagramProfileCard key={instagram.id} {...instagram} />
      ))}
    </div>
  );
}
