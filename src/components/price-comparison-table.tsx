"use client";

import Link from "next/link";
import { ArrowUpDown, ExternalLink, GitCompareIcon } from "lucide-react";

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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <GitCompareIcon />
          Compare Prices
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[80vh] flex flex-col justify-between">
        <DialogHeader>
          <DialogTitle>Compare Prices & Find the Best Travel Deals</DialogTitle>
          <DialogDescription>
            Easily compare prices from multiple travel groups and choose the
            best deal for your next adventure. Our transparent price comparison
            table helps you make informed decisions by showcasing trip costs.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1">
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

                  <TableCell className="min-w-52">Rs. {trip.price}</TableCell>
                  <TableCell>
                    <Link
                      className="hover:underline"
                      href={`/locations/${trip.location.slug}`}
                    >
                      {trip.location.city}
                    </Link>
                  </TableCell>
                  <TableCell className="min-w-80">{trip.title}</TableCell>
                  <TableCell className="min-w-52">{trip.durations}</TableCell>

                  <TableCell className="text-right min-w-40">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/trips/${trip.slug}`}>
                        <span className="sr-only">
                          View details for {trip.title}
                        </span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
