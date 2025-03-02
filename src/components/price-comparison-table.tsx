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

type SortField = "price";
type SortDirection = "asc" | "desc";

export default function PriceComparisonTable({
  trips,
}: {
  trips: T_EventCard[];
}) {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Group Name</TableHead>
          <TableHead className="w-[200px]">Durations</TableHead>
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
          <TableHead className="hidden md:table-cell">From City</TableHead>
          <TableHead className="text-right">Trip Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedTrips.map((trip) => (
          <TableRow key={trip.id}>
            <TableCell className="font-medium w-72">
              <Link
                className="hover:underline"
                href={`/groups/${trip.group.slug}`}
              >
                {trip.group.name}
              </Link>
            </TableCell>
            <TableCell className="w-60">{trip.durations}</TableCell>
            <TableCell>Rs. {trip.price}</TableCell>
            <TableCell>
              <Link
                className="hover:underline"
                href={`/locations/${trip.location.slug}`}
              >
                {trip.location.city}
              </Link>
            </TableCell>

            <TableCell className="text-right">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/trips/${trip.slug}`}>
                  <span className="sr-only">View details for {trip.title}</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
