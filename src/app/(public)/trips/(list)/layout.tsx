import { Filters } from "@/components/filters-sidebar/filters";
import { FiltersSidebar } from "@/components/filters-sidebar/filters-sidebar";
import { SlidersHorizontal } from "lucide-react";

export default async function TripsLayout({ children }: LayoutProps<"/trips">) {
  return (
    <div className="container mx-auto px-4 py-4 flex-1 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters - Hidden on mobile, sticky on desktop */}
      <aside className="hidden lg:block w-80 sticky top-20 self-start max-h-[calc(100vh-theme(space.12))] overflow-y-auto pr-4">
        <div className="bg-background rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>

          <Filters />
        </div>
      </aside>
      <main className="flex-1">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Explore Trips</h2>
          </div>
          <FiltersSidebar>
            <Filters />
          </FiltersSidebar>
        </div>

        {children}
      </main>
    </div>
  );
}
