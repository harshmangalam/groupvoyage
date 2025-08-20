"use client";

import { CustomDropdownMenu } from "@/components/custom-dropdown-menu";
import { ButtonProps } from "@/components/ui/button";
import { T_DropdownOption } from "@/lib/types";
import { TagIcon } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";

export function CategoriesDropdown({
  options,
  buttonProps,
}: {
  options: T_DropdownOption[];
  buttonProps?: ButtonProps;
}) {
  const [isLoading, startTransition] = React.useTransition();
  const [query, setQuery] = useQueryState(
    "categories",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      startTransition,
    })
  );
  return (
    <CustomDropdownMenu
      placeholder="All Categories"
      options={options}
      label="Categories"
      icon={<TagIcon />}
      onValueChange={(value) => setQuery(value)}
      value={query}
      loading={isLoading}
      buttonProps={buttonProps}
      onClear={() => setQuery("")}
    />
  );
}
