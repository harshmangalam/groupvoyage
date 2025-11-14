import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PropsWithChildren, Suspense } from "react";

export default function ProtectedLayout({ children }: LayoutProps<"/">) {
  return (
    <Suspense>
      <ProtectedLayoutWrapper children={children} />
    </Suspense>
  );
}

async function ProtectedLayoutWrapper({ children }: PropsWithChildren) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }
  return <div>{children}</div>;
}
