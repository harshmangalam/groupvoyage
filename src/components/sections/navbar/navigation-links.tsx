"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAVIGATIONS_MENU } from "@/lib/constatnts";

export default function NavigationLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:items-center md:gap-6">
      {NAVIGATIONS_MENU.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative text-sm font-semibold transition-colors hover:text-primary",
            pathname === link.href
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
