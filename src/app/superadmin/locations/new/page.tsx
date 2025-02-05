import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Form from "next/form";
import { createLocation } from "@/app/actions/locations";

export default function Page() {
  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Create New Location</CardTitle>
      </CardHeader>
      <CardContent>
        <Form action={createLocation} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input name="City" required />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input name="country" required />
          </div>

          <Button type="submit" className="w-full">
            Create Location
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
}
