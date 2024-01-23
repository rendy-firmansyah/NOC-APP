"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Remaja = () => {
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
        id_kk : query,
        a : a,
        b : b,
        c : c,
        d : d,
      }   
      
      console.log(sendData)
      function Sebelumnya(){
          router.push(`/survei/data_pengunjung?id=${idk}`)
        }

        async function remaja(){
            const send = await axios.post("/api/survei/kelompokKesehatan/Remaja",sendData)
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
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Remaja (SMP-SMA)</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full border-b-black border-b-2 my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Kegiatan anak diluar sekolah</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="keagamaan" value="keagamaan" name="kegiatan_luar" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="keagamaan" class="block text-sm font-medium leading-6 text-gray-900">Keagamaan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="olahraga" value="olahraga" name="kegiatan_luar" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="olahraga" class="block text-sm font-medium leading-6 text-gray-900">Olahraga</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="bermain/kumpul_dengan_teman" value="bermain/kumpul_dengan_teman" name="kegiatan_luar" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="bermain/kumpul_dengan_teman" class="block text-sm font-medium leading-6 text-gray-900">Bermain/kumpul dengan teman</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Bagaimana penggunaan waktu luang anak</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="musik/tv/hp" value="musik/tv/hp" name="waktu_luang" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Musik/TV/HP</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="olahraga" value="olahraga" name="waktu_luang" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Olahraga</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="rekreasi" value="rekreasi" name="waktu_luang" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Rekreasi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="keagamaan" value="keagamaan" name="waktu_luang" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Keagamaan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="waktu_luang" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Kebiasaan anak</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="merokok" value="merokok" name="merokok" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="merokok" class="block text-sm font-medium leading-6 text-gray-900">Merokok</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="alkohol" value="alkohol" name="alkohol" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="alkohol" class="block text-sm font-medium leading-6 text-gray-900">Alkohol</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="narkoba" value="narkoba" name="narkoba" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="narkoba" class="block text-sm font-medium leading-6 text-gray-900">Narkoba</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidakAda" value="tidak ada" name="tidakAda" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="tidakAda" class="block text-sm font-medium leading-6 text-gray-900">Tidak Ada</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Adakah penyakit atau keluhan yang dirasakan remaja saat ini</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="batuk,pilek,panas" value="batuk,pilek,panas" name="penyakit" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="batuk,pilek,panas" class="block text-sm font-medium leading-6 text-gray-900">Batuk, pilek, panas</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="gizi_lebih" value="gizi_lebih" name="penyakit" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="gizi_lebih" class="block text-sm font-medium leading-6 text-gray-900">Gizi lebih</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="dismenore" value="dismenore" name="penyakit" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="dismenore" class="block text-sm font-medium leading-6 text-gray-900">Dismenore</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="gatal-gatal" value="gatal-gatal" name="penyakit" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="gatal-gatal" class="block text-sm font-medium leading-6 text-gray-900">Gatal-gatal</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[20px] grid grid-cols-12">
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="py-4 w-full bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold uppercase transition-all duration-300 rounded-lg xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                                    </div>
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); remaja()}} type="submit" className="py-4 w-full bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold uppercase transition-all duration-300 rounded-lg xl:ms-3 lg:ms-3 md:ms-3 ms-0">SUBMIT</button>
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

export default Remaja;