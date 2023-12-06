import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/components/context-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DWHI? (Do We Have It)",
  description: "A pantry management app",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ContextProvider>{children}</ContextProvider>
          <Toaster />
        </body>
      </html>
    </>
  );
}
