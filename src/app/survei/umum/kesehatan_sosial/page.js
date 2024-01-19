"use client"
import Link from "next/link"
import { useState } from "react"

export default function SurveiKesehatanSosial () {
    const [value, setValue] = useState({
        A : '',
        B : '',
        C : '',
        D : '',
        E : '',
    });

    const handleValueChange = (question, selectedValue) => {
        setValue((prevValues) => ({
          ...prevValues,
          [question]: selectedValue,
        }));
      };
    
    return (
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] xl:h-[1000px] lg:h-[1000px] h-[1100px] w-[480px] py-[30px] px-[50px] bg-white shadow-xl border-2 border-bg-btn-orangeHover flex items-center">
                <div className="xl:w-[880px] lg:w-[880px] md:w-[780px] w-[375px]">
                    <h1 className="text-center text-[32px] font-bold">SURVEI NOC</h1>
                    <h1 className="text-[20px] font-medium mt-3">II. PELAYANAN KESEHATAN DAN SOSIAL</h1>
                    <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                    <div className="pertanyaan">
                        <div className="mb-3">
                            <label>A. Fasilitas kesehatan yang ada di masyarakat (bisa multipel pilihannya):</label>
                            <div className="ms-5">
                                <input type="radio" id="Posyandu/Posbindu" value="Posyandu/Posbindu" checked={value.A === 'Posyandu/Posbindu'} onChange={() => handleValueChange('A', 'Posyandu/Posbindu')}/><label htmlFor="Posyandu/Posbindu">Posyandu/Posbindu</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="DokterPraktik" value="DokterPraktik" checked={value.A === 'DokterPraktik'} onChange={() => handleValueChange('A', 'DokterPraktik')}/><label htmlFor="DokterPraktik">Dokter Praktik</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Puskesmas" value="Puskesmas" checked={value.A === 'Puskesmas'} onChange={() => handleValueChange('A','Puskesmas')}/><label htmlFor="Puskesmas">Puskesmas</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Perawat" value="Perawat" checked={value.A === 'Perawat'} onChange={() => handleValueChange('A','Perawat')}/><label htmlFor="Perawat">Perawat</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="RumahSakit" value="RumahSakit" checked={value.A === 'RumahSakit'} onChange={() => handleValueChange('A','RumahSakit')}/><label htmlFor="RumahSakit">Rumah Sakit</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Bidan" value="Bidan" checked={value.A === 'Bidan'} onChange={() => handleValueChange('A','Bidan')}/><label htmlFor="Bidan">Bidan</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>B. Fasilitas pelayanan kesehatan yang paling sering digunakan keluarga:</label>
                            <div className="ms-5">
                                <input type="radio" id="B-Posyandu/Posbindu" value="Posyandu/Posbindu" checked={value.B === 'Posyandu/Posbindu'} onChange={() => handleValueChange('B', 'Posyandu/Posbindu')}/><label htmlFor="B-Posyandu/Posbindu">Posyandu/Posbindu</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="B-DokterPraktik" value="DokterPraktik" checked={value.B === 'DokterPraktik'} onChange={() => handleValueChange('B', 'DokterPraktik')}/><label htmlFor="B-DokterPraktik">Dokter Praktik</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="B-Puskesmas" value="Puskesmas" checked={value.B === 'Puskesmas'} onChange={() => handleValueChange('B','Puskesmas')}/><label htmlFor="B-Puskesmas">Puskesmas</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="B-Perawat" value="Perawat" checked={value.B === 'Perawat'} onChange={() => handleValueChange('B','Perawat')}/><label htmlFor="B-Perawat">Perawat</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="B-RumahSakit" value="RumahSakit" checked={value.B === 'RumahSakit'} onChange={() => handleValueChange('B','RumahSakit')}/><label htmlFor="B-RumahSakit">Rumah Sakit</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="B-Bidan" value="Bidan" checked={value.B === 'Bidan'} onChange={() => handleValueChange('B','Bidan')}/><label htmlFor="B-Bidan">Bidan</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>C. Berapakah jarak fasilitas kesehatan terdekat dengan rumah:</label>
                            <div className="ms-5">
                                <input type="radio" id="Kurangdari1km" value="Kurangdari1km" checked={value.C === 'Kurangdari1km'} onChange={() => handleValueChange('C','Kurangdari1km')}/><label htmlFor="Kurangdari1km">Kurang dari 1km</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Lebihdari1km" value="Lebihdari1km" checked={value.C === 'Lebihdari1km'} onChange={() => handleValueChange('C', 'Lebihdari1km')}/><label htmlFor="Lebihdari1km">Lebih dari 1km</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>D. Kebiasaan keluarga sebelum ke pelayanan kesehatan:</label>
                            <div className="ms-5">
                                <input type="radio" id="BeliObatBebas" value="BeliObatBebas" checked={value.D === 'BeliObatBebas'} onChange={() => handleValueChange('D', 'BeliObatBebas')}/><label htmlFor="BeliObatBebas">Beli Obat Bebas</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Jamu" value="Jamu" checked={value.D === 'Jamu'} onChange={() => handleValueChange('D', 'Jamu')}/><label htmlFor="Jamu">Jamu</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="BegitusakitlangsungkeFaskes" value="BegitusakitlangsungkeFaskes" checked={value.D === 'BegitusakitlangsungkeFaskes'} onChange={() => handleValueChange('D', 'BegitusakitlangsungkeFaskes')}/><label htmlFor="BegitusakitlangsungkeFaskes">Begitu sakit langsung ke Faskes</label>
                            </div>
                        </div>
                        <div>
                            <label>E. Sumber pendanaan kesehatan keluarga:</label>
                            <div className="ms-5">
                                <input type="radio" id="BPJS" value="BPJS" checked={value.E === 'BPJS'} onChange={() => handleValueChange('E', 'BPJS')}/><label htmlFor="BPJS">BPJS (Jamkesmas, Askes, dll)</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="DanaSehat" value="DanaSehat" checked={value.E === 'DanaSehat'} onChange={() => handleValueChange('E', 'DanaSehat')}/><label htmlFor="DanaSehat">Dana Sehat</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="TidakAda" value="TidakAda" checked={value.E === 'TidakAda'} onChange={() => handleValueChange('E', 'TidakAda')}/><label htmlFor="TidakAda">Tidak Ada</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Tabungan" value="Tabungan" checked={value.E === 'Tabungan'} onChange={() => handleValueChange('E', 'Tabungan')}/><label htmlFor="Tabungan">Tabungan</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-[20px] flex justify-center button-group">
                        <Link href="/survei/umum/fisik_sosial">
                            <button className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold py-4 xl:px-[175px] lg:px-[175px] px-[50px]">SEBELUMNYA</button>
                        </Link>
                        <Link href="/survei/umum/ekonomi">
                            <button className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">SELANJUTNYA</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}