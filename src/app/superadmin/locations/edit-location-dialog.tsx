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
import { editLocation } from "@/actions/locations";
import { SelectLocation } from "@/db/schema";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function EditLocationDialog({ location }: { location: SelectLocation }) {
  return (
    <Dialog>
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

        <LocationForm action={editLocation} location={location} />
      </DialogContent>
    </Dialog>
  );
}
