"use client";

import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { parseAsFloat, useQueryState } from "nuqs";

export function FilterWrapper({ children }) {
  const [priceRange, setPriceRange] = useQueryState(
    "priceRange",
    parseAsFloat.withDefault(5000).withOptions({
      shallow: false,
      throttleMs: 300,
    })
  );

  return (
    <div className="space-y-6">
      {children}
      <Separator />
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            value={[priceRange]}
            onValueChange={(value) => {
              setPriceRange(value[0]);
            }}
            max={20000}
            min={100}
            step={100}
            className="mb-4"
          />
          <div className="flex justify-end text-sm text-muted-foreground">
            <span>₹{priceRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
