'use client'
import React from "react";
import nookies from 'nookies'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const router = useRouter()
    useEffect(()=>{
        const cookies = nookies.get()
        console.log(!cookies.token )
        if(!cookies.token){
            router.push("/login")
        }
    },[])
    
    return (
        <>
            <section className="w-full h-auto lg:h-auto">
                <div className="pt-28 px-10">
                    <button type="" className="px-10 py-3 bg-gray-400 rounded-md font-bold">Hasil Kuisioner Survey</button>
                </div>
                <div className="mt-6 px-10">
                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="border px-4 py-2">No</th>
                                <th class="border px-4 py-2">Nomor KK</th>
                                <th class="border px-4 py-2">Alamat</th>
                                <th class="border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-4 py-2">1</td>
                                <td class="border px-4 py-2">3710987625789201</td>
                                <td class="border px-4 py-2">Sukobumi</td>
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
            </section>

            <section className="w-full h-auto lg:h-auto">
                <div className="pt-28 px-10">
                    <button type="" className="px-10 py-3 bg-gray-400 rounded-md font-bold">Data Chart Kuisioner Survey</button>
                </div>
            </section>
        </>
    )
}

export default Dashboard;