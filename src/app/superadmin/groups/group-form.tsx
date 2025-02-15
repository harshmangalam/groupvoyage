import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectGroup } from "@/db/schema";
import { Checkbox } from "@/components/ui/checkbox";

import Form from "next/form";
import ImagePreviewInput from "@/components/image-preview-input";
import { Textarea } from "@/components/ui/textarea";
import { LocationsDropdown } from "@/components/locations-dropdown";

type GroupFormProps = {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  group?: SelectGroup;
};
export function GroupForm({ action, group }: GroupFormProps) {
  return (
    <Form action={action} className="space-y-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue={group?.name} name="name" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" defaultValue={group?.name} name="slug" required />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="posterUrl">Poster URL</Label>
        <ImagePreviewInput
          value={group?.posterUrl ?? ""}
          name="posterUrl"
          id="posterUrl"
          required
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="source">Source</Label>
        <Input
          defaultValue={group?.source ?? ""}
          name="source"
          required
          id="source"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="phone">Phone</Label>
        <Input
          defaultValue={group?.phone ?? ""}
          id="phone"
          name="phone"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="instagram">Instagram</Label>
        <Input
          defaultValue={group?.instagram ?? ""}
          id="instagram"
          name="instagram"
          required
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="details">Details</Label>
        <Textarea
          defaultValue={group?.details ?? ""}
          id="details"
          name="details"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="locationId">Location</Label>
        <LocationsDropdown name="locationId" id="locationId" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          name="active"
          defaultChecked={group?.active ?? true}
          id="active"
        />
        <label
          htmlFor="active"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Active
        </label>
      </div>

      <Button type="submit" className="w-full">
        {group ? "Edit" : " Create"}
      </Button>
    </Form>
  );
}
