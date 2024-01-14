"use client"
import Link from "next/link"
import { useState } from "react"

export default function SurveiTransportasi () {
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
            <div className="xl:w-[980px] lg:w-[980px] xl:h-[460px] lg:h-[460px] h-[480px] w-[480px] py-[30px] px-[50px] bg-slate-400">
                <h1 className="text-center text-[24px] font-bold">SURVEI NOC</h1>
                <h1 className="font-medium mt-3">IV. TRANSPORTASI DAN KEAMANAN</h1>
                <div className="line w-full h-[5px] bg-yellow-500 my-2 mb-3"></div>
                <div className="pertanyaan">
                    <div>
                        <label>A. Jenis transportasi yang dipakai keluarga ke pelayanan kesehatan:</label>
                        <div className="ms-5">
                            <input type="radio" id="Pribadi" value="Pribadi" checked={value.A === 'Pribadi'} onChange={() => handleValueChange('A','Pribadi')}/><label htmlFor="Pribadi">Kendaraan Pribadi (sepeda motor, mobil)</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Umum" value="Umum" checked={value.A === 'Umum'} onChange={() => handleValueChange('A', 'Umum')}/><label htmlFor="Umum">Kendaraan Umum (angkot, taxi, ojek, dll)</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Desa" value="Desa" checked={value.A === 'Desa'} onChange={() => handleValueChange('A', 'Desa')}/><label htmlFor="Desa">Kendaraan Desa (ambulans)</label>
                        </div>
                    </div>
                    <div>
                        <label>B. Pelayanan perlindungan yang tersedia di masyarakat:</label>
                        <div className="ms-5">
                            <input type="radio" id="Ambulance" value="Ambulance" checked={value.B === 'Ambulance'} onChange={() => handleValueChange('B','Ambulance')}/><label htmlFor="Ambulance">Ambulance desa 24 Jam</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="PosKamling" value="PosKamling" checked={value.B === 'PosKamling'} onChange={() => handleValueChange('B', 'PosKamling')}/><label htmlFor="PosKamling">Pos Kamling</label>
                        </div>
                        <div className="ms-5">
                            <input type="radio" id="Polsek" value="Polsek" checked={value.B === 'Polsek'} onChange={() => handleValueChange('B', 'Polsek')}/><label htmlFor="Polsek">Polsek/Polres</label>
                        </div>
                    </div>
                </div>
                <div className="my-[20px] flex justify-center button-group">
                    <Link href="/survei/umum/ekonomi">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px]">Sebelumnya</button>
                    </Link>
                    <Link href="/survei/umum/politik_pemerintahan">
                        <button className="bg-white py-4 xl:px-[175px] lg:px-[175px] px-[50px] ms-3">Selanjutnya</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}