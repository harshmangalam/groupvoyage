import { getDestinationList } from "@/services/destinations";

export async function DestinationLinks() {
  const destinations = await getDestinationList({ take: 6 });
  return (
    <>
      {destinations.destinations.map((link) => (
        <a
          target="_blank"
          key={link.name}
          href={`/destinations/${link.slug}`}
          className="text-sm text-muted-foreground hover:underline"
        >
          {link.name}
        </a>
      ))}
    </>
  );
}
