'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect,useState } from "react";
import { useRouter } from 'next/navigation'
import nookies from "nookies"
import axios from "axios";

const KuisionerKesehatanSD = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const id_kk = searchParams.get('id_kk');
    const id_daerah = searchParams.get('id_daerah');
    const [data,setData] = useState()

    const req = {
        id : id
    }

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/survei_kelompok/AnakSekolah`,req)
            // console.log(fetch.data)
            setData(fetch.data.data)
        }
        get()
    },[])

    return (
        <section className="w-full my-[200px] flex items-center justify-center">
            <div className="w-full">
                <div className="px-[40px]">
                    {/* <Link href="/Wilayah/DetailKeluarga"> */}
                        <button onClick={()=> router.push(`/Wilayah/DetailKeluarga?id=${id_kk}&alamat=${id_daerah}`)} type="" className="p-2 bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover rounded-md font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                        </button>
                    {/* </Link> */}
                    <div className="card mt-5 bg-white border-2 border-bg-btn-orangeHover p-5 rounded-lg shadow-lg w-full">
                        <h1 className="text-center text-[28px] font-bold mb-5 uppercase">Data Kuisioner Anak Sekolah (SD)</h1>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Apakah didalam keluarga mempunyai anak sekolah SD?</th>
                                            <th className="border px-4 py-2">B. Apa Kegiatan anak diluar sekolah?</th>
                                            <th className="border px-4 py-2">C. Adakah Penyakit atau keluhan yang dirasakan anak saat ini?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data != null ? (
                                        <tr>
                                            <td className="border px-4 py-2">
                                                {data.A}
                                            </td> 
                                            <td className="border px-4 py-2">
                                                {data.B}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {data.C}
                                            </td>
                                        </tr>
                                            ):null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default KuisionerKesehatanSD
