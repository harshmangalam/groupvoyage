"use client";

import { CustomDropdownMenu } from "@/components/custom-dropdown-menu";
import { ButtonProps } from "@/components/ui/button";
import { T_DropdownOption } from "@/lib/types";
import { MapPinIcon, UsersIcon } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";

export function GroupsDropdown({
  options,
  buttonProps,
}: {
  options: T_DropdownOption[];
  buttonProps?: ButtonProps;
}) {
  const [isLoading, startTransition] = React.useTransition();
  const [groups, setGroups] = useQueryState(
    "groups",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      startTransition,
    })
  );
  return (
    <CustomDropdownMenu
      placeholder="All Groups"
      options={options}
      label="Groups"
      icon={<UsersIcon />}
      onValueChange={(value) => setGroups(value)}
      value={groups}
      loading={isLoading}
      buttonProps={buttonProps}
      onClear={() => setGroups("")}
    />
  );
}
