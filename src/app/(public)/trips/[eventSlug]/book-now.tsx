import { Button } from "@/components/ui/button";

export function BookNow({ source }: { source: string }) {
  function getBookingUrl() {
    const url = new URL(source);
    url.searchParams.set("utm_source", "https://www.groupvoyage.in");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "booking");
    return url.toString();
  }

  return (
    <Button asChild className="w-full" size="lg" variant={"destructive"}>
      <a target="_blank" href={getBookingUrl()} className="block">
        Book Now
      </a>
    </Button>
  );
}
