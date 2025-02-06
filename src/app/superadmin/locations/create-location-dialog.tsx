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
import { createLocation } from "@/actions/locations";

export function CreateLocationDialog() {
  return (
    <Dialog>
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

        <LocationForm action={createLocation} />
      </DialogContent>
    </Dialog>
  );
}
