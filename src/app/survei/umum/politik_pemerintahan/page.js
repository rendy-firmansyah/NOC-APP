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
            <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] xl:h-[450px] lg:h-[450px] h-[550px] w-[480px] py-[30px] px-[50px] bg-white shadow-xl border-2 border-bg-btn-orangeHover flex items-center">
                <div className="xl:w-[880px] lg:w-[880px] md:w-[780px] w-[375px]">
                    <h1 className="text-center text-[32px] font-bold">SURVEI NOC</h1>
                    <h1 className="text-[20px] font-medium mt-3">V. POLITIK DAN PEMERINTAHAN</h1>
                    <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                    <div className="pertanyaan">
                        <div className="mb-3">
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
                            <button className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold py-4 xl:px-[175px] lg:px-[175px] px-[50px]">SEBELUMNYA</button>
                        </Link>
                        <Link href="/survei/umum/komunikasi">
                            <button className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">SELANJUTNYA</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}