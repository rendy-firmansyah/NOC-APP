/*
  Warnings:

  - Added the required column `id_keluarga` to the `politik_pemerintahan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "politik_pemerintahan" ADD COLUMN     "id_keluarga" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "politik_pemerintahan" ADD CONSTRAINT "politik_pemerintahan_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
