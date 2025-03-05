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
import { PlusIcon } from "lucide-react";
import { LocationForm } from "./location-form";
import { createLocation } from "@/actions/location";
import { useState } from "react";

export function CreateLocationDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Add Location
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new location</DialogTitle>
          <DialogDescription>
            Added location will be visible in website location combobox
          </DialogDescription>
        </DialogHeader>

        <LocationForm action={createLocation} onSubmit={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
