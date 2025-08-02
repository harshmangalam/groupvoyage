"use client";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SearchBtn() {
  const pathname = usePathname();

  return (
    <Button
      size="icon"
      asChild
      variant={pathname === "/search" ? "secondary" : "outline"}
    >
      <Link href={"/search"}>
        <SearchIcon />
      </Link>
    </Button>
  );
}
