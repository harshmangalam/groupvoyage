"use client";

import useSWR from "swr";
import { getLocationsOption } from "@/actions/location";
import { Skeleton } from "@/components/ui/skeleton";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import { Field } from "@/components/ui/field";

interface LocationMultiSelectProps {
  value?: string[];
  onChange: (value: string[]) => void;
}

export function LocationMultiSelect({
  value = [],
  onChange,
}: LocationMultiSelectProps) {
  const { data, error, isLoading } = useSWR(
    "locations-option",
    getLocationsOption
  );

  if (isLoading) return <Skeleton className="w-full h-9" />;
  if (error)
    return <p className="text-muted-foreground">Something went wrong</p>;

  return (
    <MultiSelect onValuesChange={onChange} values={value}>
      <Field>
        <MultiSelectTrigger className="w-full">
          <MultiSelectValue placeholder="Select locations..." />
        </MultiSelectTrigger>
      </Field>

      <MultiSelectContent>
        <MultiSelectGroup>
          {data?.map((location) => (
            <MultiSelectItem key={location.id} value={location.slug}>
              {location.city}
            </MultiSelectItem>
          ))}
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  );
}
