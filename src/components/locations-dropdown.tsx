"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import { Skeleton } from "./ui/skeleton";
import { getLocationsOption } from "@/actions/location";

interface LocationsDropdownProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {}

export function LocationsDropdown({
  name,
  defaultValue,
  ...props
}: LocationsDropdownProps) {
  const { data, error, isLoading } = useSWR("locations-option", () =>
    getLocationsOption()
  );
  const [selectedLocation, setSelectedLocation] = React.useState<
    string | undefined
  >(defaultValue as string | undefined);
  const [open, setOpen] = React.useState(false);

  const handleSelect = (location: string) => {
    setSelectedLocation(location);
    setOpen(false);
  };

  if (isLoading) return <Skeleton className="w-full h-16" />;
  if (error)
    return <p className="text-muted-foreground">Something went wrong</p>;

  console.log(selectedLocation);
  return (
    <div className="relative w-full">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
            type="button"
          >
            {selectedLocation
              ? data?.find((l) => l.id === selectedLocation)?.city
              : "Select location..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          {data?.map((location) => (
            <DropdownMenuItem
              key={location.id}
              onSelect={() => handleSelect(location.id)}
              className="w-full"
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selectedLocation === location.id ? "opacity-100" : "opacity-0"
                )}
              />
              {location.city}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <select
        name={name}
        className="sr-only w-full"
        {...props}
        value={selectedLocation}
      >
        <option value="">Select a location</option>
        {data?.map((location) => (
          <option key={location.id} value={location.id}>
            {location.city}
          </option>
        ))}
      </select>
    </div>
  );
}
