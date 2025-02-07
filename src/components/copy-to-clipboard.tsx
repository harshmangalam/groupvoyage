"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useClipboard } from "@/hooks/use-clipboard";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface CopyToClipboardProps {
  text: string;
}

export function CopyToClipboard({ text }: CopyToClipboardProps) {
  const { copied, copyToClipboard } = useClipboard();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={() => copyToClipboard(text)}
          variant="outline"
          size={"icon"}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy</p>
      </TooltipContent>
    </Tooltip>
  );
}
