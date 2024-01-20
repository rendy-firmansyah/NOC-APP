"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Dewasa = () => {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const [d,setD] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');
    const idk = searchParams.get('idk');

    const sendData = {
        id : query,
        a : a,
        b : b,
        c : c,
        d : d,
      }   

      function Sebelumnya(){
        router.push(`/survei/data_pengunjung?id=${idk}`)
    }

      async function dewasa(){
        const send = await axios.post("/api/survei/kelompokKesehatan/dewasa",sendData)
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

                router.push(`/survei/data_pengunjung?id=${idk}`)
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
        <section className="lg:h-screen">
            <div className="flex justify-center pb-10">
                <div className="mt-[120px] card lg:w-[900px] md:w-[600px] w-[350px] px-6 md:px-14 lg:px-32 py-5 md:py-14 bg-gray-400 rounded-lg">
                    <h1 className="font-bold text-xl lg:text-2xl text-center">STATUS KESEHATAN KELOMPOK</h1>
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Dewasa (19 - 54 Tahun)</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full border-b-black border-b-2 my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Penyakit yang diderita. Siapa yang menderita?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="asthma" value="asthma" name="penyakit" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="asthma" class="block text-sm font-medium leading-6 text-gray-900">Asthma</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="DM" value="DM" name="penyakit" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="DM" class="block text-sm font-medium leading-6 text-gray-900">DM</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="TBC" value="TBC" name="penyakit" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="TBC" class="block text-sm font-medium leading-6 text-gray-900">TBC</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="jantung" value="jantung" name="penyakit" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="jantung" class="block text-sm font-medium leading-6 text-gray-900">Jantung</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="hipertensi" value="hipertensi" name="penyakit" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="hipertensi" class="block text-sm font-medium leading-6 text-gray-900">Hipertensi</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Adakah Posbindu di daerah tempat tinggal saudara?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidakada" value="tidak_ada" name="posbindu" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="tidakada" class="block text-sm font-medium leading-6 text-gray-900">Tidak Ada</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value="ada" name="posbindu" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="ada" class="block text-sm font-medium leading-6 text-gray-900">Ada</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Jika ada, apakah rutin mengikuti kegiatan posbindu tersebut?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="rutin_posbindu" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="rutin_posbindu" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Jika tidak, alasannya?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_tahu" value="tidak_tahu" name="alasan" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="tidak_tahu" class="block text-sm font-medium leading-6 text-gray-900">Tidak tahu</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="bekerja" value="bekerja" name="alasan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="bekerja" class="block text-sm font-medium leading-6 text-gray-900">Bekerja</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-[20px] grid grid-cols-12">
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold  py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[125px] xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                                    </div>
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); dewasa()}} className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[120px] xl:ms-3 lg:ms-3 md:ms-3 ms-0">SELANJUTNYA</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dewasa;