"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, ButtonProps } from "@/components/ui/button";
import { RefreshCwIcon, X } from "lucide-react";
import * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { T_DropdownOption } from "@/lib/types";

export function CustomDropdownMenu({
  options,
  label,
  placeholder,
  icon,
  value,
  onValueChange,
  onClear,
  loading,
  buttonProps = {
    className: "text-xs px-2 py-1",
    size: "sm",
    variant: "secondary",
  },
}: {
  options: T_DropdownOption[];
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  loading?: boolean;
  buttonProps?: ButtonProps;
}) {
  const [open, setOpen] = React.useState(false);

  function handleSelect(currentValue: string) {
    setOpen(false);
    onValueChange?.(currentValue);
  }

  function handleClear() {
    setOpen(false);
    onClear?.();
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="w-auto flex justify-between"
          variant={"outline"}
          {...buttonProps}
        >
          {loading ? <RefreshCwIcon className="animate-spin" /> : icon}
          {value
            ? options.find((o) => o.value === value)?.label || placeholder
            : placeholder}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex items-center justify-between px-2 py-2 gap-4">
          <span className="text-sm font-semibold"> {label}</span>
          {value && (
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
              className={`${d.value === value ? "bg-muted" : "bg-transparent"}`}
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
