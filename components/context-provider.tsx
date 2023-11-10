"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./theme-provider";

export function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="dwhi-theme"
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
