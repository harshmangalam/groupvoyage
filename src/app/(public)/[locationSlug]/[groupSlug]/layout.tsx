import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, MapPin, User, Users } from "lucide-react";
import { SharePopover } from "@/components/share-popover";

import { Separator } from "@/components/ui/separator";
import { getGroupDetails } from "@/services/groups";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GroupMetaType } from "@/lib/types";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 h-full">
          <div className="w-full h-80">
            <div className="relative h-full">
              <Image
                src={group.posterUrl || ""}
                alt={`${group.name} poster`}
                fill
                className="object-cover rounded-md w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 w-full flex-col h-full  flex justify-between">
            <CardContent className="flex-1 p-0">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold">{group.name}</h1>
                <SharePopover groupName={group.name} slug={group.slug} />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <Link
                  href={`/locations/${group.location.slug}`}
                  className="w-fit flex items-center gap-2 font-medium text-sm group"
                >
                  <MapPin size={18} />
                  <span className="group-hover:underline">
                    {group.location.name}, {group.location.country}
                  </span>
                </Link>

                <div className="w-fit flex items-center gap-2 font-medium text-sm">
                  <User size={18} />
                  Organize by{" "}
                  <span className="font-semibold capitalize">
                    {group.organizer}
                  </span>
                </div>
                {(group.meta as GroupMetaType)?.source && (
                  <div className="w-fit flex items-center gap-2 font-medium text-sm">
                    <User size={18} />
                    Platform{" "}
                    <span className="font-semibold capitalize">
                      {(group.meta as GroupMetaType).source}
                    </span>
                  </div>
                )}
                {(group.meta as GroupMetaType)?.membersCount && (
                  <div className="w-fit flex items-center gap-2 font-medium text-sm">
                    <Users size={18} />
                    Members
                    <span className="font-semibold">
                      {(group.meta as GroupMetaType).membersCount}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-0">
              <div>
                <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                <TooltipProvider>
                  <div className="flex space-x-2">
                    {[...new Array(4)].map((_, i) => (
                      <Tooltip key={i}>
                        <TooltipTrigger asChild>
                          <Button
                            className="rounded-full"
                            size="icon"
                            variant="outline"
                            asChild
                          >
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
            </CardFooter>
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
