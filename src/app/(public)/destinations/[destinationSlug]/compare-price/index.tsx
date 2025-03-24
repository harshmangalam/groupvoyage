import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { getEventList } from "@/actions/event";
import { getDestinationDetails } from "@/actions/destinations";
import PriceTable from "./price-table";

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

  return (
    <div className="flex flex-col gap-6 ">
      <div className="space-y-8">
        <Card>
          <CardContent>
            <div className="flex justify-between items-center my-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary">
                  {trips.pagination.totalCount} trips available
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Price range: ₹{sortedTrips[0].price} - ₹
                  {sortedTrips[sortedTrips.length - 1].price}
                </span>
              </div>
            </div>
            <PriceTable trips={trips.events} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
