"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
      <div className="rounded-full bg-destructive/10 p-4 mb-6">
        <AlertTriangle className="h-12 w-12 text-destructive" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">
        Oops! Something went wrong
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        We apologize for the inconvenience. Our team has been notified of this
        issue.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="destructive" onClick={reset}>
          Try again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Return to homepage</Link>
        </Button>
      </div>
    </div>
  );
}
