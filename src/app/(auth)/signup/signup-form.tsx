"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SignupData, SignupSchema } from "./definitions";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function SignupForm() {
  const router = useRouter();
  const form = useForm<SignupData>({
    resolver: valibotResolver(SignupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: SignupData) {
    try {
      const res = await authClient.signUp.email(data, {
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: (ctx) => {
          toast.success(`Account created successfully.`);
          router.push("/signin");
        },
      });
    } catch (error: any) {
      console.error("error", error);
      toast.error(error.message);
    }
  }

  return (
    <form method="post" id="signup-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-3">
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="name"
                type="text"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="email"
                name="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="password"
                type="password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field>
          <Button
            disabled={form.formState.isSubmitting}
            aria-disabled={form.formState.isSubmitting}
            className="w-full"
            type="submit"
            form="signup-form"
          >
            {form.formState.isSubmitting ? (
              <>
                <Spinner />
                Loading...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
