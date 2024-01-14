"use client"
import Link from "next/link"
import { useState } from "react"

export default function SurveiPolitik () {
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
            <div className="xl:w-[980px] lg:w-[980px] xl:h-[400px] lg:h-[400px] h-[480px] w-[480px] py-[30px] px-[50px] bg-slate-400">
                <h1 className="text-center text-[24px] font-bold">SURVEI NOC</h1>
                <h1 className="font-medium mt-3">V. POLITIK DAN PEMERINTAHAN</h1>
                <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
                <div className="pertanyaan">
                    <div>
                        <label>A. Adakan kebijakan atau program pemerintah yang diterapkan di wilayah tersebut mengenai kesehatan masyarakat:</label>
                        <div className="ms-5">
                            <input type="radio" id="Ada" value="Ada" checked={value.A === 'Ada'} onChange={() => handleValueChange('A','Ada')}/><label htmlFor="Ada">Ada</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="TidakAda" value="TidakAda" checked={value.A === 'TidakAda'} onChange={() => handleValueChange('A', 'TidakAda')}/><label htmlFor="TidakAda">Tidak Ada</label>
                        </div>
                    </div>
                    <div>
                        <label>B. Bentuk kebijakan atau program pemerintah yang tersedia:</label>
                        <div className="ms-5">
                            <input type="radio" id="PencegahanStunting" value="PencegahanStunting" checked={value.B === 'PencegahanStunting'} onChange={() => handleValueChange('B','PencegahanStunting')}/><label htmlFor="PencegahanStunting">Program pencegahan stunting</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="PemberdayaanMasyarakat" value="PemberdayaanMasyarakat" checked={value.B === 'PemberdayaanMasyarakat'} onChange={() => handleValueChange('B', 'PemberdayaanMasyarakat')}/><label htmlFor="PemberdayaanMasyarakat">Program pemberdayaan masyarakat</label>
                        </div>
                    </div>
                </div>
                <div className="my-[20px] flex justify-center button-group">
                    <Link href="/survei/umum/transportasi_keamanan">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px]">Sebelumnya</button>
                    </Link>
                    <Link href="/survei/umum/komunikasi">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">Selanjutnya</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}