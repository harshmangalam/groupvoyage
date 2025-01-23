"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const socialPlatforms = [
  {
    name: "Facebook",
    color: "bg-blue-600",
    url: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    name: "Twitter",
    color: "bg-blue-400",
    url: "https://twitter.com/intent/tweet?url=",
  },
  {
    name: "LinkedIn",
    color: "bg-blue-700",
    url: "https://www.linkedin.com/shareArticle?mini=true&url=",
  },
];

interface SharePopoverProps {
  groupName: string;
  groupUrl: string;
}

export function SharePopover({ groupName, groupUrl }: SharePopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const handleShare = (platform: string) => {
    setSelectedPlatform(platform);
    setIsOpen(true);
  };

  const shareUrl = selectedPlatform
    ? `${
        socialPlatforms.find((p) => p.name === selectedPlatform)?.url
      }${encodeURIComponent(groupUrl)}`
    : "";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {socialPlatforms.map((platform) => (
            <DropdownMenuItem
              key={platform.name}
              onSelect={() => handleShare(platform.name)}
            >
              <div className={`w-4 h-4 rounded-full ${platform.color} mr-2`} />
              {platform.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Share {groupName} on {selectedPlatform}
            </DialogTitle>
            <DialogDescription>
              Click the button below to share this group on {selectedPlatform}.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button
              onClick={() =>
                window.open(shareUrl, "_blank", "noopener,noreferrer")
              }
              className={`${
                socialPlatforms.find((p) => p.name === selectedPlatform)?.color
              } text-white`}
            >
              Share on {selectedPlatform}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
