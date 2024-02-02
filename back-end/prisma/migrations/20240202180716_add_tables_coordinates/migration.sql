/*
  Warnings:

  - Added the required column `clientCoordinate` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyCoordinate` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distance` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "clientCoordinate" TEXT NOT NULL,
ADD COLUMN     "companyCoordinate" TEXT NOT NULL,
ADD COLUMN     "distance" INTEGER NOT NULL;
