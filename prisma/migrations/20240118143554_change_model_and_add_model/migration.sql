/*
  Warnings:

  - You are about to drop the column `alamat` on the `anggota_keluarga` table. All the data in the column will be lost.
  - You are about to drop the column `no_kk` on the `anggota_keluarga` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "anggota_keluarga" DROP COLUMN "alamat",
DROP COLUMN "no_kk";

-- CreateTable
CREATE TABLE "kartu_keluarga" (
    "id" SERIAL NOT NULL,
    "no_kk" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,

    CONSTRAINT "kartu_keluarga_pkey" PRIMARY KEY ("id")
);
