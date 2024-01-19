'use client'

import Link from "next/link"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    
export default function data_diri() {
    const router = useRouter()
    const pathname = usePathname()
    const [alamat,setAlamat] = useState()
    const [hubungan,setHubungan] = useState()
    const [jenis_kelamin,setJenis_Kelamin] = useState()
    const [kelompok_kesehatan,setKelompok_kesehatan] = useState()
    const [nama,setNama] = useState()
    const [nik,setNik] = useState()
    const [no_kk,setNo_kk] = useState()
    const [pekerjaan,setPekerjaan] = useState()
    const [pendidikan,setPendidikan] = useState()
    const [umur,setUmur] = useState()
  
    const sendData = {
      alamat : alamat,
      hubungan : hubungan,
      jenis_kelamin : jenis_kelamin,
      kelompok_kesehatan : kelompok_kesehatan, 
      nama : nama,
      nik : nik,
      no_kk : no_kk,
      pekerjaan : pekerjaan,
      pendidikan : pendidikan,
      umur : umur,
    }   
  
    async function data_diri(){
      const send = await axios.post("/api/survei/datadiri",sendData)
      console.log(send.data.id_kk)
      if (send.data.status === "success"){
          toast('✔️ berhasil upload data', {
              position: "top-right",
              autoClose: 0.1,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress:1,
              theme: "light",
              });

              router.push(`/survei/data_pengunjung?id=${send.data.id_kk}`)
      } 
      else{
        toast('❌ gagal upload data', {
            position: "top-right",
            autoClose: 0.1,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress:1,
            theme: "light",
            });
      }
    }

    return(
        <div className="relative mt-32 mb-20 grid min-h-screen place-items-center">
         <ToastContainer />
        <div className="w-11/12 p-12 bg-slate-400 sm:w-8/12 md:w-1/2 lg:w-5/12">
            <h1 className="text-xl font-semibold flex justify-center">DATA DIRI</h1>
            <h1 className="font-semibold mt-3">NOC Survey</h1>
            <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
            <form className="mt-6" onSubmit={(e)=>{e.preventDefault(); data_diri()}}>
            <label for="no_kk" className="block mt-2 text-sm font-semibold text-black uppercase">No KK</label>
            <input onChange={(e)=> setNo_kk(e.target.value)} id="no_kk" type="no_kk" name="no_kk" placeholder="35xxxxxxxxxxxxxx" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            
            <label for="nama" className="block mt-5 text-sm font-semibold text-black uppercase">Nama Lengkap</label>
            <input onChange={(e)=> setNama(e.target.value)} id="nama" type="nama" name="nama" placeholder="masukan nama lengkap" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            
            <div className="flex justify-between gap-3 mt-5">
                <span className="w-1/2">
                    <label for="NIK" className="block text-sm font-semibold text-black uppercase">NIK</label>
                    <input onChange={(e)=> setNik(e.target.value)} id="NIK" type="text" name="NIK" placeholder="35xxxxxxxxxxxxxx" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="w-1/2">
                    <label for="hubungan_kk" className="block text-sm font-semibold text-black uppercase mb-3">Hubungan Dengan KK</label>
                    <select onChange={(e)=> setHubungan(e.target.value)} id="hubungan_kk" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
                <input onChange={(e)=> setUmur(e.target.value)} id="umur" type="text" name="umur" placeholder="25 tahun" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="w-1/2">
                    <label for="L/P" className="block text-sm font-semibold text-black uppercase mb-3">L/P</label>
                    <select onChange={(e)=> setJenis_Kelamin(e.target.value)} id="L/P" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Pilih L/P</option>
                        <option value="laki-laki">Laki-laki</option>
                        <option value="istri">Perempuan</option>
                    </select>
                </span>
            </div>

            <div className="flex justify-between gap-3 mt-5">
                <span className="w-1/2">
                <label for="Pendidikan" className="block text-sm font-semibold text-black uppercase">Pendidikan</label>
                <input onChange={(e)=> setPendidikan(e.target.value)} id="Pendidikan" type="text" name="Pendidikan" placeholder="SD/SMP/SMA/D3/S1/Tidak sekolah" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="w-1/2">
                    <label for="pekerjaan" className="block text-sm font-semibold text-black uppercase ">Pekerjaan</label>
                    <input onChange={(e)=> setPekerjaan(e.target.value)} id="Pekerjaan" type="text" name="Pekerjaan" placeholder="Pns/Wiraswasta/Belum Bekerja" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>
            </div>

            <div className="flex justify-between gap-3 mt-5">
                <span className="w-1/2">
                <label for="alamat" className="block text-sm font-semibold text-black uppercase mb-3">Alamat</label>
                <select onChange={(e)=> setAlamat(e.target.value)} id="alamat" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option selected>Alamat</option>
                    <option value="ibu_hamil">desa winongan</option>
                </select>
                </span>

                <span className="w-1/2">
                    <label for="sk" className="block text-sm font-semibold text-black uppercase mb-3">Status Kesehatan Kelompok</label>
                    <select onChange={(e)=> setKelompok_kesehatan(e.target.value)} id="sk" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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

                <button type="submit" className="w-full py-3 mt-6 font-extrabold tracking-widest text-black uppercase bg-white shadow-lg focus:outline-none">
                    Selanjutnya
                </button>

            </form>
        </div>
        </div>
    )
}