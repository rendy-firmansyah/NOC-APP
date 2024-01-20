"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const IbuHamil = () => {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const [d,setD] = useState()
    const [e,setE] = useState()
    const [f,setF] = useState()
    const [g,setG] = useState()
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
        e : e,
        f : f,
        g : g,
      }   
      
      console.log(sendData)
      function Sebelumnya(){
          router.push(`/survei/data_pengunjung?id=${idk}`)
        }

        async function lansia(){
            const send = await axios.post("/api/survei/kelompokKesehatan/UsiaLanjut",sendData)
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
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Usia Lanjut</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full border-b-black border-b-2 my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Apakah lansia memiliki keluhan penyakit</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="keluhan" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="keluhan" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Jika ya, jenis penyakit</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="asthma" value="asthma" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="asthma" class="block text-sm font-medium leading-6 text-gray-900">Asthma</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="TBC" value="TBC" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="TBC" class="block text-sm font-medium leading-6 text-gray-900">TBC</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="hypertensi" value="hypertensi" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="hypertensi" class="block text-sm font-medium leading-6 text-gray-900">Hypertensi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="kencing_manis" value="kencing_manis" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="kencing_manis" class="block text-sm font-medium leading-6 text-gray-900">Kencing manis</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="reumatik/arthritis" value="reumatik/arthritis" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="reumatik/arthritis" class="block text-sm font-medium leading-6 text-gray-900">Reumatik/ arthritis</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="katarak" value="katarak" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="katarak" class="block text-sm font-medium leading-6 text-gray-900">Katarak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="osteoporosis" value="osteoporosis" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Osteoporosis</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="penyakit_kulit" value="penyakit_kulit" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="penyakit_kulit" class="block text-sm font-medium leading-6 text-gray-900">Penyakit kulit</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="jantung" value="jantung" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="jantung" class="block text-sm font-medium leading-6 text-gray-900">Jantung</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="pikun" value="pikun" name="penyakit" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="pikun" class="block text-sm font-medium leading-6 text-gray-900">Pikun</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Upaya yang telah dilakukan (sebutkan)</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="berobat_kesarana_kesehatan" value="berobat_kesarana_kesehatan" name="upaya" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="berobat_kesarana_kesehatan" class="block text-sm font-medium leading-6 text-gray-900"> Berobat ke sarana kesehatan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="berobat_ke_non_medis" value="berobat_ke_non_medis" name="upaya" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="berobat_ke_non_medis" class="block text-sm font-medium leading-6 text-gray-900">Berobat ke non medis</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="membeli_obat_di_warung" value="membeli_obat_di_warung" name="upaya" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="membeli_obat_di_warung" class="block text-sm font-medium leading-6 text-gray-900">membeli obat di warung</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Penggunaan waktu senggang pada lansia (yang paling dominan)</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="Berkebun/pekerjaan_rumah" value="Berkebun/pekerjaan_rumah" name="waktu_senggang" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="Berkebun/pekerjaan_rumah" class="block text-sm font-medium leading-6 text-gray-900">Berkebun/pekerjaan rumah</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="senam" value="senam" name="waktu_senggang" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="senam" class="block text-sm font-medium leading-6 text-gray-900">Senam</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="merokok" value="merokok" name="waktu_senggang" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="merokok" class="block text-sm font-medium leading-6 text-gray-900">Merokok</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="jalan-jalan" value="jalan-jalan" name="waktu_senggang" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="jalan-jalan" class="block text-sm font-medium leading-6 text-gray-900">Jalan-jalan</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>e. Adakah posyandu lansia di daerah tempat tinggal saudara?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="posyandu_lansia" onChange={(e)=> setE(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value="ada" name="posyandu_lansia" onChange={(e)=> setE(e.target.value)}/>
                                            <label for="ada" class="block text-sm font-medium leading-6 text-gray-900">Ada</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>f. Jika ada, apakah lansia rutin ikut posyandu lansia tersebut?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="posyandu_lansia" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="posyandu_lansia" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>g. Jika tidak, alasannya?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_tahu" value="tidak_tahu" name="alasan" onChange={(e)=> setG(e.target.value)}/>
                                            <label for="tidak_tahu" class="block text-sm font-medium leading-6 text-gray-900">Tidak tahu</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_mau" value="tidak_mau" name="alasan" onChange={(e)=> setG(e.target.value)}/>
                                            <label for="tidak_mau" class="block text-sm font-medium leading-6 text-gray-900">Tidak mau</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-[20px] grid grid-cols-12">
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold  py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[125px] xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                                    </div>
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); lansia()}} type="submit" className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[120px] xl:ms-3 lg:ms-3 md:ms-3 ms-0">SUBMIT</button>
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

export default IbuHamil;