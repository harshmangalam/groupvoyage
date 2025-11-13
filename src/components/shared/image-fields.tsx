import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { UrlPreview } from "./url-preview";
import { PlusIcon, XIcon } from "lucide-react";

export function ImageFields({ value, onChange }) {
  const [posterUrls, setPosterUrls] = useState<string[]>(value);
  const [currentPosterInput, setCurrentPosterInput] = useState("");

  const addPosterUrl = () => {
    if (currentPosterInput.trim()) {
      const posters = [...posterUrls, currentPosterInput.trim()];
      setPosterUrls(posters);
      onChange(posters);
      setCurrentPosterInput("");
    }
  };

  const removePosterUrl = (index: number) => {
    const posters = posterUrls.filter((_, i) => i !== index);
    setPosterUrls(posters);
    onChange(posters);
  };

  return (
    <div>
      <div className="flex gap-2">
        <Input
          type="url"
          value={currentPosterInput}
          onChange={(e) => setCurrentPosterInput(e.target.value)}
          onKeyUp={(e) =>
            e.key === "Enter" && (e.preventDefault(), addPosterUrl())
          }
          placeholder="https://example.com/poster.jpg"
        />
        <Button type="button" onClick={addPosterUrl} size={"icon"}>
          <PlusIcon />
        </Button>
      </div>

      {posterUrls.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {posterUrls.map((url, index) => (
            <div key={index} className="relative group">
              <UrlPreview url={url} />
              <Button
                type="button"
                onClick={() => removePosterUrl(index)}
                className="absolute top-2 right-2 w-6 h-6"
                size={"icon"}
                variant={"secondary"}
              >
                <XIcon />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
