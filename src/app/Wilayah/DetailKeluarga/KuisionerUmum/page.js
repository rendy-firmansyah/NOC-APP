'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect,useState } from "react";
import { useRouter } from 'next/navigation'
import nookies from "nookies"
import axios from "axios";

const KuisionerUmum = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const id_daerah = searchParams.get('alamat');
    const [ekonomi,setEkonomi] = useState()
    const [komunikasi,setKomunikasi] = useState()
    const [lingkungan,setLingkungan] = useState()
    const [pelayanan_kesehatan,setPelayananKesehatan] = useState()
    const [pendidikan,setPendidikan] = useState()
    const [politik_pemerintahan,setPolitikPemerintahan] = useState()
    const [rekreasi,setRekreasi] = useState()
    const [transportasi_keamanan,setTransportasiKeamanan] = useState()

    const req = {
        id : id
    }

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/surveiUmum/Ekonomi`,req)
            // console.log(fetch.data)
            setEkonomi(fetch.data.data)
        }
        get()
    },[])

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/surveiUmum/Komunikasi`,req)
            // console.log(fetch.data)
            setKomunikasi(fetch.data.data)
        }
        get()
    },[])

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/surveiUmum/Lingkungan`,req)
            // console.log(fetch.data)
            setLingkungan(fetch.data.data)
        }
        get()
    },[])

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/surveiUmum/PelayananKesehatan`,req)
            // console.log(fetch.data)
            setPelayananKesehatan(fetch.data.data)
        }
        get()
    },[])

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/surveiUmum/Pendidikan`,req)
            // console.log(fetch.data)
            setPendidikan(fetch.data.data)
        }
        get()
    },[])

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/surveiUmum/PolitikPemerintahan`,req)
            // console.log(fetch.data)
            setPolitikPemerintahan(fetch.data.data)
        }
        get()
    },[])

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/surveiUmum/Rekreasi`,req)
            // console.log(fetch.data)
            setRekreasi(fetch.data.data)
        }
        get()
    },[])

    useEffect(()=>{
        async function get(){
            const fetch = await axios.post(`/api/get_survei/surveiUmum/TransportasiKeamanan`,req)
            // console.log(fetch.data)
            setTransportasiKeamanan(fetch.data.data)
        }
        get()
    },[])

    return (
        <section className="w-full my-[200px] flex items-center justify-center">
            <div className="w-full">
                <div className="px-[40px]">
                    {/* <Link href="/Wilayah/DetailKeluarga"> */}
                        <button onClick={()=> router.push(`/Wilayah/DetailKeluarga?id=${id}&alamat=${id_daerah}`)} type="" className="p-2 bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover rounded-md font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                        </button>
                    {/* </Link> */}
                    <div className="card mt-5 bg-white border-2 border-bg-btn-orangeHover p-5 rounded-lg shadow-lg w-full">
                        <h1 className="text-center text-[28px] font-bold mb-5 uppercase">Data Kuisioner Umum</h1>
                        <div>
                            <h1 className="text-[18px] font-semibold mb-3 uppercase">I. Lingkungan (Fisik dan Sosial)</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A1. Kondisi ventilasi rumah</th>
                                            <th className="border px-4 py-2">A2. Pencahayaan dalam rumah siang hari</th>
                                            <th className="border px-4 py-2">A3. Kepadatan dan kebersihan lokasi atau area perumahan</th>
                                            <th className="border px-4 py-2">A4. Kondisi udara area perumahan</th>
                                            <th className="border px-4 py-2">B1. Kondisi air</th>
                                            <th className="border px-4 py-2">B2. Terdapat/tidaknya jentik dalam tempat penampungan air</th>
                                            <th className="border px-4 py-2">C1. Dimanakah keluarga membuang sampah</th>
                                            <th className="border px-4 py-2">C2. Kebiasaan keluarga buang air besar</th>
                                            <th className="border px-4 py-2">D1. Adakah kegiatan sosial di masyarakat?</th>
                                            <th className="border px-4 py-2">D2. Jenis kegiatan sosial di masyarakat</th>
                                            <th className="border px-4 py-2">D3. Apakah keluarga rutin menghadiri kegiatan di masyarakat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {lingkungan != null ? (
                                        <tr>
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.A1}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.A2}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.A3}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.A4}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.B1}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.B2}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.C1}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.C2}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.D1}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.D2}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {lingkungan.D3}
                                            </td>
                                        </tr>
                                            ):null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <h1 className="text-[18px] font-semibold mb-3 uppercase">II. PELAYANAN KESEHATAN DAN SOSIAL</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Fasilitas kesehatan yang ada di masyarakat (bisa multipel pilihannya)</th>
                                            <th className="border px-4 py-2">B. Fasilitas pelayanan kesehatan yang paling sering digunakan keluarga?</th>
                                            <th className="border px-4 py-2">C. Berapakah jarak fasilitas kesehatan terdekat dengan rumah</th>
                                            <th className="border px-4 py-2">D. Kebiasaan keluarga sebelum ke pelayanan kesehatan</th>
                                            <th className="border px-4 py-2">E. Sumber pendanaan kesehatan keluarga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {pelayanan_kesehatan != null ? (
                                        <tr>
                                            <td className="border px-4 py-2 text-center">
                                                {pelayanan_kesehatan.A}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {pelayanan_kesehatan.B}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {pelayanan_kesehatan.C}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {pelayanan_kesehatan.D}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {pelayanan_kesehatan.E}
                                            </td>
                                        </tr>
                                            ):null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <h1 className="text-[18px] font-semibold mb-3 uppercase">III. EKONOMI</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Fasilitas perekonomian yang ada di sekitar masyarakat</th>
                                            <th className="border px-4 py-2">B. Penghasilan keluarga rata-rata perbulan</th>
                                            <th className="border px-4 py-2">C. Apakah keluarga menabung</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {ekonomi != null ? (
                                        <tr>
                                            <td className="border px-4 py-2 text-center">
                                                {ekonomi.A}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {ekonomi.B}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {ekonomi.C}
                                            </td>
                                        </tr>
                                            ):null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <h1 className="text-[18px] font-semibold mb-3 uppercase">IV. TRANSPORTASI DAN KEAMANAN</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Jenis transportasi yang dipakai keluarga ke pelayanan kesehatan</th>
                                            <th className="border px-4 py-2">B. Pelayanan perlindungan yang tersedia di masyarakat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {pelayanan_kesehatan != null ? (
                                        <tr>
                                            <td className="border px-4 py-2 text-center">
                                                {pelayanan_kesehatan.A}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {pelayanan_kesehatan.B}
                                            </td>
                                        </tr>
                                            ):null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <h1 className="text-[18px] font-semibold mb-3 uppercase">V. POLITIK DAN PEMERINTAHAN</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Adakan kebijakan atau program pemerintah yang diterapkan di wilayah tersebut mengenai kesehatan masyarakat</th>
                                            <th className="border px-4 py-2">B. Bentuk kebijakan atau program pemerintah yang tersedia</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {politik_pemerintahan != null ? (
                                        <tr>
                                            <td className="border px-4 py-2 text-center">
                                                {politik_pemerintahan.A}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {politik_pemerintahan.B}
                                            </td>
                                        </tr>
                                            ):null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <h1 className="text-[18px] font-semibold mb-3 uppercase">VI. KOMUNIKASI</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Alat komunikasi yang paling sering digunakan keluarga</th>
                                            <th className="border px-4 py-2">B. Sarana komunikasi di masyarakat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {komunikasi != null ? (
                                        <tr>
                                            <td className="border px-4 py-2 text-center">
                                                {komunikasi.A}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {komunikasi.B}
                                            </td>
                                        </tr>
                                            ):null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <h1 className="text-[18px] font-semibold mb-3 uppercase">VII. PENDIDIKAN</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Sarana pendidikan yang ada di sekitar masyarakat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {pendidikan != null ? (
                                        <tr>
                                            <td className="border px-4 py-2 text-center">
                                                {pendidikan.A}
                                            </td> 
                                        </tr>
                                            ):null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <h1 className="text-[18px] font-semibold mb-3 uppercase">VIII. REKREASI</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">A. Sarana rekreasi yang ada di sekitar masyarakat</th>
                                            <th className="border px-4 py-2">B. Apakah keluarga rutin melakukan rekreasi untuk mengurangi tingkat stress?</th>
                                            <th className="border px-4 py-2">C. Bagaimana keluarga memanfaatkan waktu luang?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {rekreasi != null ? (
                                        <tr>
                                            <td className="border px-4 py-2 text-center">
                                                {rekreasi.A}
                                            </td> 
                                            <td className="border px-4 py-2 text-center">
                                                {rekreasi.B}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {rekreasi.C}
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
export default KuisionerUmum
