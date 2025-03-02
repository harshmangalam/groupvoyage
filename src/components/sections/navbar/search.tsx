"use client";

import { useEffect, useRef } from "react";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q")?.toString();
  const searchInputRef = useRef<HTMLInputElement>(null);
  // Add keyboard shortcut listener (press "/" to focus search)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if the key pressed is "/" and not in an input or textarea
      if (
        event.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Form
      action="/search"
      className="relative flex items-center w-full max-w-sm"
    >
      <div className="relative w-full">
        <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
        <Input
          ref={searchInputRef}
          name="q"
          placeholder="Where do you want to go?"
          className="w-full pl-6 sm:pl-8 overflow-hidden text-sm sm:text-base"
          aria-label="Search"
          defaultValue={search}
        />
      </div>
    </Form>
  );
}
