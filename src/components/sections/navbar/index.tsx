import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/sections/navbar/mode-toggle";
import { NavigationLink } from "./navigation-link";
import { NavigationsDropdownMenu } from "./navigations-drodown-menu";
import { SearchBtn } from "./search-btn";
import { NAVIGATIONS_MENU } from "@/lib/constants";
import { Activity, Suspense } from "react";

export async function Navbar({
  showNavigations = true,
}: {
  showNavigations?: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="max-w-7xl w-full mx-auto flex h-16 items-center px-4 sm:px-6 justify-between">
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>
        <Activity mode={showNavigations ? "visible" : "hidden"}>
          <div className="hidden lg:flex lg:items-center md:gap-6">
            {NAVIGATIONS_MENU.map((link) => (
              <Suspense key={link.name}>
                <NavigationLink link={link} />
              </Suspense>
            ))}
          </div>
        </Activity>

        <div className="flex items-center gap-1">
          <Activity mode={showNavigations ? "visible" : "hidden"}>
            <Suspense>
              <NavigationsDropdownMenu />
            </Suspense>
          </Activity>

          <Suspense>
            <SearchBtn />
          </Suspense>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
