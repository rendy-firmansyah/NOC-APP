/*
  Warnings:

  - You are about to drop the column `G` on the `kelompok_balita` table. All the data in the column will be lost.
  - Added the required column `G1` to the `kelompok_balita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `G2` to the `kelompok_balita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `G3` to the `kelompok_balita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `G4` to the `kelompok_balita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "kelompok_balita" DROP COLUMN "G",
ADD COLUMN     "G1" TEXT NOT NULL,
ADD COLUMN     "G2" TEXT NOT NULL,
ADD COLUMN     "G3" TEXT NOT NULL,
ADD COLUMN     "G4" TEXT NOT NULL;
