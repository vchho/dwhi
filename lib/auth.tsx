"use client";

import { Button } from "@/components/ui/button";
import { signOut, signIn } from "next-auth/react";

export const Logout = () => {
  return (
    <>
      <Button
        size="sm"
        onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}
      >
        Logout
      </Button>
    </>
  );
};

export const Login = () => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() =>
        signIn("discord", {
          callbackUrl: `${location.origin}/dashboard`,
        })
      }
    >
      Log in
    </Button>
  );
};
