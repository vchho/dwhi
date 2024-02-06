"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";

const SidebarNav = () => {
  const pathname = usePathname();

  const adminSidebarNavItems: any[] = [
    {
      id: 145645,
      label: "Users",
      Icon: Icons.user,
      href: "/admin/users",
    },
    {
      id: 2767676,
      label: "Pantries",
      Icon: Icons.anime,
      href: "/admin/pantries",
    },
    {
      id: 3345377,
      label: "Admins",
      Icon: Icons.crown,
      href: "/admin",
    },
  ];

  const data = adminSidebarNavItems;

  return (
    <div className="flex w-full flex-col gap-2">
      {data.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="focus:outline-none group"
        >
          <span
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground group-focus:bg-muted group-focus:text-foreground group-focus:font-medium transition-all",
              pathname === item.href
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground",
            )}
          >
            <item.Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            <span>{item.label}</span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarNav;
