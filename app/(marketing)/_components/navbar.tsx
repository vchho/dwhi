"use client";

// import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
// import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

import Link from "next/link";
import { Login } from "@/lib/logout";
import { useSession } from "next-auth/react";

export const Navbar = ({ user }: { user: any }) => {
  const isLoggedIn = !!useSession().data;

  console.log("user", user);
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6 border-b",
        // scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoggedIn ? (
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        ) : (
          <Login />
        )}

        <Button size="sm">Get DWHI free</Button>

        <Button variant="ghost" size="sm" asChild>
          Enter DWHI
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
};
