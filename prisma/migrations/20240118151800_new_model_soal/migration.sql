-- CreateTable
CREATE TABLE "lingkungan" (
    "id" SERIAL NOT NULL,
    "A1" TEXT NOT NULL,
    "A2" TEXT NOT NULL,
    "A3" TEXT NOT NULL,
    "A4" TEXT NOT NULL,
    "B1" TEXT NOT NULL,
    "B2" TEXT NOT NULL,
    "C1" TEXT NOT NULL,
    "C2" TEXT NOT NULL,
    "D1" TEXT NOT NULL,
    "D2" TEXT NOT NULL,
    "D3" TEXT NOT NULL,
    "id_anggota_keluarga" INTEGER NOT NULL,

    CONSTRAINT "lingkungan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lingkungan" ADD CONSTRAINT "lingkungan_id_anggota_keluarga_fkey" FOREIGN KEY ("id_anggota_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
