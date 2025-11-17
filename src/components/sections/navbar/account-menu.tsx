"use client";

import Link from "next/link";
import {
  GroupIcon,
  LogInIcon,
  UserCheckIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import { Logout } from "./logout";
import { checkGroupDashboardAccess, USER_ROLE } from "@/lib/access";

export function AccountMenu() {
  const session = authClient.useSession();

  if (session.isPending || session.isRefetching) {
    return <Skeleton className="w-10 h-10 rounded-md" />;
  }

  const user = session.data?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant="outline">
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {user && (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}

        {!user ? (
          <>
            <DropdownMenuItem asChild>
              <Link href="/signin" className="flex items-center">
                <LogInIcon className="mr-2 h-4 w-4" />
                <span>Sign in</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/signup" className="flex items-center">
                <UserPlusIcon className="mr-2 h-4 w-4" />
                <span>Sign up</span>
              </Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center">
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            {user?.role === USER_ROLE.admin && (
              <DropdownMenuItem asChild>
                <Link href="/admin" className="flex items-center">
                  <UserCheckIcon className="mr-2 h-4 w-4" />
                  <span>Admin dashboard</span>
                </Link>
              </DropdownMenuItem>
            )}
            {checkGroupDashboardAccess(user?.role) && (
              <DropdownMenuItem asChild>
                <Link href="/admin" className="flex items-center">
                  <GroupIcon className="mr-2 h-4 w-4" />
                  <span>Group dashboard</span>
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="text-red-600 focus:text-red-600"
            >
              <Logout />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
