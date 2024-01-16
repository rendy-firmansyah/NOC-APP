import Link from "next/link"

export default function data_pengunjung() {
    return (
        <>
        <div className="mx-16 mt-32 pt-1 pb-10 mb-0 bg-gray-300">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-24 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">Data Anggota Keluarga</h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <Link href="/survei/add_data_diri">
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tambah Anggota</button>
                    </Link>
                    </div>
                </div>
                </div>

                <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                    <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Nama
                                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    NIK
                                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Survey Kesehatan
                                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Status Kesehatan
                                    </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        Slepet manja
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        31212121
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        link survey
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button type="submit" className="w-20 py-2 mx-auto font-extrabold bg-green-300 text-green-950 rounded-xl">
                    Selesai
                </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        Slepet manja
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        31212121
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        link survey
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button type="submit" className="w-32 py-2 mx-auto font-extrabold bg-red-300 text-red-950 rounded-xl">
                    Belum Selesai
                </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        <div className="flex justify-end me-16">
        <Link href="/survei/umum/fisik_sosial">
        <button type="submit" className="w-52 py-3 mt-10 font-extrabold content-end bg-gray-300">
                    Isi survey Umum
                </button>
        </Link>
        </div>
        </>
    )
}