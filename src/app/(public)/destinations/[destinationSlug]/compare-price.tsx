import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { getEventList } from "@/services/event";
import { getDestinationDetails } from "@/services/destinations";
import PriceTable from "@/components/trips/price-table";

export default async function ComparePrice({
  destinationSlug,
}: {
  destinationSlug: string;
}) {
  const trips = await getEventList({ destinationSlug });
  const destination = await getDestinationDetails({ destinationSlug });
  if (!destination) return null;

  const sortedTrips = [...trips.events].sort((a, b) => {
    const priceA = a.price || 0;
    const priceB = b.price || 0;
    return priceA - priceB;
  });

  return <PriceTable trips={trips.events} />;
}
