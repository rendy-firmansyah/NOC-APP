-- CreateTable
CREATE TABLE "kelompok_balita" (
    "id" SERIAL NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "D" TEXT NOT NULL,
    "E" TEXT NOT NULL,
    "F" TEXT NOT NULL,
    "G" TEXT NOT NULL,
    "H" TEXT NOT NULL,
    "I" TEXT NOT NULL,
    "J" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "kelompok_balita_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "kelompok_balita" ADD CONSTRAINT "kelompok_balita_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
