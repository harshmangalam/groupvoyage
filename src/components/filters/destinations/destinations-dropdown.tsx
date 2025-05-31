"use client";

import { CustomDropdownMenu } from "@/components/custom-dropdown-menu";
import { ButtonProps } from "@/components/ui/button";
import { searchParams } from "@/lib/search-params";
import { T_DropdownOption } from "@/lib/types";
import { MapPinIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import React from "react";

export function DestinationsDropdown({
  options,
  buttonProps,
}: {
  options: T_DropdownOption[];
  buttonProps?: ButtonProps;
}) {
  const [isLoading, startTransition] = React.useTransition();
  const [query, setQuery] = useQueryState(
    "destinations",
    searchParams.locations.withOptions({
      history: "push",
      shallow: false,
      scroll: false,
      startTransition,
      clearOnDefault: true,
    })
  );
  return (
    <CustomDropdownMenu
      placeholder="Filter Destinations"
      options={options}
      label="Destinations"
      icon={<MapPinIcon />}
      onValueChange={(value) => setQuery(value)}
      value={query}
      loading={isLoading}
      buttonProps={buttonProps}
      onClear={() => setQuery("")}
    />
  );
}
