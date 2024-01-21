'use client'
import Link from "next/link";

const DetailWilayah = () => {
    return (
        <>
            <section className="w-full my-[200px] flex items-center">
                <div className="w-full">
                    <div className="px-[40px]">
                        <Link href="/Wilayah">
                            <button type="" className="p-2 bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover rounded-md font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                            </button>
                        </Link>
                        <div className="card mt-5 bg-white border-2 border-bg-btn-orangeHover p-5 rounded-lg shadow-lg">
                            <div className="">
                                <h1 className="text-center text-[28px] font-bold mb-5 uppercase">Data Partisipasi Survei NOC</h1>
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
                                        <tr>
                                            <td class="border text-center px-4 py-2">1</td>
                                            <td class="border text-center px-4 py-2">3710987625789201</td>
                                            <td class="border text-center px-4 py-2">Ahmad Rizky Febianto</td>
                                            <td class="border text-center px-4 py-2">Sukobumi</td>
                                            <td className="border flex justify-center p-2 gap-3">
                                                <button type="" className="bg-cyan-400 px-2 py-1 rounded-md flex items-center hover:bg-cyan-200 transition-all duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>
                                                    <span className="ms-2 text-sm">Cek Detail Kuisioner</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailWilayah;