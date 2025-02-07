import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectLocation } from "@/db/schema";
import { Checkbox } from "@/components/ui/checkbox";

import Form from "next/form";

type LocationFormProps = {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  location?: SelectLocation;
};
export function LocationForm({ action, location }: LocationFormProps) {
  console.log(location);
  return (
    <Form action={action} className="space-y-4">
      <div>
        <input type="hidden" name="locationId" value={location?.id} />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="city">City</Label>
        <Input defaultValue={location?.city} name="city" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="country">Country</Label>
        <Input defaultValue={location?.country} name="country" required />
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
