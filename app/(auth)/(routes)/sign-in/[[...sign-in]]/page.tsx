"use client";

import { MouseEvent } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LoginPage = () => {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-900" />

        <div className="relative z-20 flex items-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-lg font-medium",
            )}
          >
            DWHI
          </Link>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to DWHI
            </h1>

            <p className="text-sm text-muted-foreground">
              Choose your preferred sign in method
            </p>
          </div>

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
            Log in via Discord
          </Button>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
