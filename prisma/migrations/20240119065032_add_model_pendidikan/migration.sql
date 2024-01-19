-- CreateTable
CREATE TABLE "pendidikan" (
    "id" SERIAL NOT NULL,
    "A" TEXT NOT NULL,
    "id_keluarga" INTEGER NOT NULL,

    CONSTRAINT "pendidikan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pendidikan" ADD CONSTRAINT "pendidikan_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "anggota_keluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
