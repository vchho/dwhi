"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function createPantryAction({
  pantryName,
  pantryDescription,
}: {
  pantryName: string;
  pantryDescription: string;
}) {
  const user = await getCurrentUser();

  if (!user) {
    console.log("unauthorized");
  }

  const data = await prisma.list.create({
    data: {
      name: pantryName,
      description: pantryDescription,
      userId: user?.id,
    },
  });

  return data;
}
