"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const AnakSekolah = () => {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');
    const idk = searchParams.get('idk');

    const sendData = {
        id : query,
        id_kk : query,
        a : a,
        b : b,
        c : c,
      }   
      
      console.log(sendData)
      function Sebelumnya(){
          router.push(`/survei/data_pengunjung?id=${idk}`)
        }

        async function anak_sekolah(){
            const send = await axios.post("/api/survei/kelompokKesehatan/AnakSekolah",sendData)
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
        <section className="mt-[150px] mb-[70px]">
            <ToastContainer />
            <div className="flex justify-center">
                <div className="card lg:w-[900px] md:w-[600px] w-[350px] px-[30px] py-[60px] bg-white shadow-xl border-2 border-bg-btn-orangeHover rounded-lg">
                    <h1 className="font-bold text-xl lg:text-2xl text-center">STATUS KESEHATAN KELOMPOK</h1>
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Anak Sekolah (SD)</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full h-[5px] bg-bg-btn-orangeHover my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Apakah didalam keluarga mempunyai anak sekolah SD?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="anakSD" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="anakSD" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Apa Kegiatan anak diluar sekolah?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="musik/tv/hp" value="musik/tv/hp" name="kegiatan" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="musik/tv/hp" class="block text-sm font-medium leading-6 text-gray-900">Musik/TV/HP</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="keagamaan" value="keagamaan" name="kegiatan" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="keagamaan" class="block text-sm font-medium leading-6 text-gray-900">Keagamaan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="olahraga" value="olahraga" name="kegiatan" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="olahraga" class="block text-sm font-medium leading-6 text-gray-900">Olahraga</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="bermain/kumpul_dengan_teman" value="bermain/kumpul_dengan_teman" name="kegiatan" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="bermain/kumpul_dengan_teman" class="block text-sm font-medium leading-6 text-gray-900">Bermain/kumpul dengan teman</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="kegiatan" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="lain-lain" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Adakah Penyakit atau keluhan yang dirasakan anak saat ini?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="Batuk,pilek,panas" value="Batuk,pilek,panas" name="penyakit" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="Batuk,pilek,panas" class="block text-sm font-medium leading-6 text-gray-900">Batuk, pilek, panas</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="diare" value="diare" name="penyakit" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="diare" class="block text-sm font-medium leading-6 text-gray-900">Diare</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="karies_gigi" value="karies_gigi" name="penyakit" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="karies_gigi" class="block text-sm font-medium leading-6 text-gray-900">Karies gigi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="gatal-gatal" value="gatal-gatal" name="penyakit" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="gatal-gatal" class="block text-sm font-medium leading-6 text-gray-900">Gatal-gatal</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="penyakit" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="lain-lain" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[20px] grid grid-cols-12">
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="py-4 w-full bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold uppercase transition-all duration-300 rounded-lg xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                                    </div>
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); anak_sekolah()}} type="submit" className="py-4 w-full bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold uppercase transition-all duration-300 rounded-lg xl:ms-3 lg:ms-3 md:ms-3 ms-0">SUBMIT</button>
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

export default AnakSekolah;