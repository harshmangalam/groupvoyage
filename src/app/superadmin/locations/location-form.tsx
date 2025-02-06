import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";

type LocationFormProps = {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  city?: string;
  country?: string;
  isEdit?: boolean;
};
export function LocationForm({
  action,
  city,
  country,
  isEdit = false,
}: LocationFormProps) {
  return (
    <Form action={action} className="space-y-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="city">Name</Label>
        <Input defaultValue={city} name="city" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="country">Country</Label>
        <Input defaultValue={country} name="country" required />
      </div>

      <Button type="submit" className="w-full">
        {isEdit ? "Edit Location" : " Create Location"}
      </Button>
    </Form>
  );
}
