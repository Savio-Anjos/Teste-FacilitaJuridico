/*
  Warnings:

  - You are about to drop the column `clientCoordinate` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `companyCoordinate` on the `customers` table. All the data in the column will be lost.
  - Added the required column `clientLatitude` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientLongitude` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyLatitude` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyLongitude` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "clientCoordinate",
DROP COLUMN "companyCoordinate",
ADD COLUMN     "clientLatitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "clientLongitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "companyLatitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "companyLongitude" DECIMAL(65,30) NOT NULL;
