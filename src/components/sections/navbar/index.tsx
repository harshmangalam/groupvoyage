import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/sections/navbar/mode-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import NavigationLinks from "./navigation-links";
import { NavigationsDropdownMenu } from "./navigations-drodown-menu";
import { SearchBtn } from "./search-btn";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="max-w-7xl w-full mx-auto flex h-16 items-center px-4 sm:px-6 justify-between">
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        <NavigationLinks />

        <div className="flex items-center gap-1">
          <div className="block lg:hidden">
            <NavigationsDropdownMenu />
          </div>
          <SearchBtn />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
