import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/sections/navbar/mode-toggle";
import { NavigationLink } from "./navigation-link";
import { NavigationsDropdownMenu } from "./navigations-drodown-menu";
import { SearchBtn } from "./search-btn";
import { NAVIGATIONS_MENU } from "@/lib/constants";
import { Suspense } from "react";

export async function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="max-w-7xl w-full mx-auto flex h-16 items-center px-4 sm:px-6 justify-between">
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:items-center md:gap-6">
          {NAVIGATIONS_MENU.map((link) => (
            <Suspense key={link.name}>
              <NavigationLink link={link} />
            </Suspense>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Suspense>
            <NavigationsDropdownMenu />
          </Suspense>

          <Suspense>
            <SearchBtn />
          </Suspense>
          <Suspense>
            <ModeToggle />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
