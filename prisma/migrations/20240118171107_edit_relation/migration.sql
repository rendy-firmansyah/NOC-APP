/*
  Warnings:

  - Added the required column `id_keluarga` to the `pelayanan_kesehatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pelayanan_kesehatan" ADD COLUMN     "id_keluarga" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "pelayanan_kesehatan" ADD CONSTRAINT "pelayanan_kesehatan_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
