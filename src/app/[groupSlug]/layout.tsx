import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";
import { SharePopover } from "@/components/share-popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const groupData = {
  name: "Escape and Explore",
  organizer: {
    name: "Ashok Sankurarthi",
    role: "Organizer",
  },
  socialMedia: {
    facebook: "https://facebook.com/techinnovators",
    twitter: "https://twitter.com/techinnovators",
    instagram: "https://instagram.com/techinnovators",
    linkedin: "https://linkedin.com/company/techinnovators",
  },
  bio: `Welcome to Escape & Explore. We offers thrilling adventures, from scenic treks to offbeat getaways, designed to create unforgettable memories. Whether you seek excitement or tranquility, we tailor every experience just for you!
Why us?
We at Escape & Explore personalize adventures led by expert guides, ensuring every journey is packed with excitement, relaxation, and discovery. Escape the ordinary and let us make your travel dreams a reality!`,
  poster:
    "https://secure.meetupstatic.com/photos/event/b/d/9/a/clean_518628538.webp",
  members: 1500,
  founded: "2020",
  location: "San Francisco, CA",
};

export default function GroupDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const groupUrl = `https://yourdomain.com/group/${encodeURIComponent(
    groupData.name
  )}`;

  return (
    <div>
      <Card className="w-full border-none max-w-6xl py-5 px-4 mx-auto shadow-none">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:max-w-[400px] lg:max-w-[500px]  xl:max-w-[600px] w-full">
            <div className="relative h-96 md:h-full">
              <Image
                src={groupData.poster || "/placeholder.svg"}
                alt={`${groupData.name} poster`}
                fill
                className="object-cover rounded-md w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 w-full">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-2xl font-bold">{groupData.name}</h1>
                <SharePopover groupName={groupData.name} groupUrl={groupUrl} />
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <Avatar>
                  <AvatarFallback>
                    {groupData.organizer.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h2 className="font-semibold text-sm">
                    {groupData.organizer.name}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {groupData.organizer.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 mb-4">
                <Badge
                  variant="secondary"
                  className="w-fit flex items-center gap-1 py-2 px-4 rounded-md"
                >
                  <Users size={16} />
                  {groupData.members} members
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-fit flex items-center gap-1 py-2 px-4 rounded-md"
                >
                  <Calendar size={16} />
                  Founded {groupData.founded}
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-fit flex items-center gap-1 py-2 px-4 rounded-md"
                >
                  <MapPin size={16} />
                  {groupData.location}
                </Badge>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                <TooltipProvider>
                  <div className="flex space-x-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline" asChild>
                          <a
                            href={groupData.socialMedia.facebook}
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
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline" asChild>
                          <a
                            href={groupData.socialMedia.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter size={18} />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline" asChild>
                          <a
                            href={groupData.socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Instagram size={18} />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Instagram</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline" asChild>
                          <a
                            href={groupData.socialMedia.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin size={18} />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
      <Separator />

      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p>{groupData.bio}</p>
      </section>

      {children}
    </div>
  );
}
