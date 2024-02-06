"use client";
import { FC } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { Icons } from "./icons";
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

const UserAccountDropdown: FC<UserAccountDropdownProps> = ({ session }) => {
  const { user } = session;

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

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/profile">
            <div className="flex items-center gap-x-2">
              {<Icons.user className="h-4 w-4" />}
              {"Profile"}
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/about">
            <div className="flex items-center gap-x-2">
              {<Icons.info className="h-4 w-4" />}
              {"About"}
            </div>
          </Link>
        </DropdownMenuItem>

        {user.role === "ADMIN" && (
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/admin">
              <div className="flex items-center gap-x-2">
                {<Icons.admin className="h-4 w-4" />}
                {"Admin"}
              </div>
            </Link>
          </DropdownMenuItem>
        )}

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
