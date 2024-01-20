'use client'

import Link from "next/link"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function add_data_diri() {
    const router = useRouter()
    const [hubungan,setHubungan] = useState()
    const [jenis_kelamin,setJenis_Kelamin] = useState()
    const [kelompok_kesehatan,setKelompok_kesehatan] = useState()
    const [nama,setNama] = useState()
    const [nik,setNik] = useState()
    const [pekerjaan,setPekerjaan] = useState()
    const [pendidikan,setPendidikan] = useState()
    const [umur,setUmur] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const sendData = {
        id : query,
        hubungan : hubungan,
        jenis_kelamin : jenis_kelamin,
        kelompok_kesehatan : kelompok_kesehatan, 
        nama : nama,
        nik : nik,
        pekerjaan : pekerjaan,
        pendidikan : pendidikan,
        umur : umur,
      }   

      async function add_data_diri(){
        const send = await axios.put("/api/survei/datadiri",sendData)
        console.log(send)
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
  
                router.push(`/survei/data_pengunjung?id=${query}`)
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
        <div className="relative my-[120px] min-h-screen grid place-items-center">
        <ToastContainer />
        <div className="w-11/12 px-4 py-10 bg-white shadow-xl border-2 border-bg-btn-orangeHover sm:w-8/12 md:w-8/2 lg:w-8/12">
            <h1 className="text-xl font-semibold flex justify-center">DATA DIRI ANGGOTA</h1>
            <h1 className="font-semibold mt-3">NOC Survey</h1>
            <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
            <form className="mt-6" onSubmit={(e)=>{e.preventDefault(); add_data_diri()}}>
            
            <label for="nama" className="block mt-5 text-sm font-semibold text-black uppercase">Nama Lengkap</label>
            <input onChange={(e)=> setNama(e.target.value)} id="nama" type="nama" name="nama" placeholder="masukan nama lengkap" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            
            <div className="grid grid-cols-12 mt-5">
                <span className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                <label for="NIK" className="block text-sm font-semibold text-black uppercase">NIK</label>
                <input onChange={(e)=> setNik(e.target.value)} id="NIK" type="text" name="NIK" placeholder="35xxxxxxxxxxxxxx" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 ms-0 mt-5 xl:ms-2 lg:ms-2 md:ms-2 xl:mt-0 lg:mt-0 md:mt-0">
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
            <div className="grid grid-cols-12 mt-5">
                <span className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                <label for="umur" className="block text-sm font-semibold text-black uppercase">umur</label>
                <input onChange={(e)=> setUmur(e.target.value)} id="umur" type="text" name="umur" placeholder="25 tahun" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 ms-0 xl:ms-2 lg:ms-2 md:ms-2 mt-5 xl:mt-0 lg:mt-0 md:mt-0">
                    <label for="L/P" className="block text-sm font-semibold text-black uppercase mb-3">L/P</label>
                    <select onChange={(e)=> setJenis_Kelamin(e.target.value)} id="L/P" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Pilih L/P</option>
                        <option value="laki-laki">Laki-laki</option>
                        <option value="istri">Perempuan</option>
                    </select>
                </span>
            </div>

            <div className="grid grid-cols-12 mt-5">
                <span className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                <label for="Pendidikan" className="block text-sm font-semibold text-black uppercase">Pendidikan</label>
                <input onChange={(e)=> setPendidikan(e.target.value)} id="Pendidikan" type="text" name="Pendidikan" placeholder="SD/SMP/SMA/D3/S1/Tidak sekolah" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 ms-0 xl:ms-2 lg:ms-2 md:ms-2 mt-5 xl:mt-0 lg:mt-0 md:mt-0">
                    <label for="pekerjaan" className="block text-sm font-semibold text-black uppercase ">Pekerjaan</label>
                    <input onChange={(e)=> setPekerjaan(e.target.value)} id="Pekerjaan" type="text" name="Pekerjaan" placeholder="Pns/Wiraswasta/Belum Bekerja" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>
            </div>

            <div className="flex justify-between gap-3 mt-5">
                <span className="w-full">
                    <label for="sk" className="block text-sm font-semibold text-black uppercase mb-3">Status Kesehatan Kelompok</label>
                    <select onChange={(e)=> setKelompok_kesehatan(e.target.value)} id="sk" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Pilih Status Kesehatan Kelompok</option>
                        <option value="Ibu_hamil">Ibu Hamil</option>
                        <option value="Ibu_menyusui">Ibu Menyusui</option>
                        <option value="Balita">Balita</option>
                        <option value="Anak_sd">Anakk SD (5-12 tahun)</option>
                        <option value="Remaja">Remaja (12-18 tahun)</option>
                        <option value="Dewasa">Dewasa (19-54 Tahun)</option>
                        <option value="Lansia">Usia Lanjut (lansia)</option>
                    </select>
                </span>
            </div>

                <button type="submit" className="w-full py-3 mt-6 font-extrabold tracking-widest text-black uppercase bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] shadow-lg focus:outline-none">

                    Selanjutnya
                </button>
            </form>
        </div>
        </div>
    )
}