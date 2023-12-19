"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

import Link from "next/link";

export const PantryAction = ({ pantryId }: { pantryId: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          // className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          className="flex h-8 w-8 p-0"
        >
          <DotsVerticalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <Link
          href={`/pantry/${pantryId}/edit`}
          className="hover:cursor-pointer"
        >
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />

        <Link
          href={`/pantry/${pantryId}/delete`}
          className="hover:cursor-pointer"
        >
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
