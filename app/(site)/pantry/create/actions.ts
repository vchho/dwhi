"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function createPantryAction({
  pantryName,
}: {
  pantryName: string;
}) {
  const user = await getCurrentUser();

  if (!user) {
    console.log("unauthorized");
  }

  const data = await prisma.list.create({
    data: {
      name: pantryName,
      userId: user?.id,
    },
  });

  console.log("data", data);
}
