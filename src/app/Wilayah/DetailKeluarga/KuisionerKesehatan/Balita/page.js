'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect,useState } from "react";
import { useRouter } from 'next/navigation'
import nookies from "nookies"
import axios from "axios";

const KuisionerKesehatanBalita = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const id_kk = searchParams.get('id_kk');
    const id_daerah = searchParams.get('id_daerah');

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
                        <h1 className="text-center text-[28px] font-bold mb-5 uppercase">Data Kuisioner Balita</h1>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Apakah ada anggota keluarga yang usianya 0-28 hari?</th>
                                            <th className="border px-4 py-2">B. Apakah ada anggota keluarga balita yang usianya 1 bulan-5 tahun?</th>
                                            <th className="border px-4 py-2">C. Usia berapa pertama kali kontak dengan tenaga kesehatan?</th>
                                            <th className="border px-4 py-2">D. Apakah balita mendapatkan ASI Esklusif?</th>
                                            <th className="border px-4 py-2">E. Apakah setiap bulan balita dibawa ke posyandu?</th>
                                            <th className="border px-4 py-2">F. Apa saja jenis Imunisasi yang sudah didapatkan?</th>
                                            <th className="border px-4 py-2">G. Hasil pengukuran pertumbuhan dan perkembangan Balita</th>
                                            <th className="border px-4 py-2">H. Dari hasil pengukuran tinggi badan berdasarkan usia (TB/U) Status gizi anak saat</th>
                                            <th className="border px-4 py-2">I. Dari hasil pengukuran status gizi di pita KMS, berat badan anak berada pada?</th>
                                            <th className="border px-4 py-2">J. Adakah penyakit atau keluhan yang dirasakan balita saat ini?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        </tr>
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
export default KuisionerKesehatanBalita
