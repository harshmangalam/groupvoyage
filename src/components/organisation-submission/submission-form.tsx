"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitTravelGroup } from "@/app/actions/organisation-submission"; // Import the server action
import { useActionState, useEffect } from "react";

// Define the Zod schema for client-side validation
const formSchema = z.object({
  websiteUrl: z
    .string()
    .url({ message: "Invalid URL format." })
    .min(1, { message: "Website URL is required." }),
  locations: z
    .string()
    .min(1, { message: "At least one starting location is required." }),
});

type FormData = z.infer<typeof formSchema>;

export default function SubmissionForm() {
  const { toast } = useToast();

  const [state, formAction, isPending] = useActionState(submitTravelGroup, {
    message: "",
    errors: {},
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteUrl: "",
      locations: "",
    },
  });

  // Effect to show toast messages based on server action state
  useEffect(() => {
    if (state.message) {
      if (state.message.includes("successfully")) {
        toast({
          title: "Success!",
          description: state.message,
        });
        reset(); // Reset form on successful submission
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, reset]);

  return (
    <div className="flex justify-center items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Submit Your Travel Group</CardTitle>
          <CardDescription>
            Have a travel group that organizes weekend trips? Share your details
            for our review, and we might feature your trips on our platform!
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Use formAction directly with the form's action attribute */}
          <form action={formAction} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="website-url">Travel Group Website URL</Label>
              <Input
                id="website-url"
                type="url"
                placeholder="https://yourtravelgroup.com"
                {...register("websiteUrl")} // Register input with React Hook Form
                required
              />
              {/* Display client-side validation errors */}
              {errors.websiteUrl && (
                <p className="text-sm text-red-500">
                  {errors.websiteUrl.message}
                </p>
              )}
              {/* Display server-side validation errors */}
              {state.errors?.websiteURL && (
                <p className="text-sm text-red-500">
                  {state.errors.websiteURL.join(", ")}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="locations">
                Starting Locations (comma-separated)
              </Label>
              <Textarea
                id="locations"
                placeholder="e.g., New York, Boston, Philadelphia, Chicago"
                {...register("locations")} // Register textarea with React Hook Form
                required
                className="min-h-[100px]"
              />
              <p className="text-sm text-muted-foreground">
                Enter cities where your trips typically start, separated by
                commas.
              </p>
              {/* Display client-side validation errors */}
              {errors.locations && (
                <p className="text-sm text-red-500">
                  {errors.locations.message}
                </p>
              )}
              {/* Display server-side validation errors */}
              {state.errors?.locations && (
                <p className="text-sm text-red-500">
                  {state.errors.locations.join(", ")}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit Group"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Your submission will be reviewed before being added to the homepage.
        </CardFooter>
      </Card>
    </div>
  );
}
