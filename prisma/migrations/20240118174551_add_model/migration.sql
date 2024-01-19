-- CreateTable
CREATE TABLE "transportasi_keamanan" (
    "id" SERIAL NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "transportasi_keamanan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transportasi_keamanan" ADD CONSTRAINT "transportasi_keamanan_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
