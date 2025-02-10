import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { GroupForm } from "./group-form";
import { createGroup } from "@/actions/group";

export function CreateDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Add Group
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new group</DialogTitle>
        </DialogHeader>
        <GroupForm action={createGroup} />
      </DialogContent>
    </Dialog>
  );
}
