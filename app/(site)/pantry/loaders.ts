"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function getPantrys() {
  const user = await getCurrentUser();

  if (!user) {
    console.log("unauthorized");
    return;
  }

  const data = await prisma.list.findMany({
    where: {
      userId: user?.id,
    },
  });

  return data;
}
