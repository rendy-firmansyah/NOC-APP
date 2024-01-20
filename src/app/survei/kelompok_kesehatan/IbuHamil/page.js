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
    const [h,setH] = useState()
    const [i,setI] = useState()
    const [j,setJ] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');
    const idk = searchParams.get('idk');

    const sendData = {
        id : query,
        a : a,
        b : b,
        c : c,
        d : d,
        e : e,
        f : f,
        g : g,
        h : h,
        i : i,
        j : j,
      }   

      function Sebelumnya(){
        router.push(`/survei/data_pengunjung?id=${idk}`)
    }

      async function ibu_hamil(){
        const send = await axios.post("/api/survei/kelompokKesehatan/IbuHamil",sendData)
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
        <section className="">
            <div className="flex justify-center pb-10">
                <div className="mt-[120px] card lg:w-[900px] md:w-[600px] w-[350px] px-6 md:px-14 lg:px-32 py-5 md:py-14 bg-gray-400 rounded-lg">
                    <h1 className="font-bold text-xl lg:text-2xl text-center">STATUS KESEHATAN KELOMPOK</h1>
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Ibu Hamil</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full border-b-black border-b-2 my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Berapa umur kehamilan pada trimester?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="I" value="I" name="umur_hamil" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="umur_hamil" class="block text-sm font-medium leading-6 text-gray-900">I (0-3 bulan)</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="II" value="II" name="umur_hamil" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="umur_hamil" class="block text-sm font-medium leading-6 text-gray-900">II (4-6 bulan)</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="III" value="III" name="umur_hamil" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="umur_hamil" class="block text-sm font-medium leading-6 text-gray-900">III (7-9 bulan)</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Jika ada, ini adalah kehamilan yang ke?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="1" value="1" name="hamil_keberapa" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="hamil_keberapa" class="block text-sm font-medium leading-6 text-gray-900">1</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="2" value="2" name="hamil_keberapa" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="hamil_keberapa" class="block text-sm font-medium leading-6 text-gray-900">2</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="3" value="3" name="hamil_keberapa" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="hamil_keberapa" class="block text-sm font-medium leading-6 text-gray-900">3</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lebih_dari_3" value="lebih_dari_3" name="hamil_keberapa" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="hamil_keberapa" class="block text-sm font-medium leading-6 text-gray-900"> Lebih dari 3 </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Berapa usia ibu hamil saat ini?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="kurang_dari_20thn" value="kurang_dari_20thn" name="usia_hamil" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="kurang_dari_20thn" class="block text-sm font-medium leading-6 text-gray-900">Kurang dari 20 tahun</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="20-35thn" value="20-35thn" name="usia_hamil" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="20-35thn" class="block text-sm font-medium leading-6 text-gray-900">20 - 35 tahun</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lebih_dari_35thn" value="lebih_dari_35thn" name="usia_hamil" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="lebih_dari_35thn" class="block text-sm font-medium leading-6 text-gray-900">Lebih dari 35 tahun</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Apakah ibu memeriksakan kehamilannya?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="iya" value="iya" name="periksa_kehamilan" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="iya" class="block text-sm font-medium leading-6 text-gray-900">Iya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="periksa_kehamilan" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>e. Bila ya, sudah berapa kali</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="1_kali" value="1_kali" name="berapa_kali" onChange={(e)=> setE(e.target.value)}/>
                                            <label for="1_kali" class="block text-sm font-medium leading-6 text-gray-900">1 kali</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="2_kali" value="2_kali" name="berapa_kali" onChange={(e)=> setE(e.target.value)}/>
                                            <label for="2_kali" class="block text-sm font-medium leading-6 text-gray-900">2</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lebih_Dari_3" value="lebih_Dari_3" name="berapa_kali" onChange={(e)=> setE(e.target.value)}/>
                                            <label for="lebih_Dari_3" class="block text-sm font-medium leading-6 text-gray-900">Lebih dari 3 kali</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>f. Bila tidak, alasannya</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_ada_biaya" value="tidak_ada_biaya" name="alasan" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="tidak_ada_biaya" class="block text-sm font-medium leading-6 text-gray-900">Tidak ada biaya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_sempat" value="tidak_sempat" name="alasan" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="tidak_sempat" class="block text-sm font-medium leading-6 text-gray-900">Tidak sempat</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_tahu" value="tidak_tahu" name="alasan" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="tidak_tahu" class="block text-sm font-medium leading-6 text-gray-900">Tidak tahu</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="alasan" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="lain-lain" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>g. Rencana tempat persalinan</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="puskesmas" value="puskesmas" name="rencana" onChange={(e)=> setG(e.target.value)}/>
                                            <label for="puskesmas" class="block text-sm font-medium leading-6 text-gray-900">Puskesmas/RS</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="bidan" value="bidan" name="rencana" onChange={(e)=> setG(e.target.value)}/>
                                            <label for="bidan" class="block text-sm font-medium leading-6 text-gray-900">Bidan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="dukun" value="dukun" name="rencana" onChange={(e)=> setG(e.target.value)}/>
                                            <label for="dukun" class="block text-sm font-medium leading-6 text-gray-900">Dukun</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>h. Apakah sudah mendapatkan imunisasi TT</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="imunisasi" onChange={(e)=> setH(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="imunisasi" onChange={(e)=> setH(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak_tahu" value="tidak_tahu" name="imunisasi" onChange={(e)=> setH(e.target.value)}/>
                                            <label for="tidak_tahu" class="block text-sm font-medium leading-6 text-gray-900">Tidak tahu</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>i. Bila ya</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lengkap_2kali" value="lengkap_2kali" name="bila" onChange={(e)=> setI(e.target.value)}/>
                                            <label for="lengkap_2kali" class="block text-sm font-medium leading-6 text-gray-900">Lengkap (2 kali) </label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="bila" onChange={(e)=> setI(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>j. Adakah penyakit atau keluhan yang dirasakan bumil saat ini</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tekanan_darah_tinggi" value="tekanan_darah_tinggi" name="keluhan" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="tekanan_darah_tinggi" class="block text-sm font-medium leading-6 text-gray-900">Tekanan darah tinggi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tekanan_darah_rendah" value="tekanan_darah_rendah" name="keluhan" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="tekanan_darah_rendah" class="block text-sm font-medium leading-6 text-gray-900">Tekanan darah rendah</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="kurang_darah" value="kurang_darah" name="keluhan" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="kurang_darah" class="block text-sm font-medium leading-6 text-gray-900">Kurang darah</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="kurang_gizi" value="kurang_gizi" name="keluhan" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="kurang_gizi" class="block text-sm font-medium leading-6 text-gray-900">Kurang gizi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="kaki_bengkak" value="kaki_bengkak" name="keluhan" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="kaki_bengkak" class="block text-sm font-medium leading-6 text-gray-900">Kaki bengkak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="keluhan" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="lain-lain" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-[20px] grid grid-cols-12">
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold  py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[125px] xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                                    </div>
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); ibu_hamil()}} className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[120px] xl:ms-3 lg:ms-3 md:ms-3 ms-0">SELANJUTNYA</button>
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