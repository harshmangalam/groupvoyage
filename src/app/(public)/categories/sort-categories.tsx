"use client";

import { CustomDropdownMenu } from "@/components/custom-dropdown-menu";
import { CalendarClockIcon } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";

export function SortCategories() {
  const [isLoading, startTransition] = React.useTransition();
  const [query, setQuery] = useQueryState(
    "sort",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      startTransition,
    })
  );
  return (
    <CustomDropdownMenu
      placeholder="Sort by"
      options={[...OPTIONS]}
      label="Categories"
      icon={<CalendarClockIcon />}
      onValueChange={(value) => setQuery(value)}
      value={query}
      loading={isLoading}
      onClear={() => setQuery("")}
    />
  );
}

export const OPTIONS = [
  { label: "Relevance", value: "" },
  { label: "Name (A-Z)", value: "asc" },
  { label: "Name (Z-A)", value: "desc" },
] as const;
