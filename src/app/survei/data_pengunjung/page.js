'use client'

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function data_pengunjung() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');
    const [data,setData] = useState()
    const id = {
        id:Number(query)
    }
    console.log(query)
    useEffect(() => {
        async function getData() {
            const fetch = await axios.patch('/api/survei/datadiri', id)
            setData(fetch.data.get_data[0].anggota_keluarga)
        }
        getData()
    },[]) 
    
    function kirimdata(){
        router.push(`/survei/add_data_diri?id=${query}`)
    }

    function kirimdata1(){
        router.push(`/survei/umum/fisik_sosial?id=${query}`)
    }

    console.log(data)
    return (

        <div className="my-[200px]">
        <div className="mx-5 pt-1 pb-10 bg-slate-100 shadow-xl border-2 border-bg-btn-orangeHover  xs:w-full">
            <div className="w-full xs:w-full mb-12 px-4 mt-24 mx-auto">
            <h3 className="sm:mb-2 font-bold text-2xl text-blueGray-700 text-center uppercase mb-8">Data Anggota Keluarga</h3>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded">

                <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-col sm:flex-row items-center">
                    <div className="sm:mt-1 relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button onClick={(e)=>{e.preventDefault(); kirimdata()}} className="sm:mt-2 bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tambah Anggota</button>
                    </div>
                </div>
                </div>

                <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse responsive-table">
                    <thead>
                    <tr>
                    <th className="xs:table-cell px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Nama
                                    </th>
                    <th className="xs:table-cell px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    NIK
                                    </th>
                    <th className="xs:table-cell px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Survey Kesehatan
                                    </th>
                    <th className="xs:table-cell px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Status Kesehatan
                                    </th>
                    </tr>
                    </thead>

                    <tbody>
                        {data != null ? (
                            data.map((item) => (
                                <tr className="xs:table-cell border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 " key={item.id}>
                                <td className="xs:table-cell border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.nama}</td>
                                <td className="xs:table-cell border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.nik}</td>
                                <td className="xs:table-cell font-semibold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {item.kelompok_kesehatan === "Ibu_hamil" ? (
                                            <button onClick={()=>router.push(`/survei/kelompok_kesehatan/IbuHamil?id=${item.id}&idk=${query}`)} type="submit" className="w-32 py-2 mx-auto font-extrabold bg-gray-300 text-red-950 rounded-xl">
                                                Isi Survey
                                            </button>
                                    ) : item.kelompok_kesehatan === "Ibu_menyusui" ? (
                                        <button onClick={()=>router.push(`/survei/kelompok_kesehatan/IbuMenyusui?id=${item.id}&idk=${query}`)} type="submit" className="w-32 py-2 mx-auto font-extrabold bg-gray-300 text-red-950 rounded-xl">
                                            Isi Survey
                                        </button>
                                    ) : item.kelompok_kesehatan === "Balita" ? (
                                        <button onClick={()=>router.push(`/survei/kelompok_kesehatan/Balita?id=${item.id}&idk=${query}`)} type="submit" className="w-32 py-2 mx-auto font-extrabold bg-gray-300 text-red-950 rounded-xl">
                                            Isi Survey
                                        </button>
                                    ): item.kelompok_kesehatan === "Anak_sd" ? (
                                        <button onClick={()=>router.push(`/survei/kelompok_kesehatan/AnakSekolah?id=${item.id}&idk=${query}`)} type="submit" className="w-32 py-2 mx-auto font-extrabold bg-gray-300 text-red-950 rounded-xl">
                                            Isi Survey
                                        </button>
                                    ): item.kelompok_kesehatan === "Remaja" ? (
                                        <button onClick={()=>router.push(`/survei/kelompok_kesehatan/Remaja?id=${item.id}&idk=${query}`)} type="submit" className="w-32 py-2 mx-auto font-extrabold bg-gray-300 text-red-950 rounded-xl">
                                            Isi Survey
                                        </button>
                                    ): item.kelompok_kesehatan === "Dewasa" ? (
                                        <button onClick={()=>router.push(`/survei/kelompok_kesehatan/Dewasa?id=${item.id}&idk=${query}`)} type="submit" className="w-32 py-2 mx-auto font-extrabold bg-gray-300 text-red-950 rounded-xl">
                                            Isi Survey
                                        </button>
                                    ): item.kelompok_kesehatan === "Lansia" ? (
                                        <button onClick={()=>router.push(`/survei/kelompok_kesehatan/UsiaLanjut?id=${item.id}&idk=${query}`)} type="submit" className="w-32 py-2 mx-auto font-extrabold bg-gray-300 text-red-950 rounded-xl">
                                            Isi Survey
                                        </button>
                                    ): null}
                                </td>
                                <td className="xs:table-cell border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {item.status === true ? (
                                    <button type="submit" className="w-32 py-2 mx-auto font-extrabold bg-green-300 text-green-950 rounded-xl">
                                        Selesai
                                    </button>
                                ) : (
                                    <button type="submit" className="w-32 py-2 mx-auto font-extrabold bg-red-300 text-red-950 rounded-xl">
                                        Belum Selesai
                                    </button>
                                )}
                                </td>
                                </tr>
                                )
                                )
                        ): null}
                    {/* <tr>
                        <th className="xs:table-cell border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            Slepet manja
                        </th>
                        
                        <td className="xs:table-cell border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            31212121
                        </td>

                        <td className="xs:table-cell border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            link survey
                        </td>

                        <td className="xs:table-cell border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button type="submit" className="w-32 py-2 mx-auto font-extrabold bg-red-300 text-red-950 rounded-xl">
                                Belum Selesai
                            </button>
                        </td>
                    </tr> */}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        <div className="flex justify-end mx-5">

            <button type="submit" onClick={(e)=>{e.preventDefault(); kirimdata1()}} className="w-52 py-5 mb-5 mt-10 font-extrabold content-end bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px]">
                Isi survey Umum
            </button>

        </div>
      </div>
    )
}