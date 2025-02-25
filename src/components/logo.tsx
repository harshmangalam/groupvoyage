import { SITE_NAME } from "@/lib/constatnts";

import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-3">
      <h1 className="text-2xl text-destructive font-bold hidden sm:block">
        {SITE_NAME}
      </h1>
    </Link>
  );
}
