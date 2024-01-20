"use client"
import Link from "next/link"
import { useState } from "react"

export default function SurveiPendidikan () {
    const [value, setValue] = useState({
        A : '',
    });

    const handleValueChange = (question, selectedValue) => {
        setValue((prevValues) => ({
          ...prevValues,
          [question]: selectedValue,
        }));
    };

    return (
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] xl:h-[400px] lg:h-[400px] h-[400px] w-[480px] py-[30px] px-[50px] bg-white shadow-xl border-2 border-bg-btn-orangeHover flex items-center">
                <div className="xl:w-[880px] lg:w-[880px] md:w-[780px] w-[375px]">
                    <h1 className="text-center text-[32px] font-bold">SURVEI NOC</h1>
                    <h1 className="text-[20px] font-medium mt-3">VII. PENDIDIKAN</h1>
                    <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                    <div className="pertanyaan">
                        <div>
                            <label>A. Sarana pendidikan yang ada di sekitar masyarakat:</label>
                            <div className="ms-5">
                                <input type="radio" id="Sekolah/Madrasah" value="Sekolah/Madrasah" checked={value.A === 'Sekolah/Madrasah'} onChange={() => handleValueChange('A','Sekolah/Madrasah')}/><label htmlFor="Sekolah/Madrasah">Sekolah/Madrasah</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="TPA/TPQ" value="TPA/TPQ" checked={value.A === 'TPA/TPQ'} onChange={() => handleValueChange('A', 'TPA/TPQ')}/><label htmlFor="TPA/TPQ">TPA/TPQ</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="BalaiDesa/Kecamatan" value="BalaiDesa/Kecamatan" checked={value.A === 'BalaiDesa/Kecamatan'} onChange={() => handleValueChange('A', 'BalaiDesa/Kecamatan')}/><label htmlFor="BalaiDesa/Kecamatan">Balai Desa/Kecamatan</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Masjid/Musholla" value="Masjid/Musholla" checked={value.A === 'Masjid/Musholla'} onChange={() => handleValueChange('A', 'Masjid/Musholla')}/><label htmlFor="Masjid/Musholla">Masjid/Musholla</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-[20px] flex justify-center button-group">
                        <Link href="/survei/umum/komunikasi">
                            <button className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold py-4 xl:px-[175px] lg:px-[175px] px-[50px]">SEBELUMNYA</button>
                        </Link>
                        <Link href="/survei/umum/rekreasi">
                            <button className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">SELANJUTNYA</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}