/*
  Warnings:

  - Added the required column `status` to the `anggota_keluarga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "anggota_keluarga" ADD COLUMN     "status" BOOLEAN NOT NULL;
