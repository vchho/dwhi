import * as React from "react";

interface PantryLayoutProps {
  children: React.ReactNode;
}

export default async function PantryLayout({ children }: PantryLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 items-start lg:grid lg:gap-10 pr-3 pl-3">
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
