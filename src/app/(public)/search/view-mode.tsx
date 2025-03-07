"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { searchParams } from "@/lib/search-params";
import { GridIcon, ListIcon } from "lucide-react";
import { useQueryState } from "nuqs";

export function ViewMode() {
  const [viewMode, setViewMode] = useQueryState(
    "viewMode",
    searchParams.viewMode.withOptions({
      history: "replace",
      scroll: false,
      shallow: false,
      clearOnDefault: false,
    })
  );
  const viewModes = [
    {
      icon: <ListIcon />,
      label: "List view",
      key: "list",
    },
    {
      icon: <GridIcon />,
      label: "Table view",
      key: "table",
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {viewModes.map(({ icon, key, label }) => (
        <Tooltip key={key}>
          <TooltipTrigger asChild>
            <Button
              variant={key === viewMode ? "secondary" : "outline"}
              size="icon"
              onClick={() => setViewMode(key)}
              aria-label="List view"
            >
              {icon}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
