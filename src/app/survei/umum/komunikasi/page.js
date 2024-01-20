"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function SurveiKomunikasi () {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const sendData = {
        id : query,
        a : a,
        b : b,
      }   

      function Sebelumnya(){
        router.push(`/survei/umum/politik_pemerintahan?id=${query}`)
    }

      async function komunikasi(){
        const send = await axios.post("/api/survei/komunikasi",sendData)
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

                router.push(`/survei/umum/pendidikan?id=${query}`)
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
    
    // const [value, setValue] = useState({
    //     A : '',
    //     B : '',
    // });

    // const handleValueChange = (question, selectedValue) => {
    //     setValue((prevValues) => ({
    //       ...prevValues,
    //       [question]: selectedValue,
    //     }));
    // };

    return (
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] xl:h-[500px] lg:h-[500px] md:h-[500px] h-[620px] w-[400px] py-[30px] px-[20px] bg-white shadow-xl border-2 border-bg-btn-orangeHover flex items-center">
                <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] w-[355px]">
                    <h1 className="text-center text-[28px] font-bold">SURVEI UMUM</h1>
                    <h1 className="text-[18px] font-medium mt-3">VI. KOMUNIKASI</h1>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                    <div className="pertanyaan">
                        <div className="mb-3">
                            <label>A. Alat komunikasi yang paling sering digunakan keluarga:</label>
                            <div className="ms-5">
                                <input type="radio" id="Telepon" value="Telepon" name="alat_komunikasi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Telepon">Telepon/HP</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="TidakPunya" value="TidakPunya" name="alat_komunikasi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="TidakPunya">Tidak punya alat komunikasi</label>
                            </div>
                        </div>
                        <div>
                            <label>B. Sarana komunikasi di masyarakat:</label>
                            <div className="ms-5">
                                <input type="radio" id="PengerasSuara" value="PengerasSuara" name="sarana_komunikasi" onChange={(e)=> setB(e.target.value)}/><label htmlFor="PengerasSuara">Pengeras suara masjid</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Mading" value="Mading" name="sarana_komunikasi" onChange={(e)=> setB(e.target.value)}/><label htmlFor="Mading">Mading</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="BalaiRW" value="BalaiRW" name="sarana_komunikasi" onChange={(e)=> setB(e.target.value)}/><label htmlFor="BalaiRW">Balai RW</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="MediaKomunikasi" value="MediaKomunikasi" name="sarana_komunikasi" onChange={(e)=> setB(e.target.value)}/><label htmlFor="MediaKomunikasi">Media Komunikasi (whatsapp, dll)</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-[20px] grid grid-cols-12">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                            <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold  py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[125px] xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                            <button onClick={(e)=>{e.preventDefault(); komunikasi()}} className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[120px] xl:ms-3 lg:ms-3 md:ms-3 ms-0">SELANJUTNYA</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}