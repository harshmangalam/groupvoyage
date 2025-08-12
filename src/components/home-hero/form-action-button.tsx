"use client";
import { useActionState } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export function FormActionButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="h-14 px-6 text-base rounded-l-none"
      variant="destructive"
      disabled={pending}
    >
      {pending ? "Searching..." : "Search"}
    </Button>
  );
}
