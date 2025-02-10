"use client";

import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
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
  };

  const handleImageError = () => {
    setError("Failed to load image. Please check the URL and try again.");
  };

  return (
    <div className="space-y-4 w-full">
      <Input
        type="text"
        id={props.id || "imageUrl"}
        onChange={handleInputChange}
        {...props}
        value={imageUrl}
      />

      {imageUrl && !error && (
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Preview"
          className="object-cover w-40 h-40 rounded-lg"
          onError={handleImageError}
        />
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
