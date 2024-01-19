-- DropForeignKey
ALTER TABLE "ekonomi" DROP CONSTRAINT "ekonomi_id_keluarga_fkey";

-- DropForeignKey
ALTER TABLE "komunikasi" DROP CONSTRAINT "komunikasi_id_keluarga_fkey";

-- DropForeignKey
ALTER TABLE "lingkungan" DROP CONSTRAINT "lingkungan_id_anggota_keluarga_fkey";

-- DropForeignKey
ALTER TABLE "pelayanan_kesehatan" DROP CONSTRAINT "pelayanan_kesehatan_id_keluarga_fkey";

-- DropForeignKey
ALTER TABLE "pendidikan" DROP CONSTRAINT "pendidikan_id_keluarga_fkey";

-- DropForeignKey
ALTER TABLE "politik_pemerintahan" DROP CONSTRAINT "politik_pemerintahan_id_keluarga_fkey";

-- DropForeignKey
ALTER TABLE "rekreasi" DROP CONSTRAINT "rekreasi_id_keluarga_fkey";

-- DropForeignKey
ALTER TABLE "transportasi_keamanan" DROP CONSTRAINT "transportasi_keamanan_id_keluarga_fkey";

-- AddForeignKey
ALTER TABLE "lingkungan" ADD CONSTRAINT "lingkungan_id_anggota_keluarga_fkey" FOREIGN KEY ("id_anggota_keluarga") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pelayanan_kesehatan" ADD CONSTRAINT "pelayanan_kesehatan_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ekonomi" ADD CONSTRAINT "ekonomi_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportasi_keamanan" ADD CONSTRAINT "transportasi_keamanan_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "politik_pemerintahan" ADD CONSTRAINT "politik_pemerintahan_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "komunikasi" ADD CONSTRAINT "komunikasi_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pendidikan" ADD CONSTRAINT "pendidikan_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rekreasi" ADD CONSTRAINT "rekreasi_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "kartu_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
