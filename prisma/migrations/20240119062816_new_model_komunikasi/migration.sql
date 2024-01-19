-- CreateTable
CREATE TABLE "komunikasi" (
    "id" SERIAL NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "komunikasi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "komunikasi" ADD CONSTRAINT "komunikasi_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
