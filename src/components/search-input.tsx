"use client";

import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { RefreshCwIcon, Search } from "lucide-react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/search-params";

export default function SearchInput() {
  const [isLoading, startTransition] = React.useTransition();
  const [query, setQuery] = useQueryState(
    "q",
    searchParams.q.withOptions({
      history: "replace",
      shallow: false,
      scroll: true,
      throttleMs: 1000,
      startTransition,
      clearOnDefault: true,
    })
  );

  async function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
  }

  useEffect(() => {
    return () => {
      setQuery("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        placeholder="Search for groups & trips"
        className="w-full pl-10 overflow-hidden"
        aria-label="Search"
        value={query}
        onChange={handleSearchChange}
        autoFocus
      />
    </div>
  );
}
