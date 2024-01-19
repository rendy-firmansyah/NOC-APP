-- CreateTable
CREATE TABLE "anggota_keluarga" (
    "id" SERIAL NOT NULL,
    "no_kk" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "hubungan" TEXT NOT NULL,
    "umur" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "pendidikan" TEXT NOT NULL,
    "pekerjaan" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "kelompok_kesehatan" TEXT NOT NULL,

    CONSTRAINT "anggota_keluarga_pkey" PRIMARY KEY ("id")
);
