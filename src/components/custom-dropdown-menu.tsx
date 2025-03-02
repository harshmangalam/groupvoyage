"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ListFilterIcon, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function CustomDropdownMenu({
  options,
  paramKey,
  label,
  placeholder,
}: {
  options: { label: string; value: string }[];
  paramKey: string;
  label: string;
  placeholder: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get(paramKey)?.toString() || "";
  const router = useRouter();
  const pathname = usePathname();

  function handleSelect(currentValue: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    if (currentValue === "none") {
      newSearchParams.delete(paramKey);
    } else {
      newSearchParams.set(paramKey, currentValue);
    }
    startTransition(() => {
      router.push(pathname + "?" + newSearchParams);
    });
    setOpen(false);
  }

  function handleClear() {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(paramKey);
    startTransition(() => {
      router.push(pathname + "?" + newSearchParams);
    });
    setOpen(false);
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={isPending}
          className="w-40 flex justify-between"
          variant={"outline"}
        >
          {defaultValue
            ? options.find((o) => o.value === defaultValue)?.label ||
              placeholder
            : placeholder}

          <ListFilterIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex items-center justify-between px-2 py-2 gap-4">
          <span className="text-sm font-semibold"> {label}</span>
          {defaultValue && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"secondary"}
                  size="icon"
                  className="w-6 h-6"
                  onClick={handleClear}
                >
                  <X className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clear {label}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-96 overflow-auto min-w-40">
          {options.map((d) => (
            <DropdownMenuItem
              key={d.value}
              onSelect={() => handleSelect(d.value)}
              className={`${
                d.value === defaultValue ? "bg-muted" : "bg-transparent"
              }`}
            >
              <label
                htmlFor={`filter-${d.value}`}
                className="flex-1 cursor-pointer text-sm"
              >
                {d.label}
              </label>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
