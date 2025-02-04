import { Logo } from "../logo";
import { Suspense } from "react";
import { Cities } from "./cities";
import { Skeleton } from "../ui/skeleton";

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>

        <Suspense
          key={"locations-dropdown"}
          fallback={<Skeleton className="h-10 w-[200] rounded-md" />}
        >
          <Cities />
        </Suspense>
      </div>
    </nav>
  );
}
