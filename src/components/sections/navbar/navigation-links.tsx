"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    name: "Locations",
    href: "/locations",
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "Groups",
    href: "/groups",
  },
  {
    name: "Trips",
    href: "/trips",
  },
];

export default function NavigationLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:items-center md:gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          )}
        >
          {link.name}
          {pathname === link.href && (
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary" />
          )}
        </Link>
      ))}
    </div>
  );
}
