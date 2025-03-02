"use client";

import * as React from "react";
import { CheckIcon, ListFilterIcon } from "lucide-react";

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

import { T_LocationOption } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function LocationsCombobox({
  locations,
}: {
  locations: T_LocationOption[];
}) {
  const [open, setOpen] = React.useState(false);

  const [isPending, startTransition] = React.useTransition();
  const searchParams = useSearchParams();
  const defaultLocation = searchParams.get("location")?.toString() || "";
  const router = useRouter();
  const pathname = usePathname();

  function handleSelect(currentValue: string) {
    if (currentValue === defaultLocation) return;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("location", currentValue);
    startTransition(() => {
      router.push(pathname + "?" + newSearchParams);
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
          className="w-full justify-between"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {defaultLocation
            ? locations.find((l) => l.slug === defaultLocation)?.city
            : "Filter city"}
          <ListFilterIcon className="ml-0 h-4 w-4 shrink-0" />
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
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      defaultLocation === l.slug ? "opacity-100" : "opacity-0"
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
