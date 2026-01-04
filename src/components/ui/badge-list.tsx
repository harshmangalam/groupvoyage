import { Badge } from "./badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { cn } from "@/lib/utils";

type BadgeListProps = {
  items: Record<string, string>[];
  itemTitle: string;
  className?: string;
  partialNumber?: number;
};

function BadgeList({
  items,
  itemTitle,
  className,
  partialNumber = 2,
}: BadgeListProps) {
  const partialItems = items?.length ? items.slice(0, partialNumber) : [];
  const remainingItemsCount = items.length - partialNumber;
  const remainingItems = items
    ?.slice(partialNumber)
    ?.map((item) => item[itemTitle])
    ?.join(", ");

  return (
    <div className={cn("flex gap-1 flex-wrap", className)}>
      {partialItems.map((item, i) => (
        <Badge key={i} variant={"outline"} className="capitalize">
          {item[itemTitle]}
        </Badge>
      ))}

      {items.length > partialNumber && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="secondary">+{remainingItemsCount}</Badge>
          </TooltipTrigger>

          <TooltipContent>
            <p>{remainingItems}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}

export { BadgeList };
