import { Navbar } from "./_components/navbar";

import { getCurrentUser } from "@/lib/session";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  const user = getCurrentUser();

  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar user={user} />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
