"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // shadcn button
import { RefreshCwIcon, XIcon } from "lucide-react"; // optional icon
import { useTransition } from "react";

export function ClearFiltersButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Only show button if there are search params
  const hasFilters = Array.from(searchParams.entries()).length > 0;

  const handleClear = () => {
    startTransition(() => {
      router.push(pathname); // Navigates to path with no search params
    });
  };

  if (!hasFilters) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        onClick={handleClear}
        className="shadow-lg rounded-full"
        disabled={isPending}
      >
        {isPending ? (
          <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <XIcon className="mr-2 h-4 w-4" />
        )}
        Clear Filters
      </Button>
    </div>
  );
}
