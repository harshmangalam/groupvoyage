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
import { getGroupsOption } from "@/actions/group";

interface LocationsDropdownProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {}

export function LocationsDropdown({
  name,
  defaultValue,
  ...props
}: LocationsDropdownProps) {
  const { data, error, isLoading } = useSWR("groups-option", () =>
    getGroupsOption()
  );
  const [selected, setSelected] = React.useState<string | undefined>(
    defaultValue as string | undefined
  );
  const [open, setOpen] = React.useState(false);

  const handleSelect = (key: string) => {
    setSelected(key);
    setOpen(false);
  };

  if (isLoading) return <Skeleton className="w-full h-16" />;
  if (error)
    return <p className="text-muted-foreground">Something went wrong</p>;
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
            {selected
              ? data?.find((l) => l.id === selected)?.name
              : "Select group..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          {data?.map((group) => (
            <DropdownMenuItem
              key={group.id}
              onSelect={() => handleSelect(group.id)}
              className="w-full"
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selected === group.id ? "opacity-100" : "opacity-0"
                )}
              />
              {group.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <select
        name={name}
        defaultValue={defaultValue}
        className="sr-only w-full"
        {...props}
      >
        <option value="">Select a group</option>
        {data?.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
}
