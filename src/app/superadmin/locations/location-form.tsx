import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectLocation } from "@/db/schema";

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
        <Label htmlFor="city">Name</Label>
        <Input defaultValue={location?.city} name="city" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="country">Country</Label>
        <Input defaultValue={location?.country} name="country" required />
      </div>

      <Button type="submit" className="w-full">
        {location ? "Edit Location" : " Create Location"}
      </Button>
    </Form>
  );
}
