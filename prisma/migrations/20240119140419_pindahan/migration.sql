-- CreateTable
CREATE TABLE "kelompok_ibu_menyusui" (
    "id" SERIAL NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "D" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "kelompok_ibu_menyusui_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "kelompok_ibu_menyusui" ADD CONSTRAINT "kelompok_ibu_menyusui_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
