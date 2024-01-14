"use client"
import Link from "next/link"
import { useState } from "react"

export default function SurveiRekreasi () {
    const [value, setValue] = useState({
        A : '',
        B : '',
        C : '',
    });

    const handleValueChange = (question, selectedValue) => {
        setValue((prevValues) => ({
          ...prevValues,
          [question]: selectedValue,
        }));
    };
    
    return (
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] xl:h-[530px] lg:h-[530px] h-[600px] w-[480px] py-[30px] px-[50px] bg-slate-400">
                <h1 className="text-center text-[24px] font-bold">SURVEI NOC</h1>
                <h1 className="font-medium mt-3">VIII. REKREASI</h1>
                <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
                <div className="pertanyaan">
                    <div>
                        <label>A. Sarana rekreasi yang ada di sekitar masyarakat:</label>
                        <div className="ms-5">
                            <input type="radio" id="Ada" value="Ada" checked={value.A === 'Ada'} onChange={() => handleValueChange('A','Ada')}/><label htmlFor="Ada">Ada</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="TidakAda" value="TidakAda" checked={value.A === 'TidakAda'} onChange={() => handleValueChange('A', 'TidakAda')}/><label htmlFor="TidakAda">Tidak Ada</label>
                        </div>
                    </div>
                    <div>
                        <label>B. Apakah keluarga rutin melakukan rekreasi untuk mengurangi tingkat stress:</label>
                        <div className="ms-5">
                            <input type="radio" id="Ya" value="Ya" checked={value.B === 'Ya'} onChange={() => handleValueChange('B','Ya')}/><label htmlFor="Ya">Ya</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Tidak" value="Tidak" checked={value.B === 'Tidak'} onChange={() => handleValueChange('B', 'Tidak')}/><label htmlFor="Tidak">Tidak</label>
                        </div>
                    </div>
                    <div>
                        <label>C. Bagaimana keluarga memanfaatkan waktu luang:</label>
                        <div className="ms-5">
                            <input type="radio" id="Jalan-jalan" value="Jalan-jalan" checked={value.C === 'Jalan-jalan'} onChange={() => handleValueChange('C','Jalan-jalan')}/><label htmlFor="Jalan-jalan">Jalan-jalan</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Olahraga" value="Olahraga" checked={value.C === 'Olahraga'} onChange={() => handleValueChange('C', 'Olahraga')}/><label htmlFor="Olahraga">Olahraga</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="BersamaKeluarga" value="BersamaKeluarga" checked={value.C === 'BersamaKeluarga'} onChange={() => handleValueChange('C', 'BersamaKeluarga')}/><label htmlFor="BersamaKeluarga">Berkumpul bersama anggota keluarga</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Tidur" value="Tidur" checked={value.C === 'Tidur'} onChange={() => handleValueChange('C', 'Tidur')}/><label htmlFor="Tidur">Tidur</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="MenontonTV" value="MenontonTV" checked={value.C === 'MenontonTV'} onChange={() => handleValueChange('C', 'MenontonTV')}/><label htmlFor="MenontonTV">Menonton TV</label>
                        </div>
                    </div>
                </div>
                <div className="my-[20px] flex justify-center button-group">
                    <Link href="/survei/umum/pendidikan">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px]">Sebelumnya</button>
                    </Link>
                    <Link href="">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}