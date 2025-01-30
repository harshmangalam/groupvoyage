import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, MapPin } from "lucide-react";
import { SharePopover } from "@/components/share-popover";

import { Separator } from "@/components/ui/separator";
import { getGroupDetails } from "@/services/groups";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function GroupDetailsLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ groupSlug: string }>;
}>) {
  const { groupSlug } = await params;
  const group = await getGroupDetails({ slug: groupSlug });
  if (!group) return notFound();

  return (
    <div>
      <Card className="w-full border-none max-w-7xl py-5 px-4 mx-auto shadow-none">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:max-w-[500px]  xl:max-w-[576px] w-full h-80">
            <div className="relative h-96 md:h-full">
              <Image
                src={group.posterUrl || ""}
                alt={`${group.name} poster`}
                fill
                className="object-cover rounded-md w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 w-full">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-2xl font-bold">{group.name}</h1>
                <SharePopover groupName={group.name} slug={group.slug} />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <Button asChild variant={"link"} className="w-fit p-0">
                  <Link href={`/locations/${group.location.slug}`}>
                    <MapPin size={16} />
                    {group.location.name}, {group.location.country}
                  </Link>
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                <TooltipProvider>
                  <div className="flex space-x-2">
                    {[...new Array(4)].map((_, i) => (
                      <Tooltip key={i}>
                        <TooltipTrigger asChild>
                          <Button size="icon" variant="outline" asChild>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Facebook size={18} />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Facebook</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
      <Separator />

      <section className="max-w-7xl mx-auto mt-12 px-4">
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p>{group.details}</p>
      </section>

      {children}
    </div>
  );
}
