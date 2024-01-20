/*
  Warnings:

  - Changed the type of `alamat` on the `kartu_keluarga` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "kartu_keluarga" DROP COLUMN "alamat",
ADD COLUMN     "alamat" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "kartu_keluarga" ADD CONSTRAINT "kartu_keluarga_alamat_fkey" FOREIGN KEY ("alamat") REFERENCES "wilayah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
