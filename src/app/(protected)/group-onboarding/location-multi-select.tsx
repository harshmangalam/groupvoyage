"use client";

import { useCallback } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import { getLocationsOption } from "@/actions/location";
import { Skeleton } from "@/components/ui/skeleton";

interface LocationMultiSelectProps {
  value?: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

export function LocationMultiSelect({
  value = [],
  onChange,
  placeholder = "Select locations...",
}: LocationMultiSelectProps) {
  const { data, error, isLoading } = useSWR(
    "locations-option",
    getLocationsOption
  );

  const handleSelect = useCallback(
    (locationId: string) => {
      if (value.includes(locationId)) {
        onChange(value.filter((id) => id !== locationId));
      } else {
        onChange([...value, locationId]);
      }
    },
    [value, onChange]
  );

  const handleRemove = (locationId: string) => {
    onChange(value.filter((id) => id !== locationId));
  };

  const locations = data?.length
    ? data?.map((location) => ({
        id: location.slug,
        label: location.city,
      }))
    : [];

  const selectedLocations = value
    .map((id) => locations.find((loc) => loc.id === id))
    .filter(Boolean) as typeof locations;

  if (isLoading) return <Skeleton className="w-full h-16" />;
  if (error)
    return <p className="text-muted-foreground">Something went wrong</p>;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between bg-transparent"
        >
          <span className="flex flex-1 flex-wrap gap-1">
            {selectedLocations.length > 0 ? (
              selectedLocations.map((location) => (
                <Badge key={location.id} variant="destructive">
                  {location.label}
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search locations..." />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.id}
                  value={location.id}
                  onSelect={() => handleSelect(location.id)}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.includes(location.id) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {location.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
