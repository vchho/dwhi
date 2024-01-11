"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaDiscord } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export const Social = () => {
  const onClick = (provider: "google" | "github" | "discord") => {
    signIn(provider, {
      callbackUrl: `${location.origin}/pantry`,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("discord")}
      >
        <FaDiscord className="h-5 w-5" />
      </Button>
    </div>
  );
};
