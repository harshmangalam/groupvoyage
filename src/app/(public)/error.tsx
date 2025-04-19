"use client";

import { Error } from "@/components/error";

export default function ErrorPage({ error, reset }) {
  return <Error error={error} reset={reset} />;
}
