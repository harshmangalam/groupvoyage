"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SearchBtn() {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          size="icon"
          variant={pathname === "/search" ? "secondary" : "outline"}
          aria-label="Search"
        >
          <Link href="/search">
            <SearchIcon />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Search</p>
      </TooltipContent>
    </Tooltip>
  );
}
