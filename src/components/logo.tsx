import { SITE_NAME } from "@/lib/constants";

import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-xl sm:text-2xl text-destructive font-bold">
        {SITE_NAME}
      </h1>
    </Link>
  );
}
