import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectGroup } from "@/db/schema";
import { Checkbox } from "@/components/ui/checkbox";

import Form from "next/form";
import ImagePreviewInput from "@/components/image-preview-input";

type GroupFormProps = {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  group?: SelectGroup;
};
export function GroupForm({ action, group }: GroupFormProps) {
  console.log(location);
  return (
    <Form action={action} className="space-y-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="city">Name</Label>
        <Input defaultValue={group?.name} name="name" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="country">Details</Label>
        <Input defaultValue={group?.details ?? ""} name="details" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="posterUrl">Poster URL</Label>
        <ImagePreviewInput
          defaultValue={group?.posterUrl ?? ""}
          name="posterUrl"
          required
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="organizer">Organiser</Label>
        <Input
          defaultValue={group?.organizer ?? ""}
          name="organizer"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="source">Source</Label>
        <Input defaultValue={group?.organizer ?? ""} name="source" required />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox name="active" defaultChecked={location?.active} id="active" />
        <label
          htmlFor="active"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Active
        </label>
      </div>

      <Button type="submit" className="w-full">
        {location ? "Edit Location" : " Create Location"}
      </Button>
    </Form>
  );
}
