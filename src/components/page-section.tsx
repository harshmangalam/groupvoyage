import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

export function PageSection({
  children,
  label,
  description,
  href,
  others,
}: React.PropsWithChildren & {
  label: any;
  description?: any;
  href?: string;
  others?: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 md:gap-6 py-4 md:py-6">
      <div className="flex flex-row items-center gap-4 justify-between flex-wrap">
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            {label}
          </h2>
          {/* <p className="leading-6 font-normal text-muted-foreground">
            {description}
          </p> */}
        </div>
        {href && (
          <Button size={"sm"} asChild variant={"ghost"}>
            <Link href={href}>
              See all <ArrowRightIcon />
            </Link>
          </Button>
        )}
        {others}
      </div>
      {children}
    </section>
  );
}
