import { SITE_NAME } from "@/lib/constatnts";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-3">
      <Image
        width={96}
        height={96}
        src={"/logo.png"}
        className="rounded-full w-8 h-8"
        alt={SITE_NAME}
      />
      <h1 className="text-lg font-bold hidden sm:block">{SITE_NAME}</h1>
    </Link>
  );
}
