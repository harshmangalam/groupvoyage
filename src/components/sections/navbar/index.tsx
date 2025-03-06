import { Logo } from "@/components/logo";
import SearchComponent from "./search";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between gap-2 px-4 h-16 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="max-w-sm w-full">
          <SearchComponent />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
