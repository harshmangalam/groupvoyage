"use client";

import { useEffect, useRef, useState } from "react";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q")?.toString() ?? "";
  const [value, setValue] = useState("");
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

  useEffect(() => {
    if (search) {
      setValue(search);
    }
  }, [search]);

  return (
    <Form
      action="/search"
      className="relative flex items-center w-full max-w-sm"
    >
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={searchInputRef}
          name="q"
          placeholder="Where do you want to go?"
          className="w-full pl-8 overflow-hidden"
          aria-label="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value.trim().length ? (
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Button
              size={"icon"}
              className="rounded-l-none"
              variant={"secondary"}
            >
              <ArrowRightIcon className="text-muted-foreground" />
            </Button>
          </div>
        ) : null}
      </div>
    </Form>
  );
}
