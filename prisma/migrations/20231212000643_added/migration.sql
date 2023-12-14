/*
  Warnings:

  - Added the required column `expiresAt` to the `ListItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `measurement` to the `ListItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ListItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListItem" ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "measurement" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
