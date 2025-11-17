"use client";

import { logoutUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { LogOutIcon } from "lucide-react";
import Form from "next/form";
import { useActionState } from "react";

export function Logout() {
  const [_, formAction, isPending] = useActionState(logoutUser, null);
  return (
    <Form action={formAction} className="block w-full">
      <Button
        type="submit"
        className="flex justify-start items-center py-1 px-2 w-full focus:bg-accent text-destructive hover:text-destructive"
        variant={"ghost"}
        disabled={isPending}
      >
        {isPending ? (
          <Spinner className="mr-2 h-4 w-4" />
        ) : (
          <LogOutIcon className="mr-2 h-4 w-4" />
        )}
        <span>Log out</span>
      </Button>
    </Form>
  );
}
