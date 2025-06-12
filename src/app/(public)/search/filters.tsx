"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  parseAsArrayOf,
  parseAsFloat,
  parseAsString,
  useQueryState,
} from "nuqs";

const durationOptions = [
  { label: "Day Trip", value: "one-day" },
  { label: "Full Weekend", value: "full-weekend" },
  { label: "Long Weekend", value: "long-weekend" },
  { label: "Others", value: "others" },
];

export function FilterContent({ children }) {
  const [priceRange, setPriceRange] = useQueryState(
    "priceRange",
    parseAsFloat.withDefault(5000).withOptions({
      shallow: false,
      throttleMs: 300,
    })
  );

  const [durations, setDurations] = useQueryState(
    "durations",
    parseAsArrayOf(parseAsString).withDefault([]).withOptions({
      shallow: false,
    })
  );

  const handleDurationChange = (value: string, checked: boolean) => {
    if (checked) {
      setDurations([...durations, value]);
    } else {
      setDurations(durations.filter((d) => d !== value));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            value={[priceRange]}
            onValueChange={(value) => {
              setPriceRange(value[0]);
            }}
            max={20000}
            min={0}
            step={100}
            className="mb-4"
          />
          <div className="flex justify-end text-sm text-muted-foreground">
            <span>₹{priceRange}</span>
          </div>
        </div>
      </div>

      <Separator />
      {children}
    </div>
  );
}
