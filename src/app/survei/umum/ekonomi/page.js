"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function SurveiEkonomi () {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const sendData = {
        id : query,
        a : a,
        b : b,
        c : c,
      }   

      function Sebelumnya(){
        router.push(`/survei/umum/kesehatan_sosial?id=${query}`)
    }

      async function ekonomi(){
        const send = await axios.post("/api/survei/ekonomi",sendData)
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
            <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] xl:h-[550px] lg:h-[550px] md:h-[550px] h-[650px] w-[400px] py-[30px] px-[20px] bg-white shadow-xl border-2 border-bg-btn-orangeHover flex items-center">
                <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] w-[355px]">
                    <h1 className="text-center text-[28px] font-bold">SURVEI UMUM</h1>
                    <h1 className="text-[18px] font-medium mt-3">III. EKONOMI</h1>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                    <div className="pertanyaan">
                        <div className="mb-3">
                            <label>A. Fasilitas perekonomian yang ada di sekitar masyarakat:</label>
                            <div className="ms-5">
                                <input type="radio" id="Ada" value="Ada" name="fasilitas_ekonomi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Ada">Ada</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="TidakAda" value="TidakAda" name="fasilitas_ekonomi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="TidakAda">Tidak Ada</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>B. Penghasilan keluarga rata-rata perbulan:</label>
                            <div className="ms-5">
                                <input type="radio" id="KurangdariUMR" value="KurangdariUMR" name="penghasilan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="KurangdariUMR">Kurang dari UMR  (Rp. 2.355.000.-)</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="LebihdariUMR" value="LebihdariUMR" name="penghasilan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="LebihdariUMR">Lebih dari UMR  (Rp. 2.355.000.-)</label>
                            </div>
                        </div>
                        <div>
                            <label>C. Apakah keluarga menabung:</label>
                            <div className="ms-5">
                                <input type="radio" id="Ya" value="Ya" name="menabung" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Ya">Ya</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Tidak" value="Tidak" name="menabung" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Tidak">Tidak</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-[20px] grid grid-cols-12">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                            <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold  py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[125px] xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                            <button onClick={(e)=>{e.preventDefault(); ekonomi()}} className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[120px] xl:ms-3 lg:ms-3 md:ms-3 ms-0">SELANJUTNYA</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}