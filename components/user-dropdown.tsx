"use client";
import { FC } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { Icon, Icons } from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./user-avatar";

interface UserAccountDropdownProps {
  session: Session;
}

export type dropdownItemType = {
  id: number;
  label: string;
  Icon: Icon;
  href: string;
};

const dropdownItem: dropdownItemType[] = [
  {
    id: 3,
    label: "Profile",
    Icon: Icons.user,
    href: "/profile",
  },
  {
    id: 1,
    label: "About",
    Icon: Icons.info,
    href: "/about",
  },
];

const UserAccountDropdown: FC<UserAccountDropdownProps> = ({ session }) => {
  const { user } = session;
  const AdminItem = dropdownItem.find((item) => item.href === "/admin/users");

  if (user.role === "ADMIN" && !AdminItem) {
    dropdownItem.push({
      id: 2,
      label: "Admin Panel",
      Icon: Icons.admin,
      href: "/admin/users",
    });
  } else if (user.role !== "ADMIN" && AdminItem) {
    dropdownItem.splice(1, 1);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <UserAvatar className="h-8 w-8" user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2 text-sm">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        {dropdownItem.map((item) => (
          <DropdownMenuItem key={item.id} asChild className="cursor-pointer">
            <Link href={item.href}>
              <div className="flex items-center gap-x-2">
                <item.Icon className="h-4 w-4" />
                {item.label}
              </div>
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}`,
            });
          }}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-x-2">
            <Icons.logOut className="h-4 w-4" />
            Log out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountDropdown;
