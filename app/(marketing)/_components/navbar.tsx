"use client";

import { SignInButton } from "@clerk/clerk-react";

// import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
// import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

export const Navbar = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth();
  // const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6 border-b",
        // scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {/* {isLoading && (
          <Spinner />
        )} */}
        {/* {!isAuthenticated && !isLoading && ( */}
        <>
          <SignInButton>
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm">Get DWHI free</Button>
          </SignInButton>
        </>
        {/* )} */}
        {/* {isAuthenticated && !isLoading && ( */}
        <>
          <Button variant="ghost" size="sm" asChild>
            Enter DWHI
          </Button>
        </>
        {/* )} */}
        <ModeToggle />
      </div>
    </div>
  );
};
