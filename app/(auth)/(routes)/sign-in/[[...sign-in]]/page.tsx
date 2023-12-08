"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() =>
        signIn("discord", {
          callbackUrl: `${location.origin}/pantry`,
        })
      }
    >
      Log in
    </Button>
  );
};

export default LoginPage;
