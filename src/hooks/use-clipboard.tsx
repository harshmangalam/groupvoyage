import { useState } from "react";
import { toast } from "./use-toast";

export const useClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        description: `${text} copied!`,
      });
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return { copied, copyToClipboard };
};
