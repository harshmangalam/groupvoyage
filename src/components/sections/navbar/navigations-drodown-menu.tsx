"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NAVIGATIONS_MENU } from "@/lib/constants";
import { MenuIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function NavigationsDropdownMenu() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="block lg:hidden">
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button aria-label="Open menu" size={"icon"} variant={"outline"}>
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Menu</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent className="w-32">
          <DropdownMenuRadioGroup
            value={pathname}
            onValueChange={(v) => router.push(v)}
          >
            {NAVIGATIONS_MENU.map((link) => (
              <DropdownMenuRadioItem key={link.href} value={link.href}>
                {link.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
