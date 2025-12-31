import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

export async function PageSection({
  children,
  label,
  href,
  others,
  description,
}: React.PropsWithChildren & {
  label?: unknown;
  description?: string;
  href?: string;
  others?: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 md:gap-6 py-4 md:py-6">
      <div className="flex flex-row items-center gap-2 justify-between flex-wrap">
        <div className="flex flex-col">
          <h2 className="text-lg md:text-xl font-bold tracking-normal">
            {label as React.ReactNode}
          </h2>
          <p className="leading-6 font-normal text-muted-foreground text-sm">
            {description}
          </p>
        </div>
        {href && (
          <div>
            <Button size={"sm"} asChild variant={"ghost"}>
              <Link href={href}>
                View more <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        )}
        {others}
      </div>
      {children}
    </section>
  );
}
