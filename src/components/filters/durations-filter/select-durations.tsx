"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

export function SelectDurations({
  options,
}: {
  options: { label: string; value: string }[];
}) {
  const [isPending, startTransition] = React.useTransition();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get("durations")?.toString() || "";
  const router = useRouter();
  const pathname = usePathname();

  function handleSelect(currentValue: string) {
    if (currentValue === defaultValue) return;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("durations", currentValue);
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
        <SelectValue placeholder="Select durations" />
      </SelectTrigger>
      <SelectContent>
        {options.map((d) => (
          <SelectItem key={d.value} value={d.value}>
            {d.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
