import Link from "next/link";
import { ExternalLink, Users, Grid3X3 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { T_InstagramProfile } from "@/lib/types";
import { SITE_URL } from "@/lib/constatnts";

export function InstagramProfileCard({
  followers,
  following,
  name,
  posts,
  profilePic,
  username,
}: T_InstagramProfile) {
  return (
    <Link
      href={`https://instagram.com/${username}?utm_source=${SITE_URL}&utm_medium=referral&utm_campaign=profile_click`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="h-full w-full transition-all hover:bg-muted max-w-md overflow-hidden">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16 border">
              {profilePic ? (
                <AvatarImage
                  src={`/api/insta-profile-proxy?url=${encodeURIComponent(
                    profilePic
                  )}`}
                  alt={name || username}
                />
              ) : (
                <AvatarFallback>
                  {name?.substring(0, 2)?.toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="font-medium">@{username}</span>
              </div>
              {name && (
                <p className="text-sm text-muted-foreground text-wrap">
                  {name}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between text-sm">
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
