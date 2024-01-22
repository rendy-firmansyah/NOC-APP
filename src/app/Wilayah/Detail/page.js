'use client'
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect,useState } from "react";
import Chart from "./chart";
import nookies from "nookies"
import Lingkunganchart from "./chartLingkungan"
import { useRouter } from 'next/navigation'


const DetailWilayah = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id_alamat = searchParams.get('id');
    const [data,setData] = useState()
    const [chart,setChart] = useState()
    const [lingkungan,setLingkungan] = useState()
    const [ekonomi,setEkonomi] = useState()
    const [komunikasi,setKomunikasi] = useState()
    const [pelayanan_kesehatan,setPelayananKesehatan] = useState()
    const [pendidikan,setPendidikan] = useState()
    const [politik_pemerintahan,setPolitikPemerintahan] = useState()
    const [rekreasi,setRekreasi] = useState()
    const [transportasi_keamanan,setTransportasiKeamanan] = useState()

    const req = {
        id_alamat : id_alamat
    }
    const body = {
        id : id_alamat
    }

    useEffect(()=>{
        const cookies = nookies.get()
        if(!cookies.token){
            router.push("/login")
        }
        async function get(){
            const fetch = await axios.post("/api/dashboard/DataWilayah",req)
            setData(fetch.data.data)    
        }
        async function get_chart(){
            const fetch = await axios.post("/api/dashboard/chart",body)
            setChart(fetch.data.result)
        }
        async function get_chart_lingkungan(){
            const fetch = await axios.post("/api/dashboard/chart/Lingkungan",body)
            // console.log(fetch.data)
            setLingkungan(fetch.data)
        }
        async function get_chart_ekonomi(){
            const fetch = await axios.post("/api/dashboard/chart/Ekonomi",body)
            // console.log(fetch.data)
            setEkonomi(fetch.data)
        }
        
        async function get_chart_komunikasi(){
            const fetch = await axios.post("/api/dashboard/chart/Komunikasi",body)
            // console.log(fetch.data)
            setKomunikasi(fetch.data)
        }

        async function get_chart_pelayanan_kesehatan(){
            const fetch = await axios.post("/api/dashboard/chart/Pelayanan",body)
            // console.log(fetch.data)
            setPelayananKesehatan(fetch.data)
        }
        async function get_chart_pendidikan(){
            const fetch = await axios.post("/api/dashboard/chart/Pendidikan",body)
            // console.log(fetch.data)
            setPendidikan(fetch.data)
        }
        async function get_chart_politik_pemerintahan(){
            const fetch = await axios.post("/api/dashboard/chart/Politik",body)
            // console.log(fetch.data)
            setPolitikPemerintahan(fetch.data)
        }
        async function get_chart_rekreasi(){
            const fetch = await axios.post("/api/dashboard/chart/Rekreasi",body)
            // console.log(fetch.data)
            setRekreasi(fetch.data)
        }
        async function get_chart_transportasi_keamanan(){
            const fetch = await axios.post("/api/dashboard/chart/TransportasiKeamanan",body)
            // console.log(fetch.data)
            setTransportasiKeamanan(fetch.data)
        }
        get_chart_lingkungan()
        get_chart_ekonomi()
        get_chart_komunikasi()
        get_chart_pelayanan_kesehatan()
        get_chart_pendidikan()
        get_chart_politik_pemerintahan()
        get_chart_rekreasi()
        get_chart_transportasi_keamanan()
        get_chart()
        get()
    },[])
    // console.log(lingkungan )


    return (
        <>
            <section className="w-full my-[200px] flex items-center justify-center">

                <div className="w-full">
                    <div className="px-[40px]">
                        <Link href="/Wilayah">
                            <button type="" className="p-2 bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover rounded-md font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                            </button>
                        </Link>
                        
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-9 lg:col-span-12 md:col-span-12 col-span-12">
                                <div className="card mt-5 bg-white border-2 border-bg-btn-orangeHover p-5 rounded-lg shadow-lg w-full">
                                    <div className="lg:flex lg:justify-between my-5 items-center">
                                        <span><h1 className="text-[28px] font-bold uppercase">Data Partisipasi Survei NOC</h1></span>
                                        <span className="flex gap-3">
                                            <button type="" className="py-2 bg-green-500 px-5 text-sm rounded-lg text-white font-semibold border-2 shadow-md hover:bg-green-700 transition-all duration-300">Layak</button>
                                            <button type="" className="py-2 bg-red-500 px-5 text-sm rounded-lg text-white font-semibold border-2 shadow-md hover:bg-red-700 transition-all duration-300">Tidak Layak</button>
                                        </span>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table class="table-auto w-full">
                                            <thead>
                                                <tr>
                                                    <th class="border px-4 py-2">No</th>
                                                    <th class="border px-4 py-2">Nomor KK</th>
                                                    <th class="border px-4 py-2">Kepala Keluarga</th>
                                                    <th class="border px-4 py-2">Alamat</th>
                                                    <th class="border px-4 py-2">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data != null ? (
                                                    data.map((item,index) => (
                                                    <tr key={item.id}>
                                                    <td class="border text-center px-4 py-2">{index+1}</td>
                                                    <td class="border text-center px-4 py-2">{item.no_kk}</td>
                                                    <td class="border text-center px-4 py-2">{item.anggota_keluarga[0].nama}</td>
                                                    <td class="border text-center px-4 py-2">{item.wilayah.nama}</td>
                                                    <td className="border flex justify-center p-2 gap-3">
                                                        {/* <Link href="/Wilayah/DetailKeluarga"> */}
                                                            <button onClick={()=> router.push(`/Wilayah/DetailKeluarga?id=${item.id}&alamat=${id_alamat}`)} type="" className="bg-cyan-400 px-2 py-1 rounded-md flex items-center hover:bg-cyan-200 transition-all duration-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                                </svg>
                                                                <span className="ms-2 text-sm">Cek Detail Kuisioner</span>
                                                            </button>
                                                        {/* </Link> */}
                                                    </td>
                                                </tr>
                                                ))
                                                ):null}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 lg:col-span-12 md:col-span-12 col-span-12 flex justify-center mb-20">
                                <div className="relative card mt-5 bg-white border-2 border-bg-btn-orangeHover p-5 rounded-lg shadow-lg h-[300px] w-[300px]">
                                    <h1 className="text-center text-[28px] font-bold uppercase">Data Chart</h1>
                                    <Chart props={chart} />
                                    <div className="flex flex-wrap justify-center">
                                        <div className="flex items-center">
                                            <span className="w-[12px] h-[12px] bg-[#0088FE]"></span><span className="text-[12px] ms-[4px]">Banyaknya kk</span>
                                        </div>
                                        <div className="flex items-center ms-2">
                                            <span className="w-[12px] h-[12px] bg-[#00C49F]"></span><span className="text-[12px] ms-[4px]">SD</span>
                                        </div>
                                        <div className="flex items-center ms-2">
                                            <span className="w-[12px] h-[12px] bg-[#f70808]"></span><span className="text-[12px] ms-[4px]">Balita</span>
                                        </div>
                                        <div className="flex items-center ms-2">
                                            <span className="w-[12px] h-[12px] bg-[#FF8042]"></span><span className="text-[12px] ms-[4px]">Dewasa</span>
                                        </div>
                                        <div className="flex items-center ms-2">
                                            <span className="w-[12px] h-[12px] bg-[#FFE599]"></span><span className="text-[12px] ms-[4px]">Ibu Hamil</span>
                                        </div>
                                        <div className="flex items-center ms-2">
                                            <span className="w-[12px] h-[12px] bg-[#F938F5]"></span><span className="text-[12px] ms-[4px]">Ibu Menyusui</span>
                                        </div>
                                        <div className="flex items-center ms-2">
                                            <span className="w-[12px] h-[12px] bg-[#006B76]"></span><span className="text-[12px] ms-[4px]">Remaja</span>
                                        </div>
                                        <div className="flex items-center ms-2">
                                            <span className="w-[12px] h-[12px] bg-[#452209]"></span><span className="text-[12px] ms-[4px]">Lansia</span>
                                        </div>
                                    </div>
                                </div>
                              
                                {/* <BarChartComponent data={lingkungan} /> */}
                            </div>
                            {lingkungan != null ?(
                                <div className="md:col-span-12 flex-col grid grid-cols-12 gap-4 mt-10">
                                    <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                        <h1 className="mb-5 font-bold uppercase text-lg bg-bg-chart py-2 text-white rounded text-center">Grafis Data Segi Ekonomi</h1>
                                        <Lingkunganchart data={ekonomi} />
                                    </div>
                                    <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                        <h1 className="mb-5 font-bold uppercase text-lg bg-bg-chart py-2 text-white rounded text-center">Grafis Data Segi Pendidikan</h1>
                                        <Lingkunganchart data={pendidikan} />
                                    </div>
                                    <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                        <h1 className="mb-5 font-bold uppercase text-lg bg-bg-chart py-2 text-white rounded text-center">Grafis Data Segi Lingkungan</h1>
                                        <Lingkunganchart data={lingkungan}/>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                        <h1 className="mb-5 font-bold uppercase text-lg bg-bg-chart py-2 text-white rounded text-center">Grafis Data Segi Rekreasi</h1>
                                        <Lingkunganchart data={rekreasi} />
                                    </div>
                                    <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                        <h1 className="mb-5 font-bold uppercase text-lg bg-bg-chart py-2 text-white rounded text-center">Grafis Data Segi Transportasi</h1>
                                        <Lingkunganchart data={transportasi_keamanan} />
                                    </div>
                                    <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                        <h1 className="mb-5 font-bold uppercase text-lg bg-bg-chart py-2 text-white rounded text-center">Grafis Data Segi Pemerintahan</h1>
                                        <Lingkunganchart data={politik_pemerintahan} />
                                    </div>
                                    <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                        <h1 className="mb-5 font-bold uppercase text-lg bg-bg-chart py-2 text-white rounded text-center">Grafis Data Segi Kesehatan</h1>
                                        <Lingkunganchart data={pelayanan_kesehatan} />
                                    </div>
                                    <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                        <h1 className="mb-5 font-bold uppercase text-lg bg-bg-chart py-2 text-white rounded text-center">Grafis Data Segi Komunikasi</h1>
                                        <Lingkunganchart data={komunikasi} />
                                    </div>
                                </div>
                                    
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailWilayah;