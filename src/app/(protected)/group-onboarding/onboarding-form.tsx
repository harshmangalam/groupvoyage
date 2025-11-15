"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import {
  GroupFormSchema,
  groupFormSchema,
  initialGroupFormState,
} from "./definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { onboardNewGroup } from "./action";
import { LocationMultiSelect } from "@/components/shared/location-multi-select";
import { ImageFields } from "@/components/shared/image-fields";
import { toast } from "sonner";

const initialState = {
  formData: initialGroupFormState,
} as const;

export function OnboardingForm() {
  const [actionState, submitAction, isPending] = useActionState(
    onboardNewGroup,
    initialState
  );

  const { control, handleSubmit } = useForm<GroupFormSchema>({
    resolver: zodResolver(groupFormSchema),
    mode: "onTouched",
    defaultValues: actionState.formData,
  });

  useEffect(() => {
    if (actionState.error) {
      toast.error(actionState.error);
    }
  }, [actionState]);

  return (
    <form
      id="onboarding-form"
      action={submitAction}
      onSubmit={handleSubmit((_, e) => {
        startTransition(() => {
          const formData = new FormData(e?.target);
          submitAction(formData);
        });
      })}
    >
      <FieldGroup className="gap-3">
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Group name</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="name"
                name="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={control}
          name="details"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="details">Details</FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                id="details"
                name="details"
                rows={5}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id="email"
                  name="email"
                  type="email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id="phone"
                  name="phone"
                  type="tel"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={control}
            name="instagram"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="instagram">Instagram</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id="instagram"
                  name="instagram"
                  placeholder="Username"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <Controller
          control={control}
          name="source"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="source">Website Link</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="source"
                name="source"
                placeholder="Enter your website link"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="locations"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="locations">Locations</FieldLabel>
              <LocationMultiSelect {...field} />
              {/* hidden inputs so FormData picks them up */}
              {field.value.map((loc) => (
                <input key={loc} type="hidden" name="locations" value={loc} />
              ))}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="posterUrls"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="posterUrls">Group poster links</FieldLabel>
              <ImageFields {...field} />
              {/* hidden inputs so FormData picks them up */}
              {field.value?.map((loc) => (
                <input key={loc} type="hidden" name="posterUrls" value={loc} />
              ))}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Creating group...</span>
            </>
          ) : (
            <>
              <span>Create group</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}
