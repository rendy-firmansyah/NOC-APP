"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function SurveiFisikSosial () {
    const router = useRouter()
    const [a1,setA1] = useState()
    const [a2,setA2] = useState()
    const [a3,setA3] = useState()
    const [a4,setA4] = useState()
    const [b1,setB1] = useState()
    const [b2,setB2] = useState()
    const [c1,setC1] = useState()
    const [c2,setC2] = useState()
    const [d1,setD1] = useState()
    const [d2,setD2] = useState()
    const [d3,setD3] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    // const [value, setValue] = useState({
    //     A : {
    //         a : '',
    //         b : '',
    //         c : '',
    //         d : '',
    //     },
    //     B : {
    //         a : '',
    //         b : '',
    //     },
    //     C : {
    //         a : '',
    //         b : '',
    //     },
    //     D : {
    //         a : '',
    //         b : '',
    //         c : '',
    //     },
    // });

    // const handleValueChange = (question, subQuestion, selectedValue) => {
    //     if (subQuestion) {
    //       setValue((prevValues) => ({
    //         ...prevValues,
    //         [question]: {
    //           ...prevValues[question],
    //           [subQuestion]: selectedValue,
    //         },
    //       }));
    //     } else {
    //       setValue((prevValues) => ({
    //         ...prevValues,
    //         [question]: selectedValue,
    //       }));
    //     }
    // };

    const sendData = {
        id : query,
        a1 : a1,
        a2 : a2,
        a3 : a3,
        a4 : a4,
        b1 : b1,
        b2 : b2,
        c1 : c1,
        c2 : c2,
        d1 : d1,
        d2 : d2,
        d3 : d3
      }   

      async function lingkungan(){
        const send = await axios.post("/api/survei/Lingkungan",sendData)
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
  
                router.push(`/survei/umum/kesehatan_sosial?id=${query}`)
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
        <div className="relative my-[200px] flex items-center justify-center">

            <div className="xl:w-[980px] lg:w-[980px] h-[1430px] w-[480px] py-[30px] px-[50px] bg-slate-400">
                <h1 className="text-center text-[24px] font-bold">SURVEI NOC</h1>
                <h1 className="font-medium mt-3">I. LINGKUNGAN (FISIK DAN SOSIAL)</h1>
                <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
                <div className="perumahan">
                    <h3>A. Perumahan</h3>
                    <div className="pertanyaan ms-5">
                        <div>
                            <label>a. Kondisi ventilasi rumah:</label>
                            <div className="ms-5">
                                <input type="radio" id="baik" name="kondisi_rumah"  value="Baik" onChange={(e)=> setA1(e.target.value)} /><label htmlFor="baik">Baik</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="cukup" name="kondisi_rumah" value="Cukup" onChange={(e)=> setA1(e.target.value)}/><label htmlFor="cukup">Cukup</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="kurang" name="kondisi_rumah" value="Kurang" onChange={(e)=> setA1(e.target.value)}/><label htmlFor="kurang">Kurang</label>
                            </div>
                        </div>
                        <div>
                            <label>b. Pencahayaan dalam rumah waktu siang hari:</label>
                            <div className="ms-5">
                                <input type="radio" id="terang" name="pencahayaan" value="Terang" onChange={(e)=> setA2(e.target.value)}/><label htmlFor="terang">Terang</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="remang" name="pencahayaan" value="Remang" onChange={(e)=> setA2(e.target.value)}/><label htmlFor="remang">Remang - remang</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="gelap" name="pencahayaan" value="Gelap" onChange={(e)=> setA2(e.target.value)}/><label htmlFor="gelap">Gelap</label>
                            </div>
                        </div>
                        <div>
                            <label>c. Kepadatan dan kebersihan lokasi atau area perumahan:</label>
                            <div className="ms-5">
                                <input type="radio" id="padat" name="kepadatan" value="Padat" onChange={(e)=> setA3(e.target.value)}/><label htmlFor="padat">Padat</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="tidakPadat" name="kepadatan" value="TidakPadat" onChange={(e)=> setA3(e.target.value)}/><label htmlFor="tidakPadat">Tidak Padat</label>
                            </div>
                        </div>
                        <div>
                            <label>d. Kondisi udara area perumahan:</label>
                            <div className="ms-5">
                                <input type="radio" id="sejuk" name="kondisi_udara" value="Sejuk" onChange={(e)=> setA4(e.target.value)}/><label htmlFor="sejuk">Sejuk</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="panas" name="kondisi_udara" value="Panas" onChange={(e)=> setA4(e.target.value)}/><label htmlFor="panas">Panas</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sumberAir">
                    <h3>B. Sumber Air</h3>
                    <div className="pertanyaan ms-5">
                        <div>
                            <label>a. Kondisi air:</label>
                            <div className="ms-5">
                                <input type="radio" id="berwarna" name="kondisi_air" value="Berwarna" onChange={(e)=> setB1(e.target.value)}/><label htmlFor="berwarna">Berwarna</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="berbau" name="kondisi_air" value="Berbau" onChange={(e)=> setB1(e.target.value)}/><label htmlFor="berbau">Berbau</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="berasa" name="kondisi_air" value="Berasa" onChange={(e)=> setB1(e.target.value)}/><label htmlFor="berasa">Berasa</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="tidakBerasa/Berbau" name="kondisi_air" value="tidakBerasa/Berbau" onChange={(e)=> setB1(e.target.value)}/><label htmlFor="tidakBerasa/Berbau">Tidak berasa/tidak berbau</label>
                            </div>
                        </div>
                        <div>
                            <label>b. Terdapat/tidaknya jentik dalam tempat penampungan air:</label>
                            <div className="ms-5">
                                <input type="radio" id="ya" value="Ya" name="jentik" onChange={(e)=> setB2(e.target.value)}/><label htmlFor="ya">Ya</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="tidak" value="Tidak" name="jentik" onChange={(e)=> setB2(e.target.value)}/><label htmlFor="tidak">Tidak</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pembuanganSampah">
                    <h3>C. Pembuangan Sampah</h3>
                    <div className="pertanyaan ms-5">
                        <div>
                            <label>a. Dimanakah keluarga membuang sampah:</label>
                            <div className="ms-5">
                                <input type="radio" id="Sungai" name="sampah" value="Sungai" onChange={(e)=> setC1(e.target.value)}/><label htmlFor="Sungai">Sungai</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Ditimbun" name="sampah" value="Ditimbun" onChange={(e)=> setC1(e.target.value)}/><label htmlFor="Ditimbun">Ditimbun</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Laut" name="sampah" value="Laut" onChange={(e)=> setC1(e.target.value)}/><label htmlFor="Laut">Laut</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="PetugasKebersihan" name="sampah" value="PetugasKebersihan" onChange={(e)=> setC1(e.target.value)}/><label htmlFor="PetugasKebersihan">Petugas Kebersihan</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Dibakar" name="sampah" value="Dibakar" onChange={(e)=> setC1(e.target.value)}/><label htmlFor="Dibakar">Dibakar</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="DisembarangTempat" name="sampah" value="DisembarangTempat"  onChange={(e)=> setC1(e.target.value)}/><label htmlFor="DisembarangTempat">Disembarang Tempat</label>
                            </div>
                        </div>
                        <div>
                            <label>b. Kebiasaan keluarga buang air besar:</label>
                            <div className="ms-5">
                                <input type="radio" id="wc" value="WC" name="bab" onChange={(e)=> setC2(e.target.value)}/><label htmlFor="wc">Jamban/WC</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="sungai" value="Sungai" name="bab" onChange={(e)=> setC2(e.target.value)}/><label htmlFor="sungai">Sungai</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lingkunganSosial">
                    <h3>D. Lingkungan Sosial</h3>
                    <div className="pertanyaan ms-5">
                        <div>
                            <label>a. Adakah kegiatan sosial di masyarakat:</label>
                            <div className="ms-5">
                                <input type="radio" id="Ya" value="Ya" name="kegiatan" onChange={(e)=> setD1(e.target.value)}/><label htmlFor="Ya">Ya</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Tidak" value="Tidak" name="kegiatan" onChange={(e)=> setD1(e.target.value)}/><label htmlFor="Tidak">Tidak</label>
                            </div>
                        </div>
                        <div>
                            <label>b. Jenis kegiatan sosial di masyarakat:</label>
                            <div className="ms-5">
                                <input type="radio" id="Pengajian" value="Pengajian" name="jenis_kegiatan" onChange={(e)=> setD2(e.target.value)}/><label htmlFor="Pengajian">Pengajian</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Senam/OlahragaRutin" value="Senam/OlahragaRutin" name="jenis_kegiatan" onChange={(e)=> setD2(e.target.value)}/><label htmlFor="Senam/OlahragaRutin">Senam/Olahraga Rutin</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="BaktiSosial" value="BaktiSosial" name="jenis_kegiatan" onChange={(e)=> setD2(e.target.value)}/><label htmlFor="BaktiSosial">Bakti Sosial</label>
                            </div>
                        </div>
                        <div>
                            <label>c. Apakah keluarga rutin menghadiri kegiatan di masyarakat:</label>
                            <div className="ms-5">
                                <input type="radio" id="Ya" value="Ya" name="rutinan" onChange={(e)=> setD3(e.target.value)}/><label htmlFor="Ya">Ya</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Tidak" value="Tidak" name="rutinan" onChange={(e)=> setD3(e.target.value)}/><label htmlFor="Tidak">Tidak</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-[20px] flex justify-center button-group">
                        <button onClick={(e)=>{e.preventDefault(); lingkungan()}} className="bg-white py-4 xl:px-[400px] lg:px-[400px] px-[120px]">Selanjutnya</button>

                </div>
            </div>
        </div>
    )
}