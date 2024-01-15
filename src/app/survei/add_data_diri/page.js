import Link from "next/link"


export default function data_diri() {
    return(
        <div className="relative mt-32 mb-20 grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-slate-400 sm:w-8/12 md:w-1/2 lg:w-5/12">
            <h1 className="text-xl font-semibold flex justify-center">DATA DIRI ANGGOTA</h1>
            <h1 className="font-semibold mt-3">NOC Survey</h1>
            <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
            <form className="mt-6">
            
            <label for="nama" className="block mt-5 text-sm font-semibold text-black uppercase">Nama Lengkap</label>
            <input id="nama" type="nama" name="nama" placeholder="masukan nama lengkap" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            
            <div className="flex justify-between gap-3 mt-5">
                <span className="w-1/2">
                <label for="NIK" className="block text-sm font-semibold text-black uppercase">NIK</label>
                <input id="NIK" type="text" name="NIK" placeholder="35xxxxxxxxxxxxxx" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="w-1/2">
                    <label for="hubungan_kk" className="block text-sm font-semibold text-black uppercase mb-3">Hubungan Dengan KK</label>
                    <select id="hubungan_kk" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Pilih hubungan_kk</option>
                        <option value="kepala_keluarga">Kepala keluarga</option>
                        <option value="istri">Istri</option>
                        <option value="anak">anak</option>
                        <option value="lainnya">lainnya</option>
                    </select>
                </span>
            </div>
            <div className="flex justify-between gap-3 mt-5">
                <span className="w-1/2">
                <label for="umur" className="block text-sm font-semibold text-black uppercase">umur</label>
                <input id="umur" type="text" name="umur" placeholder="25 tahun" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="w-1/2">
                    <label for="L/P" className="block text-sm font-semibold text-black uppercase mb-3">L/P</label>
                    <select id="L/P" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Pilih L/P</option>
                        <option value="kepala_keluarga">Laki-laki</option>
                        <option value="istri">Perempuan</option>
                    </select>
                </span>
            </div>

            <div className="flex justify-between gap-3 mt-5">
                <span className="w-1/2">
                <label for="Pendidikan" className="block text-sm font-semibold text-black uppercase">Pendidikan</label>
                <input id="Pendidikan" type="text" name="Pendidikan" placeholder="SD/SMP/SMA/D3/S1/Tidak sekolah" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="w-1/2">
                    <label for="pekerjaan" className="block text-sm font-semibold text-black uppercase ">Pekerjaan</label>
                    <input id="Pekerjaan" type="text" name="Pekerjaan" placeholder="Pns/Wiraswasta/Belum Bekerja" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>
            </div>

            <div className="flex justify-between gap-3 mt-5">
                <span className="w-1/2">
                <label for="alamat" className="block text-sm font-semibold text-black uppercase">Alamat</label>
                <input id="alamat" type="text" name="alamat" placeholder="35xxxxxxxxxxxxxx" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="w-1/2">
                    <label for="sk" className="block text-sm font-semibold text-black uppercase mb-3">Status Kesehatan Kelompok</label>
                    <select id="sk" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Pilih Status Kesehatan Kelompok</option>
                        <option value="ibu_hamil">Ibu Hamil</option>
                        <option value="ibu_menyusui">Ibu Menyusui</option>
                        <option value="balita">Balita</option>
                        <option value="anak_sd">Anakk SD (5-12 tahun)</option>
                        <option value="remaja">Remaja (12-18 tahun)</option>
                        <option value="Dewasa">Dewasa (19-54 Tahun)</option>
                        <option value="lansia">Usia Lanjut (lansia)</option>
                    </select>
                </span>
            </div>
            <Link href="/survei/data_pengunjung">
                <button type="submit" className="w-full py-3 mt-6 font-extrabold tracking-widest text-black uppercase bg-white shadow-lg focus:outline-none">
                    Selanjutnya
                </button>
            </Link>
            </form>
        </div>
        </div>
    )
}