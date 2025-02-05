"use client";

import Link from "next/link";
import { Calendar, Globe, Home, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "../providers/sidebar-provider";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Users, label: "Groups", href: "/groups" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: Globe, label: "Locations", href: "/locations" },
];

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background transition-transform duration-200 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 lg:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close Sidebar</span>
          </Button>
        </div>
        <nav className="space-y-2 px-4 py-4">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={toggleSidebar}>
              <Button variant="ghost" className="w-full justify-start">
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
