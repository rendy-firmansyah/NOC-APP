"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function SurveiKesehatanSosial () {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const [d,setD] = useState()
    const [e,setE] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const sendData = {
        id : query,
        a : a,
        b : b,
        c : c,
        d : d,
        e : e,
      }   

      function Sebelumnya(){
        router.push(`/survei/umum/fisik_sosial?id=${query}`)
    }

      async function kesehatan_sosial(){
        const send = await axios.post("/api/survei/PelayananKesehatan",sendData)
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

                router.push(`/survei/umum/ekonomi?id=${query}`)
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

    return (
        <section className="mt-[150px] mb-[70px]">
            <ToastContainer />
            <div className="flex justify-center">
                <div className="card lg:w-[900px] md:w-[700px] w-[350px] px-[30px] py-[40px] bg-white shadow-xl border-2 border-bg-btn-orangeHover rounded-lg">
                    {/* <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] w-[355px]"> */}
                        <h1 className="text-center text-[28px] font-bold">SURVEI UMUM</h1>
                        <h1 className="text-[18px] font-medium mt-3">II. PELAYANAN KESEHATAN DAN SOSIAL</h1>
                        <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                        <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                        <div className="pertanyaan">
                            <div className="mb-3">
                                <label>A. Fasilitas kesehatan yang ada di masyarakat (bisa multipel pilihannya):</label>
                                <div className="ms-5">
                                    <input type="radio" id="Posyandu/Posbindu" value="Posyandu/Posbindu" name="fasilitas_kesehatan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Posyandu/Posbindu">Posyandu/Posbindu</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="DokterPraktik" value="DokterPraktik" name="fasilitas_kesehatan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="DokterPraktik">Dokter Praktik</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Puskesmas" value="Puskesmas" name="fasilitas_kesehatan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Puskesmas">Puskesmas</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Perawat" value="Perawat" name="fasilitas_kesehatan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Perawat">Perawat</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="RumahSakit" value="RumahSakit" name="fasilitas_kesehatan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="RumahSakit">Rumah Sakit</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Bidan" value="Bidan" name="fasilitas_kesehatan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Bidan">Bidan</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>B. Fasilitas pelayanan kesehatan yang paling sering digunakan keluarga:</label>
                                <div className="ms-5">
                                    <input type="radio" id="B-Posyandu/Posbindu" value="Posyandu/Posbindu" name="fasilitas_pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="B-Posyandu/Posbindu">Posyandu/Posbindu</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="B-DokterPraktik" value="DokterPraktik" name="fasilitas_pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="B-DokterPraktik">Dokter Praktik</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="B-Puskesmas" value="Puskesmas" name="fasilitas_pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="B-Puskesmas">Puskesmas</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="B-Perawat" value="Perawat" name="fasilitas_pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="B-Perawat">Perawat</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="B-RumahSakit" value="RumahSakit" name="fasilitas_pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="B-RumahSakit">Rumah Sakit</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="B-Bidan" value="Bidan" name="fasilitas_pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="B-Bidan">Bidan</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>C. Berapakah jarak fasilitas kesehatan terdekat dengan rumah:</label>
                                <div className="ms-5">
                                    <input type="radio" id="Kurangdari1km" value="Kurangdari1km" name="jarak_fasilitas" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Kurangdari1km">Kurang dari 1km</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Lebihdari1km" value="Lebihdari1km" name="jarak_fasilitas" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Lebihdari1km">Lebih dari 1km</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>D. Kebiasaan keluarga sebelum ke pelayanan kesehatan:</label>
                                <div className="ms-5">
                                    <input type="radio" id="BeliObatBebas" value="BeliObatBebas" name="kebiasaan" onChange={(e)=> setD(e.target.value)}/><label htmlFor="BeliObatBebas">Beli Obat Bebas</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Jamu" value="Jamu" name="kebiasaan" onChange={(e)=> setD(e.target.value)}/><label htmlFor="Jamu">Jamu</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="BegitusakitlangsungkeFaskes" value="BegitusakitlangsungkeFaskes" name="kebiasaan" onChange={(e)=> setD(e.target.value)}/><label htmlFor="BegitusakitlangsungkeFaskes">Begitu sakit langsung ke Faskes</label>
                                </div>
                            </div>
                            <div>
                                <label>E. Sumber pendanaan kesehatan keluarga:</label>
                                <div className="ms-5">
                                    <input type="radio" id="BPJS" value="BPJS" name="sumber_dana" onChange={(e)=> setE(e.target.value)}/><label htmlFor="BPJS">BPJS (Jamkesmas, Askes, dll)</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="DanaSehat" value="DanaSehat" name="sumber_dana" onChange={(e)=> setE(e.target.value)}/><label htmlFor="DanaSehat">Dana Sehat</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="TidakAda" value="TidakAda" name="sumber_dana" onChange={(e)=> setE(e.target.value)}/><label htmlFor="TidakAda">Tidak Ada</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Tabungan" value="Tabungan" name="sumber_dana" onChange={(e)=> setE(e.target.value)}/><label htmlFor="Tabungan">Tabungan</label>
                                </div>
                            </div>
                        </div>
                        <div className="my-[20px] grid grid-cols-12">
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold  py-4 w-full rounded-lg xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                            </div>
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                <button onClick={(e)=>{e.preventDefault(); kesehatan_sosial()}} className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 w-full rounded-lg xl:ms-3 lg:ms-3 md:ms-3 ms-0">SELANJUTNYA</button>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}