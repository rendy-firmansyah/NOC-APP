"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Balita = () => {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const [d,setD] = useState()
    const [e,setE] = useState()
    const [f,setF] = useState()
    const [g1,setG1] = useState()
    const [g2,setG2] = useState()
    const [g3,setG3] = useState()
    const [g4,setG4] = useState()
    const [g5,setG5] = useState()
    const [h,setH] = useState()
    const [i,setI] = useState()
    const [j,setJ] = useState()
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
        e : e,
        f : f,
        g1 : g1,
        g2 : g2,
        g3 : g3,
        g4 : g4,
        g5 : g5,
        h : h,
        i : i,
        j : j,
      }   
      
      console.log(sendData)
      function Sebelumnya(){
          router.push(`/survei/data_pengunjung?id=${idk}`)
        }

        async function balita(){
            const send = await axios.post("/api/survei/kelompokKesehatan/balita",sendData)
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
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Balita</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full h-[5px] bg-bg-btn-orangeHover my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Apakah ada anggota keluarga yang usianya 0-28 hari?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="usia_anggota" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="usia_anggota" onChange={(e)=> setA(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Apakah ada anggota keluarga balita yang usianya 1 bulan-5 tahun?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="usia_bulanan" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="usia_bulanan" onChange={(e)=> setB(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Usia berapa pertama kali kontak dengan tenaga kesehatan?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="0-7hari" value="0-7hari" name="kesehatan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="0-7hari" class="block text-sm font-medium leading-6 text-gray-900">0 - 7 hari</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="8-28hari" value="8-28hari" name="kesehatan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="8-28hari" class="block text-sm font-medium leading-6 text-gray-900">8 - 28 hari</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="3-lebih_dari_28hari" value="3-lebih_dari_28hari" name="kesehatan" onChange={(e)=> setC(e.target.value)}/>
                                            <label for="3-lebih_dari_28hari" class="block text-sm font-medium leading-6 text-gray-900">3 - lebih dari 28 hari</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Apakah balita mendapatkan ASI Esklusif?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="asi_esklusif" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="asi_esklusif" onChange={(e)=> setD(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>e. Apakah setiap bulan balita dibawa ke posyandu?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="ya" value="ya" name="posyandu" onChange={(e)=> setE(e.target.value)}/>
                                            <label for="ya" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value="tidak" name="posyandu" onChange={(e)=> setE(e.target.value)}/>
                                            <label for="tidak" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>f. Apa saja jenis Imunisasi yang sudah didapatkan?</p>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="polio" value="polio" name="imunisasi" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="polio" className="block text-sm font-medium leading-6 text-gray-900">Polio</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="BCG" value="BCG" name="imunisasi" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="BCG" className="block text-sm font-medium leading-6 text-gray-900">BCG</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="DPT" value="DPT" name="imunisasi" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="DPT" className="block text-sm font-medium leading-6 text-gray-900">DPT</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="hepatitis" value="hepatitis" name="imunisasi" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="hepatitis" className="block text-sm font-medium leading-6 text-gray-900">Hepatitis</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="campak" value="campak" name="imunisasi" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="campak" className="block text-sm font-medium leading-6 text-gray-900">Campak</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="imunisasi" onChange={(e)=> setF(e.target.value)}/>
                                            <label for="lain-lain" className="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>g. Hasil pengukuran pertumbuhan dan perkembangan Balita ....</p>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <label for="usia" className="block text-sm font-medium leading-6 text-gray-900">Usia</label>
                                            <div className="mt-2">
                                                <input type="text" name="usia" id="usia" onChange={(e)=> setG1(e.target.value)} placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <label for="usia" className="block text-sm font-medium leading-6 text-gray-900">(Tahun, Bulan, Hari)</label>
                                        </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <label for="berat_badan" className="block text-sm font-medium leading-6 text-gray-900">BB (Berat Badan)</label>
                                            <div className="mt-2">
                                                <input type="text" name="berat_badan" id="berat_badan" onChange={(e)=> setG2(e.target.value)} placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <label for="berat_badan" className="block text-sm font-medium leading-6 text-gray-900">(Kg)</label>
                                        </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <label for="tinggi_badan" className="block text-sm font-medium leading-6 text-gray-900">TB (Tinggi Badan)</label>
                                            <div className="mt-2">
                                                <input type="text" name="tinggi_badan" id="tinggi_badan" onChange={(e)=> setG3(e.target.value)} placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <label for="tinggi_badan" className="block text-sm font-medium leading-6 text-gray-900">(Cm)</label>
                                        </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <label for="KPSP" className="block text-sm font-medium leading-6 text-gray-900">KPSP</label>
                                            <div className="mt-2">
                                                <input type="text" name="KPSP" id="KPSP" onChange={(e)=> setG4(e.target.value)} placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <label for="Interpretasi" className="block text-sm font-medium leading-6 text-gray-900">Interpretasi</label>
                                            <div className="mt-2">
                                                <input type="text" name="Interpretasi" id="Interpretasi" onChange={(e)=> setG5(e.target.value)} placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>h. Dari hasil pengukuran tinggi badan berdasarkan usia (TB/U) Status gizi anak saat ini ....</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="tinggi" value="tinggi" name="tb/u" onChange={(e)=> setH(e.target.value)}/>
                                            <label for="Tinggi" class="block text-sm font-medium leading-6 text-gray-900">Tinggi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="normal" value="normal" name="tb/u" onChange={(e)=> setH(e.target.value)}/>
                                            <label for="normal" class="block text-sm font-medium leading-6 text-gray-900">Normal</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="pendek" value="pendek" name="tb/u" onChange={(e)=> setH(e.target.value)}/>
                                            <label for="pendek" class="block text-sm font-medium leading-6 text-gray-900">Pendek</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="sangat_pendek" value="sangat_pendek" name="tb/u" onChange={(e)=> setH(e.target.value)}/>
                                            <label for="sangat_pendek" class="block text-sm font-medium leading-6 text-gray-900">Sangat pendek</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>i. Dari hasil pengukuran status gizi di pita KMS, berat badan anak berada pada?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="daerah_kuning_atas" value="daerah_kuning_atas" name="tb/u" onChange={(e)=> setI(e.target.value)}/>
                                            <label for="daerah_kuning_atas" class="block text-sm font-medium leading-6 text-gray-900">Daerah kuning atas</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="daerah_hijau" value="daerah_hijau" name="tb/u" onChange={(e)=> setI(e.target.value)}/>
                                            <label for="daerah_hijau" class="block text-sm font-medium leading-6 text-gray-900">Daerah hijau</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="daerah_kuning_bawah" value="daerah_kuning_bawah" name="tb/u" onChange={(e)=> setI(e.target.value)}/>
                                            <label for="daerah_kuning_bawah" class="block text-sm font-medium leading-6 text-gray-900">Daerah kuning bawah</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="daerah_garis_merah" value="daerah_garis_merah" name="tb/u" onChange={(e)=> setI(e.target.value)}/>
                                            <label for="daerah_garis_merah" class="block text-sm font-medium leading-6 text-gray-900">Daerah garis merah</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>j. Adakah penyakit atau keluhan yang dirasakan balita saat ini?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="Batuk,pilek,panas" value="Batuk,pilek,panas" name="tb/u" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="Batuk,pilek,panas" class="block text-sm font-medium leading-6 text-gray-900">Batuk, pilek, panas</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="diare" value="diare" name="tb/u" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="diare" class="block text-sm font-medium leading-6 text-gray-900">Diare</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="gizi_kurang" value="gizi_kurang" name="tb/u" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="gizi_kurang" class="block text-sm font-medium leading-6 text-gray-900">Gizi kurang</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="gatal-gatal" value="gatal-gatal" name="tb/u" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="gatal-gatal" class="block text-sm font-medium leading-6 text-gray-900">Gatal gatal</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input type="radio" id="lain-lain" value="lain-lain" name="tb/u" onChange={(e)=> setJ(e.target.value)}/>
                                            <label for="lain-lain" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-[20px] grid grid-cols-12">
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="py-4 w-full bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold uppercase transition-all duration-300 rounded-lg xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                                    </div>
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                                        <button onClick={(e)=>{e.preventDefault(); balita()}} type="submit" className="py-4 w-full bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold uppercase transition-all duration-300 rounded-lg xl:ms-3 lg:ms-3 md:ms-3 ms-0">SUBMIT</button>
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

export default Balita;