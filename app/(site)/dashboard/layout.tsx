import { BottomNavbar } from "./_components/bottom-nav";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-1 flex-col ">
      <div className="flex h-full flex-1 flex-col justify-between print:mt-0">
        <div className="px-4 py-6 print:!py-0 max-lg:mb-16 sm:px-6 md:px-8 [&>*:first-child]:max-lg:pt-16 [&>*:first-child]:scroll-m-32">
          <main className="h-full pt-16 sm:pb-10">{children}</main>
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
