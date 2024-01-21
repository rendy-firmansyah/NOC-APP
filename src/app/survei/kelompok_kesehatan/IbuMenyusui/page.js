"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const IbuMenyusui = () => {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const [d,setD] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');
    const idk = searchParams.get('idk');

    const sendData = {
        id : idk,
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

        async function ibu_menyusui(){
            const send = await axios.post("/api/survei/kelompokKesehatan/IbuMenyusui",sendData)
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

    return (
        <section className="mt-[150px] mb-[70px]">
            <ToastContainer />
            <div className="flex justify-center">
                <div className="card lg:w-[900px] md:w-[600px] w-[350px] px-[30px] py-[60px] bg-white shadow-xl border-2 border-bg-btn-orangeHover rounded-lg">
                    <h1 className="font-bold text-xl lg:text-2xl text-center">STATUS KESEHATAN KELOMPOK</h1>
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Ibu Menyusui</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full h-[5px] bg-bg-btn-orangeHover my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. apakah ibu meneteki anaknya</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="netek" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="netek" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Bila ya, lamanya menyusui</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="kurang_dari_8bln" value="kurang_dari_8bln" name="lama_nyusu" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="kurang_dari_8bln" class="block text-sm font-medium leading-6 text-gray-900">Kurang dari 6 bulan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="6bln/lebih_dari_6bln" value="6bln/lebih_dari_6bln" name="lama_nyusu" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="6bln/lebih_dari_6bln" class="block text-sm font-medium leading-6 text-gray-900">6 bulan atau lebih dari 6 bulan</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Bila tidak, alasannya</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="pekerjaan" value="pekerjaan" name="alasan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="pekerjaan" class="block text-sm font-medium leading-6 text-gray-900">Pekerjaan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_tahu" value="tidak_tahu" name="alasan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="tidak_tahu" class="block text-sm font-medium leading-6 text-gray-900">Tidak tahu</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="penyakit" value="penyakit" name="alasan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="penyakit" class="block text-sm font-medium leading-6 text-gray-900">Penyakit</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="kecantikan" value="kecantikan" name="alasan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="kecantikan" class="block text-sm font-medium leading-6 text-gray-900">Kecantikan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="alasan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="lain-lain" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Adakah penyakit atau keluhan yang dirasakan ibu menyusui saat ini</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="asi_tidak_lancar" value="asi_tidak_lancar" name="keluhan" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="asi_tidak_lancar" class="block text-sm font-medium leading-6 text-gray-900">ASI tidak lancar</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="penyakit_dipayudara" value="penyakit_dipayudara" name="keluhan" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="penyakit_dipayudara" class="block text-sm font-medium leading-6 text-gray-900">Penyakit di payudara</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="payudara_bengkak" value="payudara_bengkak" name="keluhan" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="payudara_bengkak" class="block text-sm font-medium leading-6 text-gray-900">Payudara bengkak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_mau_menyusu" value="tidak_mau_menyusu" name="keluhan" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="tidak_mau_menyusu" class="block text-sm font-medium leading-6 text-gray-900">Bayi tidak mau menyusu</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="keluhan" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="lain-lain" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[20px] grid grid-cols-12">
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="py-4 w-full bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold uppercase transition-all duration-300 rounded-lg xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                                    </div>
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); ibu_menyusui()}} type="submit" className="py-4 w-full bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold uppercase transition-all duration-300 rounded-lg xl:ms-3 lg:ms-3 md:ms-3 ms-0">SUBMIT</button>
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

export default IbuMenyusui;