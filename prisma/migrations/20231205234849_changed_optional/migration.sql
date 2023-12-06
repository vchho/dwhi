/*
  Warnings:

  - You are about to drop the column `averageAccuracy` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `averageCpm` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `languagesMap` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `topLanguages` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "List" ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ListItem" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "averageAccuracy",
DROP COLUMN "averageCpm",
DROP COLUMN "languagesMap",
DROP COLUMN "topLanguages";
