/*
  Warnings:

  - A unique constraint covering the columns `[no_kk]` on the table `kartu_keluarga` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "kartu_keluarga_no_kk_key" ON "kartu_keluarga"("no_kk");
