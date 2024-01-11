"use client";

import { useTransition, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Social } from "@/components/auth/socials";
import { signIn } from "next-auth/react";

const ErrorDisplay = ({ error }: { error: string | null }) => {
  console.log(error);
  switch (error) {
    case "CredentialsSignin":
      return (
        <p className="bg-destructive/15 p-3 rounded-md gap-x-2 text-sm text-destructive text-center">
          Your credentials are incorrect or this account doesn&apos;t exist.
          Please try again
        </p>
      );
    case "OAuthSignin":
    case "OAuthCallback":
    case "OAuthCreateAccount":
    case "OAuthAccountNotLinked":
      return (
        <p className="bg-destructive/15 p-3 rounded-md gap-x-2 text-sm text-destructive text-center">
          {" "}
          Unable to sign you in with this account. Please try again later
        </p>
      );
    case "Default":
      return (
        // <Alert icon={<IconAlertTriangle size="1rem" />} color="red">
        // </Alert>
        <p className="bg-destructive/15 p-3 rounded-md gap-x-2 text-sm text-destructive text-center">
          An unexpected error occurred during the log in. Please try again
        </p>
      );
  }

  return null;
};

const LoginPage = () => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const urlError = searchParams.get("error");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    // startTransition(async () => {
    //   // login(values).then((data) => {
    //   //   setError(data?.error);
    //   //   // TODO: Add when we add 2FA
    //   //   // setSuccess(data?.success);
    //   // });

    // });

    signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: `${location.origin}/pantry`,
    });
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error ? (
                <p className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
                  {error}
                </p>
              ) : null}
              {success ? (
                <p className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
                  {success}
                </p>
              ) : null}

              <Button disabled={isPending} type="submit" className="w-full">
                Login
              </Button>

              <Link
                className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-8 rounded-md px-3 text-xs font-normal w-full"
                href={`/auth/sign-up`}
              >
                Don&apos;t have an account?
              </Link>
            </form>
          </Form>

          <Social />

          <ErrorDisplay error={urlError} />

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
