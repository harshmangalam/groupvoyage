"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { T_LocationOption } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

export function SelecLocations({
  locations,
}: {
  locations: T_LocationOption[];
}) {
  const [isPending, startTransition] = React.useTransition();

  const key = "locations";
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get(key)?.toString() || "";
  const router = useRouter();
  const pathname = usePathname();

  function handleSelect(currentValue: string) {
    if (currentValue === defaultValue) return;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, currentValue);
    startTransition(() => {
      router.push(pathname + "?" + newSearchParams);
    });
  }
  return (
    <Select
      disabled={isPending}
      onValueChange={handleSelect}
      defaultValue={defaultValue}
    >
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Select locations" />
      </SelectTrigger>
      <SelectContent>
        {locations.map((location) => (
          <SelectItem key={location.id} value={location.slug}>
            {location.city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
