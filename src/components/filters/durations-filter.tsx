"use client";

import { CustomDropdownMenu } from "@/components/custom-dropdown-menu";
import { DURATIONS } from "@/lib/constants";
import { CalendarClockIcon } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";
import { ButtonProps } from "../ui/button";

export function DurationsFilter({
  buttonProps,
}: {
  buttonProps?: ButtonProps;
}) {
  const [isLoading, startTransition] = React.useTransition();
  const [query, setQuery] = useQueryState(
    "durations",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      startTransition,
    })
  );
  return (
    <CustomDropdownMenu
      placeholder="Filter Durations"
      options={DURATIONS}
      label="Durations"
      icon={<CalendarClockIcon />}
      onValueChange={(value) => setQuery(value)}
      value={query}
      loading={isLoading}
      buttonProps={buttonProps}
      onClear={() => setQuery("")}
    />
  );
}
