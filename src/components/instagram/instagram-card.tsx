import Link from "next/link";
import { Users, Grid3X3 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { T_InstagramProfile } from "@/lib/types";
import { SITE_URL } from "@/lib/constants";
import { siInstagram } from "simple-icons";

export function InstagramProfileCard({
  followers,
  following,
  name,
  posts,
  username,
}: T_InstagramProfile) {
  return (
    <Link
      href={`https://instagram.com/${username}?utm_source=${SITE_URL}&utm_medium=referral&utm_campaign=profile_click`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="h-auto w-full transition-all hover:bg-muted max-w-xs">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="space-y-1 flex-1 overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium truncate overflow-hidden text-ellipsis">
                  @{username}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: siInstagram.svg }}
                  />
                </span>
              </div>
              {name && (
                <p className="text-sm text-muted-foreground truncate overflow-hidden text-ellipsis max-w-[10rem]">
                  {name}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{followers}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{following}</span>
              <span className="text-muted-foreground">following</span>
            </div>
            <div className="flex items-center gap-1">
              <Grid3X3 className="h-4 w-4 text-muted-foreground" />
              <span>{posts}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
