import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterIcon } from "lucide-react";
import { FilterWrapper } from "./filters-wrapper";

export function FiltersSidebar({ children }) {
  return (
    <Sheet>
      <SheetTrigger asChild className="block lg:hidden">
        <Button variant="outline" size="sm">
          <FilterIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Refine your search results</SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <FilterWrapper>{children}</FilterWrapper>
        </div>
      </SheetContent>
    </Sheet>
  );
}
