"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAVIGATIONS_MENU } from "@/lib/constants";

export default function NavigationLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex lg:items-center md:gap-6">
      {NAVIGATIONS_MENU.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative text-sm font-semibold transition-colors hover:text-destructive",
            pathname === link.href
              ? "text-destructive"
              : "text-muted-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
