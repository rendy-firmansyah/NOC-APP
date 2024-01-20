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
            <div className="xl:w-[980px] lg:w-[980px] xl:h-[480px] lg:h-[480px] h-[480px] w-[480px] py-[30px] px-[50px] bg-slate-400">
                <h1 className="text-center text-[24px] font-bold">SURVEI NOC</h1>
                <h1 className="font-medium mt-3">III. EKONOMI</h1>
                <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
                <div className="pertanyaan">
                    <div>
                        <label>A. Fasilitas perekonomian yang ada di sekitar masyarakat:</label>
                        <div className="ms-5">
                            <input type="radio" id="Ada" value="Ada" name="fasilitas_ekonomi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Ada">Ada</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="TidakAda" value="TidakAda" name="fasilitas_ekonomi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="TidakAda">Tidak Ada</label>
                        </div>
                    </div>
                    <div>
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
                <div className="my-[20px] flex justify-center button-group">
                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px]">Sebelumnya</button>
                        <button onClick={(e)=>{e.preventDefault(); ekonomi()}} className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">Selanjutnya</button>
                </div>
            </div>
        </div>
    )
}