-- AlterTable
ALTER TABLE "anggota_keluarga" ADD COLUMN     "no_kk_id" INTEGER;

-- AddForeignKey
ALTER TABLE "anggota_keluarga" ADD CONSTRAINT "anggota_keluarga_no_kk_id_fkey" FOREIGN KEY ("no_kk_id") REFERENCES "kartu_keluarga"("id") ON DELETE SET NULL ON UPDATE CASCADE;
