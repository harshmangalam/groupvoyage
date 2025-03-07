"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { LoaderIcon, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/search-params";

export default function SearchComponent() {
  const router = useRouter();
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
    const query = await setQuery(value);
    startTransition(() => {
      router.push(`/search` + "?" + query);
    });
  }

  return (
    <div className="relative w-full">
      <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 ">
        {isLoading ? (
          <LoaderIcon className="animate-spin w-3.5 h-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
        ) : (
          <Search className="w-3.5 h-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
        )}
      </div>
      <Input
        placeholder="Where do you want to go?"
        className="w-full pl-6 sm:pl-8 overflow-hidden text-sm sm:text-base"
        aria-label="Search"
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
}
