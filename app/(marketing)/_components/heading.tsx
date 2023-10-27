"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your all in one pantry management application. Welcome to{" "}
        <span className="underline">DWHI</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        DWHI helps you manage what you have stowed away <br />
        in your fridge or pantry.
      </h3>
      {isSignedIn ? (
        <Link href="/dashboard">
          <Button>
            Use DWHI <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      ) : (
        <Button>
          Try DWHI <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
    </div>
  );
};
