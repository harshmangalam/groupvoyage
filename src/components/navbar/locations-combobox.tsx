"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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
import { useParams, useRouter } from "next/navigation";
import { T_LocationOption } from "@/lib/types";

export function LocationsCombobox({
  locations,
}: {
  locations: T_LocationOption[];
}) {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const params = useParams();
  const locationSlug = params.locationSlug;

  function handleSelect(currentValue: string) {
    if (currentValue === locationSlug) return;

    startTransition(() => {
      router.push(`/${currentValue}`);
    });
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {locationSlug
            ? locations.find((l) => l.slug === locationSlug)?.city
            : "Select city"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search cities" />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {locations.map((l) => (
                <CommandItem value={l.slug} key={l.id} onSelect={handleSelect}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      locationSlug === l.slug ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {l.city}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
