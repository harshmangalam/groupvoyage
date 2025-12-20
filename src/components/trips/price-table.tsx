"use client";

import Link from "next/link";
import { ArrowUpDown, ExternalLink } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { T_EventCard } from "@/lib/types";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type SortField = "price";
type SortDirection = "asc" | "desc";

export default function PriceTable({ trips }: { trips: T_EventCard[] }) {
  const [sortField, setSortField] = useState<SortField>("price");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedTrips = [...trips].sort((a, b) => {
    const priceA = a.price || 0;
    const priceB = b.price || 0;
    return sortDirection === "asc" ? priceA - priceB : priceB - priceA;
  });

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center my-6">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary">{trips.length} trips available</Badge>
            <span className="text-sm text-muted-foreground">
              Price range: ₹{sortedTrips[0].price} - ₹
              {sortedTrips[sortedTrips.length - 1].price}
            </span>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Group</TableHead>
              <TableHead className="flex items-center gap-2">
                Price (in Rupees)
                <Button
                  variant="ghost"
                  onClick={() => handleSort("price")}
                  className="flex items-center gap-1"
                  size={"sm"}
                >
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>From City</TableHead>
              <TableHead>Trip</TableHead>
              <TableHead>Durations</TableHead>
              <TableHead className="text-right">Trip Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTrips.map((trip) => (
              <TableRow key={trip.id}>
                <TableCell className="min-w-52">
                  <Link
                    className="hover:underline"
                    href={`/groups/${trip.group.slug}`}
                  >
                    {trip.group.name}
                  </Link>
                </TableCell>

                <TableCell className="min-w-52"> ₹{trip.price}</TableCell>
                <TableCell className="min-w-52">
                  <Link
                    className="hover:underline"
                    href={`/locations/${trip.location.slug}`}
                  >
                    {trip.location.city}
                  </Link>
                </TableCell>
                <TableCell className="min-w-80">{trip.aiTitle}</TableCell>
                <TableCell className="min-w-32">{trip.durations}</TableCell>

                <TableCell className="text-right min-w-24">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/trips/${trip.slug}`}>
                      <span className="sr-only">
                        View details for {trip.aiTitle}
                      </span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
