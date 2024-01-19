-- CreateTable
CREATE TABLE "ekonomi" (
    "id" SERIAL NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "ekonomi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ekonomi" ADD CONSTRAINT "ekonomi_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
