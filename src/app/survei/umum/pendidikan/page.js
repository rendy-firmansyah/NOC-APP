"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function SurveiPendidikan () {
    const router = useRouter()
    const [a,setA] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const sendData = {
        id : query,
        a : a,
      }   

      function Sebelumnya(){
        router.push(`/survei/umum/komunikasi?id=${query}`)
    }

      async function pendidikan(){
        const send = await axios.post("/api/survei/pendidikan",sendData)
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

                router.push(`/survei/umum/rekreasi?id=${query}`)
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
    // });

    // const handleValueChange = (question, selectedValue) => {
    //     setValue((prevValues) => ({
    //       ...prevValues,
    //       [question]: selectedValue,
    //     }));
    // };

    return (
        <section className="mt-[150px] mb-[70px]">
            <ToastContainer />
            <div className="flex justify-center">
                <div className="card lg:w-[900px] md:w-[700px] w-[350px] px-[30px] py-[40px] bg-white shadow-xl border-2 border-bg-btn-orangeHover rounded-lg">
                    {/* <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] w-[355px]"> */}
                        <h1 className="text-center text-[28px] font-bold">SURVEI UMUM</h1>
                        <h1 className="text-[18px] font-medium mt-3">VII. PENDIDIKAN</h1>
                        <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                        <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                        <div className="pertanyaan">
                            <div>
                                <label>A. Sarana pendidikan yang ada di sekitar masyarakat:</label>
                                <div className="ms-5">
                                    <input type="radio" id="Sekolah/Madrasah" value="Sekolah/Madrasah" name="sarana_pendidikan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Sekolah/Madrasah">Sekolah/Madrasah</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="TPA/TPQ" value="TPA/TPQ" name="sarana_pendidikan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="TPA/TPQ">TPA/TPQ</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="BalaiDesa/Kecamatan" value="BalaiDesa/Kecamatan" name="sarana_pendidikan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="BalaiDesa/Kecamatan">Balai Desa/Kecamatan</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Masjid/Musholla" value="Masjid/Musholla" name="sarana_pendidikan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Masjid/Musholla">Masjid/Musholla</label>
                                </div>
                            </div>
                        </div>
                        <div className="my-[20px] grid grid-cols-12">
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold  py-4 w-full rounded-lg xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                            </div>
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                <button onClick={(e)=>{e.preventDefault(); pendidikan()}} className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 w-full rounded-lg xl:ms-3 lg:ms-3 md:ms-3 ms-0">SELANJUTNYA</button>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}