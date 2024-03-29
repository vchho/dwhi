import * as React from "react";

import { cn } from "@/lib/utils";

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  layout?: "default" | "dashboard" | "auth" | "centered" | "markdown";
}

export function Shell({
  as: Comp = "section",
  children,
  layout = "default",
  className,
  ...props
}: ShellProps) {
  return (
    <Comp
      className={cn(
        "grid items-center gap-8 pb-8 pt-6 md:py-8",
        layout === "default" && "container",
        layout === "auth" && "container max-w-lg",
        layout === "centered" && "mt-20 justify-center",
        layout === "markdown" && "container max-w-3xl py-8 md:py-10 lg:py-10",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
