"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { RefreshCwIcon, Search } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";

export default function SearchInput({
  placeholder = "Start typing...",
  className,
}: {
  placeholder?: string;
  className?: string;
}) {
  const [isLoading, startTransition] = React.useTransition();
  const [query, setQuery] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({
      history: "replace",
      shallow: false,
      throttleMs: 1000,
      startTransition,
    })
  );

  async function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
  }

  return (
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
        {isLoading ? (
          <RefreshCwIcon className="animate-spin h-4 w-4 text-muted-foreground" />
        ) : (
          <Search className="h-4 w-4 text-muted-foreground" />
        )}
      </div>
      <Input
        placeholder={placeholder}
        className={`w-full pl-10 overflow-hidden ${className}`}
        aria-label="Search"
        value={query}
        onChange={handleSearchChange}
        autoFocus
      />
    </div>
  );
}
