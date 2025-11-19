import { LogoImg } from "@/components/logo-img";
import { FieldDescription } from "@/components/ui/field";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <LogoImg />
          GroupVoyage
        </Link>
        {children}
        <FieldDescription className="px-6 text-center">
          By clicking continue, you agree to our{" "}
          <Link href="/tnc">Terms of Service</Link> and{" "}
          <Link href="privacy-policy">Privacy Policy</Link>.
        </FieldDescription>
      </div>
    </div>
  );
}
