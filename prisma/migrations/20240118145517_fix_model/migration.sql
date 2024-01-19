/*
  Warnings:

  - Made the column `no_kk_id` on table `anggota_keluarga` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "anggota_keluarga" DROP CONSTRAINT "anggota_keluarga_no_kk_id_fkey";

-- AlterTable
ALTER TABLE "anggota_keluarga" ALTER COLUMN "no_kk_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "anggota_keluarga" ADD CONSTRAINT "anggota_keluarga_no_kk_id_fkey" FOREIGN KEY ("no_kk_id") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
