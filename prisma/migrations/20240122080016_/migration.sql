/*
  Warnings:

  - The `layak` column on the `wilayah` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "wilayah" DROP COLUMN "layak",
ADD COLUMN     "layak" BOOLEAN;
