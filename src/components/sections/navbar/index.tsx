import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/sections/navbar/mode-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import SearchInput from "@/components/search-input";

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between gap-2 px-4 h-16 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center gap-2">
          <Button size="icon" asChild variant="outline">
            <Link href={"/search"}>
              <SearchIcon />
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
