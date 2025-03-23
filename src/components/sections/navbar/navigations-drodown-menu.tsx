"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAVIGATIONS_MENU } from "@/lib/constatnts";
import { MenuIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function NavigationsDropdownMenu() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
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
  );
}
