"use client"
import Link from "next/link"
import { useState } from "react"

export default function SurveiEkonomi () {
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
            <div className="xl:w-[980px] lg:w-[980px] xl:h-[480px] lg:h-[480px] h-[480px] w-[480px] py-[30px] px-[50px] bg-slate-400">
                <h1 className="text-center text-[24px] font-bold">SURVEI NOC</h1>
                <h1 className="font-medium mt-3">III. EKONOMI</h1>
                <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
                <div className="pertanyaan">
                    <div>
                        <label>A. Fasilitas perekonomian yang ada di sekitar masyarakat:</label>
                        <div className="ms-5">
                            <input type="radio" id="Ada" value="Ada" checked={value.A === 'Ada'} onChange={() => handleValueChange('A','Ada')}/><label htmlFor="Ada">Ada</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="TidakAda" value="TidakAda" checked={value.A === 'TidakAda'} onChange={() => handleValueChange('A', 'TidakAda')}/><label htmlFor="TidakAda">Tidak Ada</label>
                        </div>
                    </div>
                    <div>
                        <label>B. Penghasilan keluarga rata-rata perbulan:</label>
                        <div className="ms-5">
                            <input type="radio" id="KurangdariUMR" value="KurangdariUMR" checked={value.B === 'KurangdariUMR'} onChange={() => handleValueChange('B','KurangdariUMR')}/><label htmlFor="KurangdariUMR">Kurang dari UMR  (Rp. 2.355.000.-)</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="LebihdariUMR" value="LebihdariUMR" checked={value.B === 'LebihdariUMR'} onChange={() => handleValueChange('B', 'LebihdariUMR')}/><label htmlFor="LebihdariUMR">Lebih dari UMR  (Rp. 2.355.000.-)</label>
                        </div>
                    </div>
                    <div>
                        <label>C. Apakah keluarga menabung:</label>
                        <div className="ms-5">
                            <input type="radio" id="Ya" value="Ya" checked={value.C === 'Ya'} onChange={() => handleValueChange('C','Ya')}/><label htmlFor="Ya">Ya</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Tidak" value="Tidak" checked={value.C === 'Tidak'} onChange={() => handleValueChange('C', 'Tidak')}/><label htmlFor="Tidak">Tidak</label>
                        </div>
                    </div>
                </div>
                <div className="my-[20px] flex justify-center button-group">
                    <Link href="/survei/umum/kesehatan_sosial">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px]">Sebelumnya</button>
                    </Link>
                    <Link href="/survei/umum/transportasi_keamanan">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">Selanjutnya</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}