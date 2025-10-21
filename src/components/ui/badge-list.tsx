import * as React from "react"
import { Badge } from "./badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { cn } from "@/lib/utils";

type BadgeListProps = {
  items: Record<string, string>[],
  itemTitle: string,
  className?: string,
};

function BadgeList({ items, itemTitle, className }: BadgeListProps) {
  return (
    <div className={cn("flex gap-1 flex-wrap", className)}>
      {
        <Badge
          variant={"secondary"}
          className="capitalize"
        >
          {items[0][itemTitle]}
        </Badge>
      }
      <Tooltip>
        <TooltipTrigger asChild>
          {items.length > 1 && (
              <Badge variant="destructive">+{items.length - 1}</Badge>
            )}
        </TooltipTrigger>

        <TooltipContent>
          <p>{items.slice(1).map((item) => item[itemTitle]).join(", ")}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export { BadgeList }
