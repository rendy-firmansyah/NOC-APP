-- CreateTable
CREATE TABLE "Anak_sekolah_sd" (
    "id" SERIAL NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "Anak_sekolah_sd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Anak_sekolah_sd" ADD CONSTRAINT "Anak_sekolah_sd_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
