"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Activity, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="w-10 h-10 rounded-md" />;
  }

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
