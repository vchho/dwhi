"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function getPantry({
  pantryId,
  needListItems,
}: {
  pantryId: string;
  needListItems: boolean;
}) {
  const user = await getCurrentUser();

  if (!user) {
    console.log("unauthorized");
    return;
  }

  const data = await prisma.list.findFirst({
    where: {
      id: pantryId,
    },
    select: {
      name: true,
      description: true,
      listItems: needListItems,
    },
  });

  return data;
}

export async function getPantryItems({ pantryId }: { pantryId: string }) {
  const user = await getCurrentUser();

  if (!user) {
    console.log("unauthorized");
    return;
  }

  const data = await prisma.listItem.findMany({
    where: {
      userId: user.id,
      listId: pantryId,
    },
  });

  return data;
}

export async function updatePantry({
  pantryId,
  pantryName,
  pantryDescription,
}: {
  pantryId: string;
  pantryName: string;
  pantryDescription: string;
}) {
  const user = await getCurrentUser();

  if (!user) {
    console.log("unauthorized");
    return;
  }

  const data = await prisma.list.update({
    data: {
      name: pantryName,
      description: pantryDescription,
    },
    where: {
      id: pantryId,
    },
  });

  return data;
}

export async function deletePantry({ pantryId }: { pantryId: string }) {
  const user = await getCurrentUser();

  if (!user) {
    console.log("unauthorized");
    return;
  }

  const data = await prisma.list.delete({
    where: {
      id: pantryId,
    },
  });

  return data;
}
