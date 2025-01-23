"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CityCombobox } from "./city-combobox";
import { AccountMenu } from "./account-menu";
import { NotificationPopover } from "./notifications-popover";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be replaced with your actual auth state

  return (
    <nav className="border-b sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4">
                <div className="px-4 py-2">
                  <CityCombobox />
                </div>
                {isLoggedIn ? (
                  <>
                    <Link href="/profile" className="px-4 py-2 hover:bg-accent">
                      Profile
                    </Link>
                    <Link href="/trips" className="px-4 py-2 hover:bg-accent">
                      My Trips
                    </Link>
                    <Link
                      href="/settings"
                      className="px-4 py-2 hover:bg-accent"
                    >
                      Settings
                    </Link>
                    <Button
                      className="mx-4"
                      variant="destructive"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="mx-4"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Log in
                    </Button>
                    <Button className="mx-4">Sign up</Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">GroupVoyage</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-center md:px-4">
          <CityCombobox />
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0">
                  <NotificationPopover />
                </PopoverContent>
              </Popover>
              <AccountMenu />
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className="hidden md:inline-flex"
                onClick={() => setIsLoggedIn(true)}
              >
                Log in
              </Button>
              <Button className="hidden md:inline-flex">Sign up</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
