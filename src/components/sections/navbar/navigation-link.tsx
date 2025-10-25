"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavigationLink({ link }) {
  const pathname = usePathname();

  return (
    <Link
      key={link.href}
      href={link.href}
      className={cn(
        "relative text-sm font-semibold transition-colors hover:text-destructive",
        pathname === link.href ? "text-destructive" : "text-muted-foreground"
      )}
    >
      {link.name}
    </Link>
  );
}
