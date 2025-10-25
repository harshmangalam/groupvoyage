"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Activity } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="outline"
      size="icon"
      className="flex-none relative"
    >
      <Activity mode={isDark ? "visible" : "hidden"}>
        <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all`} />
      </Activity>
      <Activity mode={!isDark ? "visible" : "hidden"}>
        <Sun className={`h-[1.2rem] w-[1.2rem] transition-all`} />
      </Activity>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
