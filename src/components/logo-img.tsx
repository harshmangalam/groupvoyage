import Image from "next/image";
import Link from "next/link";

export function LogoImg({ className = "w-8 h-8" }) {
  return (
    <Image
      src={"/logo.png"}
      unoptimized
      width={32}
      height={32}
      className={className}
      alt="Groupvoyage logo"
    />
  );
}
