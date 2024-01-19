-- CreateTable
CREATE TABLE "kelompok_dewasa" (
    "id" SERIAL NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "D" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "kelompok_dewasa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "kelompok_dewasa" ADD CONSTRAINT "kelompok_dewasa_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
