"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function createPantryItem({
  pantryId,
  pantryName,
  expiresAt,
  measurement,
  quantity,
}: {
  pantryId: string;
  pantryName: string;
  expiresAt: Date | undefined; // TODO: fix this eventually
  measurement: string;
  quantity: number;
}) {
  const user = await getCurrentUser();

  if (!user) {
    console.log("unauthorized");
    return;
  }

  const data = await prisma.listItem.create({
    data: {
      listId: pantryId,
      name: pantryName,
      userId: user.id,
      expiresAt: expiresAt!, // TODO: fix this eventually
      measurement: measurement,
      quantity: quantity,
    },
  });

  return data;
}
