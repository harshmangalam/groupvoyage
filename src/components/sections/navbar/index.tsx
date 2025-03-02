import { Logo } from "@/components/logo";
import SearchComponent from "./search";

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between gap-4 px-4 h-16 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="max-w-xs w-full">
          <SearchComponent />
        </div>
      </div>
    </nav>
  );
}
