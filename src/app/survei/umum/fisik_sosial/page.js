"use client"
import Link from "next/link"
import { useState } from "react"

export default function SurveiFisikSosial () {
    const [value, setValue] = useState({
        A : {
            a : '',
            b : '',
            c : '',
            d : '',
        },
        B : {
            a : '',
            b : '',
        },
        C : {
            a : '',
            b : '',
        },
        D : {
            a : '',
            b : '',
            c : '',
        },
    });

    const handleValueChange = (question, subQuestion, selectedValue) => {
        if (subQuestion) {
          setValue((prevValues) => ({
            ...prevValues,
            [question]: {
              ...prevValues[question],
              [subQuestion]: selectedValue,
            },
          }));
        } else {
          setValue((prevValues) => ({
            ...prevValues,
            [question]: selectedValue,
          }));
        }
    };

    return (
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] xl:h-[1480px] lg:h-[1480px] md:h-[1480px] h-[1640px] w-[480px] py-[30px] px-[50px] bg-white shadow-xl border-2 border-bg-btn-orangeHover flex items-center">
                <div className="xl:w-[880px] lg:w-[880px] md:w-[780px] w-[375px]">
                    <h1 className="text-center text-[32px] font-bold mb-5">SURVEI NOC</h1>
                    <h1 className="text-[20px] font-medium mt-3">I. LINGKUNGAN (FISIK DAN SOSIAL)</h1>
                    <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                    <div className="perumahan mb-3">
                        <h3 className="font-bold text-[18px]">A. Perumahan</h3>
                        <div className="pertanyaan ms-5">
                            <div>
                                <label>a. Kondisi ventilasi rumah:</label>
                                <div className="ms-5">
                                    <input type="radio" id="baik" value="Baik" checked={value.A.a === 'Baik'} onChange={() => handleValueChange('A', 'a', 'Baik')}/><label htmlFor="baik">Baik</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="cukup" value="Cukup" checked={value.A.a === 'Cukup'} onChange={() => handleValueChange('A', 'a', 'Cukup')}/><label htmlFor="cukup">Cukup</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="kurang" value="Kurang" checked={value.A.a === 'Kurang'} onChange={() => handleValueChange('A', 'a', 'Kurang')}/><label htmlFor="kurang">Kurang</label>
                                </div>
                            </div>
                            <div>
                                <label>b. Pencahayaan dalam rumah waktu siang hari:</label>
                                <div className="ms-5">
                                    <input type="radio" id="terang" value="Terang" checked={value.A.b === 'Terang'} onChange={() => handleValueChange('A', 'b', 'Terang')}/><label htmlFor="terang">Terang</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="remang" value="Remang" checked={value.A.b === 'Remang'} onChange={() => handleValueChange('A', 'b', 'Remang')}/><label htmlFor="remang">Remang - remang</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="gelap" value="Gelap" checked={value.A.b === 'Gelap'} onChange={() => handleValueChange('A', 'b', 'Gelap')}/><label htmlFor="gelap">Gelap</label>
                                </div>
                            </div>
                            <div>
                                <label>c. Kepadatan dan kebersihan lokasi atau area perumahan:</label>
                                <div className="ms-5">
                                    <input type="radio" id="padat" value="Padat" checked={value.A.c === 'Padat'} onChange={() => handleValueChange('A', 'c', 'Padat')}/><label htmlFor="padat">Padat</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="tidakPadat" value="TidakPadat" checked={value.A.c === 'TidakPadat'} onChange={() => handleValueChange('A', 'c', 'TidakPadat')}/><label htmlFor="tidakPadat">Tidak Padat</label>
                                </div>
                            </div>
                            <div>
                                <label>d. Kondisi udara area perumahan:</label>
                                <div className="ms-5">
                                    <input type="radio" id="sejuk" value="Sejuk" checked={value.A.d === 'Sejuk'} onChange={() => handleValueChange('A', 'd', 'Sejuk')}/><label htmlFor="sejuk">Sejuk</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="panas" value="Panas" checked={value.A.d === 'Panas'} onChange={() => handleValueChange('A', 'd', 'Panas')}/><label htmlFor="panas">Panas</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sumberAir mb-3">
                        <h3 className="font-bold text-[18px]">B. Sumber Air</h3>
                        <div className="pertanyaan ms-5">
                            <div>
                                <label>a. Kondisi air:</label>
                                <div className="ms-5">
                                    <input type="radio" id="berwarna" value="Berwarna" checked={value.B.a === 'Berwarna'} onChange={() => handleValueChange('B', 'a', 'Berwarna')}/><label htmlFor="berwarna">Berwarna</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="berbau" value="Berbau" checked={value.B.a === 'Berbau'} onChange={() => handleValueChange('B', 'a', 'Berbau')}/><label htmlFor="berbau">Berbau</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="berasa" value="Berasa" checked={value.B.a === 'Berasa'} onChange={() => handleValueChange('B', 'a', 'Berasa')}/><label htmlFor="berasa">Berasa</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="tidakBerasa/Berbau" value="tidakBerasa/Berbau" checked={value.B.a === 'tidakBerasa/Berbau'} onChange={() => handleValueChange('B', 'a', 'tidakBerasa/Berbau')}/><label htmlFor="tidakBerasa/Berbau">Tidak berasa/tidak berbau</label>
                                </div>
                            </div>
                            <div>
                                <label>b. Terdapat/tidaknya jentik dalam tempat penampungan air:</label>
                                <div className="ms-5">
                                    <input type="radio" id="ya" value="Ya" checked={value.B.b === 'Ya'} onChange={() => handleValueChange('B', 'b', 'Ya')}/><label htmlFor="ya">Ya</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="tidak" value="Tidak" checked={value.B.b === 'Tidak'} onChange={() => handleValueChange('B', 'b', 'Tidak')}/><label htmlFor="tidak">Tidak</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pembuanganSampah mb-3">
                        <h3 className="font-bold text-[18px]">C. Pembuangan Sampah</h3>
                        <div className="pertanyaan ms-5">
                            <div>
                                <label>a. Dimanakah keluarga membuang sampah:</label>
                                <div className="ms-5">
                                    <input type="radio" id="Sungai" value="Sungai" checked={value.C.a === 'Sungai'} onChange={() => handleValueChange('C', 'a', 'Sungai')}/><label htmlFor="Sungai">Sungai</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Ditimbun" value="Ditimbun" checked={value.C.a === 'Ditimbun'} onChange={() => handleValueChange('C', 'a', 'Ditimbun')}/><label htmlFor="Ditimbun">Ditimbun</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Laut" value="Laut" checked={value.C.a === 'Laut'} onChange={() => handleValueChange('C', 'a', 'Laut')}/><label htmlFor="Laut">Laut</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="PetugasKebersihan" value="PetugasKebersihan" checked={value.C.a === 'PetugasKebersihan'} onChange={() => handleValueChange('C', 'a', 'PetugasKebersihan')}/><label htmlFor="PetugasKebersihan">Petugas Kebersihan</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Dibakar" value="Dibakar" checked={value.C.a === 'Dibakar'} onChange={() => handleValueChange('C', 'a', 'Dibakar')}/><label htmlFor="Dibakar">Dibakar</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="DisembarangTempat" value="DisembarangTempat" checked={value.C.a === 'DisembarangTempat'} onChange={() => handleValueChange('C', 'a', 'DisembarangTempat')}/><label htmlFor="DisembarangTempat">Disembarang Tempat</label>
                                </div>
                            </div>
                            <div>
                                <label>b. Kebiasaan keluarga buang air besar:</label>
                                <div className="ms-5">
                                    <input type="radio" id="wc" value="WC" checked={value.C.b === 'WC'} onChange={() => handleValueChange('C', 'b', 'WC')}/><label htmlFor="wc">Jamban/WC</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="sungai" value="Sungai" checked={value.C.b === 'Sungai'} onChange={() => handleValueChange('C', 'b', 'Sungai')}/><label htmlFor="sungai">Sungai</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lingkunganSosial">
                        <h3 className="font-bold text-[18px]">D. Lingkungan Sosial</h3>
                        <div className="pertanyaan ms-5">
                            <div>
                                <label>a. Adakah kegiatan sosial di masyarakat:</label>
                                <div className="ms-5">
                                    <input type="radio" id="Ya" value="Ya" checked={value.D.a === 'Ya'} onChange={() => handleValueChange('D', 'a', 'Ya')}/><label htmlFor="Ya">Ya</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Tidak" value="Tidak" checked={value.D.a === 'Tidak'} onChange={() => handleValueChange('D', 'a', 'Tidak')}/><label htmlFor="Tidak">Tidak</label>
                                </div>
                            </div>
                            <div>
                                <label>b. Jenis kegiatan sosial di masyarakat:</label>
                                <div className="ms-5">
                                    <input type="radio" id="Pengajian" value="Pengajian" checked={value.D.b === 'Pengajian'} onChange={() => handleValueChange('D', 'b', 'Pengajian')}/><label htmlFor="Pengajian">Pengajian</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Senam/OlahragaRutin" value="Senam/OlahragaRutin" checked={value.D.b === 'Senam/OlahragaRutin'} onChange={() => handleValueChange('D', 'b', 'Senam/OlahragaRutin')}/><label htmlFor="Senam/OlahragaRutin">Senam/Olahraga Rutin</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="BaktiSosial" value="BaktiSosial" checked={value.D.b === 'BaktiSosial'} onChange={() => handleValueChange('D', 'b', 'BaktiSosial')}/><label htmlFor="BaktiSosial">Bakti Sosial</label>
                                </div>
                            </div>
                            <div>
                                <label>c. Apakah keluarga rutin menghadiri kegiatan di masyarakat:</label>
                                <div className="ms-5">
                                    <input type="radio" id="Ya" value="Ya" checked={value.D.c === 'Ya'} onChange={() => handleValueChange('D', 'c', 'Ya')}/><label htmlFor="Ya">Ya</label>
                                </div>
                                <div className="ms-5">
                                    <input type="radio" id="Tidak" value="Tidak" checked={value.D.c === 'Tidak'} onChange={() => handleValueChange('D', 'c', 'Tidak')}/><label htmlFor="Tidak">Tidak</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-[20px] flex justify-center button-group">
                        <Link href="/survei/umum/kesehatan_sosial">
                            <button className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover py-4 xl:px-[400px] lg:px-[400px] md:px-[280px] px-[120px] text-[20px] font-semibold">SELANJUTNYA</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}