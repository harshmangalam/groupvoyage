import { SITE_NAME } from "@/lib/constants";

import Link from "next/link";
import { LogoImg } from "./logo-img";

export function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <LogoImg />
      <h1 className="text-xl sm:text-2xl text-destructive font-bold">
        {SITE_NAME}
      </h1>
    </Link>
  );
}
