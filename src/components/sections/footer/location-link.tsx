import { getLocations } from "@/services/location";

export async function LocationLinks() {
  const locations = await getLocations({ take: 6 });
  const locationsArr = locations.map((loc) => ({
    label: `Trips from ${loc.city}`,
    href: `/locations/${loc.slug}`,
  }));
  return (
    <>
      {locationsArr.map((link) => (
        <a
          target="_blank"
          key={link.label}
          href={link.href}
          className="text-sm text-muted-foreground hover:underline"
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
