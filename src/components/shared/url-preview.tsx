"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

interface UrlPreviewProps {
  url: string;
  label?: string;
}

export function UrlPreview({ url, label }: UrlPreviewProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative bg-muted border border-border rounded-lg overflow-hidden group">
      {hasError ? (
        <div className="aspect-video flex items-center justify-center bg-muted/50 gap-2 text-muted-foreground">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm">Could not load image</span>
        </div>
      ) : (
        <img
          src={url}
          alt={label || "Preview"}
          onError={() => setHasError(true)}
          className="w-full h-auto aspect-video object-cover"
        />
      )}
      {label && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
          <p className="text-xs font-medium text-white">{label}</p>
        </div>
      )}
    </div>
  );
}
