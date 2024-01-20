/*
  Warnings:

  - Added the required column `G5` to the `kelompok_balita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "kelompok_balita" ADD COLUMN     "G5" TEXT NOT NULL;
