"use client";

import { useState } from "react";
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

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

import { deletePantry } from "@/app/(site)/pantry/[id]/actions";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

export const PantryAction = ({ pantryId }: { pantryId: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeletePantry = async () => {
    setIsLoading(true);
    deletePantry({ pantryId: pantryId })
      .then(() => {
        setIsLoading(false);
        setShowDeleteDialog(false);
        toast({
          title: "Success!",
          description: "Your pantry was deleted.",
        });
        // TODO: This causes a slight flash during refresh. Not the biggest fan
        router.refresh();
      })
      .catch((error) => {
        setIsLoading(false);
        setShowDeleteDialog(false);
        toast({
          title: "Error!",
          description: "There was an error in updating your pantry!",
        });
        console.log("Error from pantry-action", error);
      });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex h-8 w-8 p-0">
            <DotsVerticalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href={`/pantry/${pantryId}/`} className="hover:cursor-pointer">
            <DropdownMenuItem>View</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link
            href={`/pantry/${pantryId}/edit`}
            className="hover:cursor-pointer"
          >
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setShowDeleteDialog(true)}
            className="text-red-600"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This pantry will no longer be
              accessible by you.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={() => {
                handleDeletePantry();
              }}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
