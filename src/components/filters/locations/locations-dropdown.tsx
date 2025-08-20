"use client";

import { CustomDropdownMenu } from "@/components/custom-dropdown-menu";
import { ButtonProps } from "@/components/ui/button";
import { T_DropdownOption } from "@/lib/types";
import { MapPinIcon } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";

export function LocationsDropdown({
  options,
  buttonProps,
}: {
  options: T_DropdownOption[];
  buttonProps?: ButtonProps;
}) {
  const [isLoading, startTransition] = React.useTransition();
  const [locations, setLocations] = useQueryState(
    "locations",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      startTransition,
    })
  );
  return (
    <CustomDropdownMenu
      placeholder="All Locations"
      options={options}
      label="Locations"
      icon={<MapPinIcon />}
      onValueChange={(value) => setLocations(value)}
      value={locations}
      loading={isLoading}
      buttonProps={buttonProps}
      onClear={() => setLocations("")}
    />
  );
}
