"use client";

import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface ImagePreviewInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function ImagePreviewInput({
  ...props
}: ImagePreviewInputProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    setError(null);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const handleImageError = () => {
    setError("Failed to load image. Please check the URL and try again.");
  };

  return (
    <div className="space-y-4 w-full">
      <Input
        type="text"
        id={props.id || "imageUrl"}
        value={imageUrl}
        onChange={handleInputChange}
        {...props}
      />

      {imageUrl && !error && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Preview"
            fill
            className="object-cover"
            onError={handleImageError}
          />
        </div>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
