"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilIcon } from "lucide-react";
import { LocationForm } from "./location-form";
import { editLocation } from "@/actions/location";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

export function EditLocationDialog({ location }: { location: any }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <PencilIcon />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit {location.city}</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {location?.city}</DialogTitle>
          <DialogDescription>
            Updated location will be visible in website location combobox
          </DialogDescription>
        </DialogHeader>

        <LocationForm
          action={editLocation}
          location={location}
          onSubmit={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
