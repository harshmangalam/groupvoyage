import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/sections/navbar/mode-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import NavigationLinks from "./navigation-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="max-w-7xl w-full mx-auto flex h-16 items-center px-4 sm:px-6 justify-between">
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        <NavigationLinks />
        <div className="flex items-center gap-1">
          <Button size="icon" asChild variant="outline">
            <Link href={"/search"}>
              <SearchIcon />
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
