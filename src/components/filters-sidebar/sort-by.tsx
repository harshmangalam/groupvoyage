"use client";

import { CustomDropdownMenu } from "@/components/custom-dropdown-menu";
import { ButtonProps } from "@/components/ui/button";
import { ArrowUpAZIcon } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";

export function SortBy({ buttonProps }: { buttonProps?: ButtonProps }) {
  const [isLoading, startTransition] = React.useTransition();
  const [query, setQuery] = useQueryState(
    "sortBy",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      startTransition,
    })
  );
  return (
    <CustomDropdownMenu
      placeholder="Sort by"
      options={sortOptions}
      label="Sort by"
      icon={<ArrowUpAZIcon />}
      onValueChange={(value) => setQuery(value)}
      value={query}
      loading={isLoading}
      buttonProps={buttonProps}
      onClear={() => setQuery("")}
    />
  );
}

const sortOptions = [
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "duration-short", label: "Duration: Shortest First" },
  { value: "duration-long", label: "Duration: Longest First" },
  { value: "newest", label: "Newest First" },
  { value: "popular", label: "Most Popular" },
  { value: "alphabetical", label: "A-Z" },
];
