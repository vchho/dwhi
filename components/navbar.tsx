import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { getSession } from "@/lib/session";
import UserAccountDropdown from "./user-dropdown";
import { ThemeToggle } from "./theme-toggle";

interface NavbarType {
  id: number;
  label: string;
  href: string;
}

export const Navbar = async () => {
  const session = await getSession();

  const navItems: NavbarType[] = [
    {
      id: 1,
      label: "Pantry",
      href: "/pantry",
    },
  ];

  return (
    <div className="sticky top-0 z-40 w-full bg-background flex justify-between lg:space-around items-center py-3 border-b px-8 lg:px-16">
      <MobileNav mainNavItems={navItems} session={session} />
      <div className="w-full lg:flex hidden gap-x-8 items-center">
        <div className="relative z-20 flex items-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-md tracking-tighter",
            )}
          >
            DWHI
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          {/* {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-sm font-medium",
              )}
            >
              {item.label}
            </Link>
          ))} */}
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-sm font-medium",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-x-4 items-center">
        {/* <Searchbar /> */}

        <ThemeToggle />

        {session ? (
          <UserAccountDropdown session={session} />
        ) : (
          // <p>User Dropdown here</p>
          <Link href="/auth/sign-in" className=" tracking-tighter">
            <Button className="mx-2 w-full" size="sm">
              Sign In
              <div className="sr-only">Sign In</div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
