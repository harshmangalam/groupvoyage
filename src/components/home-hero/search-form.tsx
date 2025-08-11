"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function SearchForm() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", keyword);
    startTransition(() => {
      router.push(`/search?q=${encodeURIComponent(keyword)}`);
    });
  };

  return (
    <div className="flex w-full max-w-3xl mx-auto gap-0">
      <div className="w-full relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground z-10" />
        <Input
          type="text"
          placeholder="Where do you want to go?"
          className="pl-10 md:pl-12 h-14 text-lg bg-background/95 backdrop-blur-sm focus-visible:ring-destructive rounded-r-none text-sm md:text-lg font-semibold"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="h-14 px-6 text-base rounded-l-none"
        variant="destructive"
        onClick={handleSubmit}
        disabled={isPending}
      >
        {isPending ? "Searching..." : "Search"}
      </Button>
    </div>
  );
}
