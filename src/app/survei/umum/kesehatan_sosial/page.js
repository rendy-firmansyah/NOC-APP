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

                router.push(`/survei/umum/transportasi_keamanan?id=${query}`)
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
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] xl:h-[900px] lg:h-[900px] h-[960px] w-[480px] py-[30px] px-[50px] bg-slate-400">
                <h1 className="text-center text-[24px] font-bold">SURVEI NOC</h1>
                <h1 className="font-medium mt-3">II. PELAYANAN KESEHATAN DAN SOSIAL</h1>
                <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
                <div className="pertanyaan">
                    <div>
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
                    <div>
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
                    <div>
                        <label>C. Berapakah jarak fasilitas kesehatan terdekat dengan rumah:</label>
                        <div className="ms-5">
                            <input type="radio" id="Kurangdari1km" value="Kurangdari1km" name="jarak_fasilitas" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Kurangdari1km">Kurang dari 1km</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Lebihdari1km" value="Lebihdari1km" name="jarak_fasilitas" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Lebihdari1km">Lebih dari 1km</label>
                        </div>
                    </div>
                    <div>
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
                <div className="my-[20px] flex justify-center button-group">
                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px]">Sebelumnya</button>
                        <button onClick={(e)=>{e.preventDefault(); kesehatan_sosial()}} className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">Selanjutnya</button>

                </div>
            </div>
        </div>
    )
}