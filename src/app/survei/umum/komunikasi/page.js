"use client"
import Link from "next/link"
import { useState } from "react"

export default function SurveiKomunikasi () {
    const [value, setValue] = useState({
        A : '',
        B : '',
    });

    const handleValueChange = (question, selectedValue) => {
        setValue((prevValues) => ({
          ...prevValues,
          [question]: selectedValue,
        }));
    };

    return (
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] xl:h-[440px] lg:h-[440px] h-[480px] w-[480px] py-[30px] px-[50px] bg-slate-400">
                <h1 className="text-center text-[24px] font-bold">SURVEI NOC</h1>
                <h1 className="font-medium mt-3">VI. KOMUNIKASI</h1>
                <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
                <div className="pertanyaan">
                    <div>
                        <label>A. Alat komunikasi yang paling sering digunakan keluarga:</label>
                        <div className="ms-5">
                            <input type="radio" id="Telepon" value="Telepon" checked={value.A === 'Telepon'} onChange={() => handleValueChange('A','Telepon')}/><label htmlFor="Telepon">Telepon/HP</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="TidakPunya" value="TidakPunya" checked={value.A === 'TidakPunya'} onChange={() => handleValueChange('A', 'TidakPunya')}/><label htmlFor="TidakPunya">Tidak punya alat komunikasi</label>
                        </div>
                    </div>
                    <div>
                        <label>B. Sarana komunikasi di masyarakat:</label>
                        <div className="ms-5">
                            <input type="radio" id="PengerasSuara" value="PengerasSuara" checked={value.B === 'PengerasSuara'} onChange={() => handleValueChange('B','PengerasSuara')}/><label htmlFor="PengerasSuara">Pengeras suara masjid</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Mading" value="Mading" checked={value.B === 'Mading'} onChange={() => handleValueChange('B', 'Mading')}/><label htmlFor="Mading">Mading</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="BalaiRW" value="BalaiRW" checked={value.B === 'BalaiRW'} onChange={() => handleValueChange('B', 'BalaiRW')}/><label htmlFor="BalaiRW">Balai RW</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="MediaKomunikasi" value="MediaKomunikasi" checked={value.B === 'MediaKomunikasi'} onChange={() => handleValueChange('B', 'MediaKomunikasi')}/><label htmlFor="MediaKomunikasi">Media Komunikasi (whatsapp, dll)</label>
                        </div>
                    </div>
                </div>
                <div className="my-[20px] flex justify-center button-group">
                    <Link href="/survei/umum/politik_pemerintahan">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px]">Sebelumnya</button>
                    </Link>
                    <Link href="/survei/umum/pendidikan">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">Selanjutnya</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}