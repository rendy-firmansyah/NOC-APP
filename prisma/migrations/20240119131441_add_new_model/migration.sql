-- CreateTable
CREATE TABLE "kelompok_bumil" (
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
    "K" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "kelompok_bumil_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "kelompok_bumil" ADD CONSTRAINT "kelompok_bumil_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
