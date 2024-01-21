"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function SurveiPolitik () {
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
        router.push(`/survei/umum/transportasi_keamanan?id=${query}`)
    }

      async function politik_pemerintahan(){
        const send = await axios.post("/api/survei/politikPemerintahan",sendData)
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

                router.push(`/survei/umum/komunikasi?id=${query}`)
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
        <section className="mt-[150px] mb-[70px]">
            <ToastContainer />
            <div className="flex justify-center">
                <div className="card lg:w-[900px] md:w-[700px] w-[350px] px-[30px] py-[40px] bg-white shadow-xl border-2 border-bg-btn-orangeHover rounded-lg">
                    {/* <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] w-[355px]"> */}
                        <h1 className="text-center text-[28px] font-bold">SURVEI UMUM</h1>
                        <h1 className="text-[18px] font-medium mt-3">V. POLITIK DAN PEMERINTAHAN</h1>
                        <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                        <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                        <div className="pertanyaan">
                            <div className="mb-3">
                                <label>A. Adakan kebijakan atau program pemerintah yang diterapkan di wilayah tersebut mengenai kesehatan masyarakat:</label>
                                <div className="ms-5">
                                    <input type="radio" id="Ada" value="Ada" name="kebijakan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Ada">Ada</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="TidakAda" value="TidakAda" name="kebijakan" onChange={(e)=> setA(e.target.value)}/><label htmlFor="TidakAda">Tidak Ada</label>
                                </div>
                            </div>
                            <div>
                                <label>B. Bentuk kebijakan atau program pemerintah yang tersedia:</label>
                                <div className="ms-5">
                                    <input type="radio" id="PencegahanStunting" value="PencegahanStunting" name="bentuk_kebijakan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="PencegahanStunting">Program pencegahan stunting</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="PemberdayaanMasyarakat" value="PemberdayaanMasyarakat" name="bentuk_kebijakan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="PemberdayaanMasyarakat">Program pemberdayaan masyarakat</label>
                                </div>
                            </div>
                        </div>
                        <div className="my-[20px] grid grid-cols-12">
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold  py-4 w-full rounded-lg xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                            </div>
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                <button onClick={(e)=>{e.preventDefault(); politik_pemerintahan()}} className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 w-full rounded-lg xl:ms-3 lg:ms-3 md:ms-3 ms-0">SELANJUTNYA</button>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}