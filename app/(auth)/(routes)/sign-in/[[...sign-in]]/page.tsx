"use client";

import { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={(e: MouseEvent) => {
        // Apparently this fixes a next-auth issue
        // https://stackoverflow.com/questions/74180557/next-auth-next-autherrorclient-fetch-error-networkerror-when-attempting-to
        e.preventDefault();
        signIn("discord", {
          callbackUrl: `${location.origin}/pantry`,
        });
      }}
    >
      Log in
    </Button>
  );
};

export default LoginPage;
