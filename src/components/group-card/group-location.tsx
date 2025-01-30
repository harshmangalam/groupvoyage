"use client";
import { SelectLocation } from "@/db/schema";
import { MapPin } from "lucide-react";

export function GroupLocation({ country, name }: SelectLocation) {
  return (
    <div className="flex items-center">
      <MapPin className="w-4 h-4 mr-1" />
      <div>
        {name}, {country}
      </div>
    </div>
  );
}
