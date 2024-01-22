'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import nookies from 'nookies'
import axios from 'axios'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wilayah = () => {
    const router = useRouter()
    const [nama,setNama] = useState()
    const [data,setData] = useState()
    const [showEditPopup, setShowEditPopup] = useState(false)
    const [editedData, setEditedData] = useState({ id: null, nama: "" })
    const [showInfo, setShowInfo] = useState(false)
    const [deskripsi, setDeskripsi] = useState()

    const openInfo = (deskripsi) => {
        setDeskripsi(deskripsi)
        setShowInfo(true)
    }

    const closeInfo = () => {
        setShowInfo(false)
    }

    const openPopup = (id, nama) => {
        setEditedData({ id, nama });
        setShowEditPopup(true);
    };

    const closePopup = () => {
        setShowEditPopup(false);
    };

    useEffect(()=>{
        const cookies = nookies.get()
        if(!cookies.token){
            router.push("/login")
        }
    },[])

    const sendData = {
        nama : nama
    }

    useEffect(() => {
        async function getData() {
            const fetch = await axios.get('/api/dashboard/wilayah')
            setData(fetch.data.Data)
        }
        getData()
    },[]) 
    async function getData() {
        const fetch = await axios.get('/api/dashboard/wilayah')
        setData(fetch.data.Data)
    }
  

    async function add_wilayah(){
        const send = await axios.post("/api/dashboard/wilayah",sendData)
        if (send.data.status === "success"){
            toast('✔️ berhasil upload data', {
                position: "top-right",
                autoClose: 0.1,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress:1,
                theme: "light",
                });
            getData()
        } 
        else{
          toast('❌ gagal upload data', {
              position: "top-right",
              autoClose: 0.1,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress:1,
              theme: "light",
              });
        }
      }

    async function updateWilayah() {
        const updatedData = { id: editedData.id, nama: editedData.nama };
        const send = await axios.put(`/api/dashboard/wilayah`, updatedData);

        if (send.data.status === "success") {
            toast('✔️ Berhasil memperbarui data', {
                position: "top-right",
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: 1,
                theme: "light",
            });

            // Close the edit popup and refresh data
            closePopup();
            getData();
        } else {
            toast('❌ Gagal memperbarui data', {
                position: "top-right",
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: 1,
                theme: "light",
            });
        }
    }

    async function delete_wilayah(id_data){
        const req = {
            id:id_data
        }
        const send = await axios.delete("/api/dashboard/wilayah",{data:req})
        if (send.data.status === "success"){
            toast('✔️ berhasil menghapus data', {
                position: "top-right",
                autoClose: 0.1,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress:1,
                theme: "light",
                });
            getData()
        } 
        else{
          toast('❌ gagal menghapus data', {
              position: "top-right",
              autoClose: 0.1,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress:1,
              theme: "light",
              });
        }
    }

    function detail_wilayah(id){
        router.push(`/Wilayah/Detail?id=${id}`)
    }
    return (
        <section className="w-full h-auto lg:h-auto">
        <ToastContainer />
            {/* <div className="flex justify-between pt-28 px-10">
                <div className="">
                    <button type="" className="px-10 py-3 bg-gray-400 rounded-md font-bold">Data Wilayah</button>
                </div>
            </div> */}
            <div className="my-[200px] px-10">
                <div className="card bg-white border-2 border-bg-btn-orangeHover p-5 rounded-lg mb-6">
                    <div className="">
                        <h1 className="text-center text-[28px] font-bold mb-5 uppercase">Tambah Data Wilayah</h1>
                        <form onSubmit={(e)=>{e.preventDefault(); add_wilayah()}}>
                        <label for="wilayah" class="block text-sm font-semibold leading-6 text-gray-900">Nama Wilayah</label>
                        <div class="mt-2">
                            <input id="wilayah" name="wilayah" type="text" onChange={(e)=> setNama(e.target.value)} autocomplete="wilayah" placeholder="Masukkan nama wilayah disini ...." class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        <button type="submit" className="mt-3 py-2 text-white rounded-md w-full bg-blue-600 hover:bg-blue-500 transition-all duration-300">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="card bg-white border-2 border-bg-btn-orangeHover p-5 rounded-lg">
                    <h1 className="text-center text-[28px] font-bold mb-5 uppercase">Data Wilayah</h1>
                    <div className="overflow-x-auto">
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                    <th class="border px-4 py-2">No</th>
                                    <th class="border px-4 py-2">Nama Wilayah</th>
                                    <th class="border px-4 py-2">Status</th>
                                    <th class="border px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data != null ? (
                                    data.map((item,index) => (
                                <tr>
                                    <td class="border text-center px-4 py-2">{index+1}</td>
                                    <td class="border text-center px-4 py-2">{item.nama}</td>
                                    <td class="border text-center px-4 py-2">
                                        <div>
                                            {item.layak === true ? (
                                                <>
                                                    <button type="" className="py-1 bg-green-500 px-3 text-xs rounded-lg text-white font-semibold border-2 shadow-md cursor-default">Layak</button>
                                                    <button onClick={() => openInfo(item.Deskripsi)} type="" className="py-1 bg-blue-500 px-3 text-xs rounded-lg text-white font-semibold border-2 shadow-md hover:bg-blue-700 transition-all duration-300">Cek Kelayakan</button>
                                                </>
                                            ) : item.layak === false ? (
                                                <>
                                                    <button type="" className="py-1 bg-red-500 px-3 text-xs rounded-lg text-white font-semibold border-2 shadow-md cursor-default">Tidak Layak</button>
                                                    <button onClick={() => openInfo(item.Deskripsi)} type="" className="py-1 bg-blue-500 px-3 text-xs rounded-lg text-white font-semibold border-2 shadow-md hover:bg-blue-700 transition-all duration-300">Cek Kelayakan</button>
                                                </>  
                                            ) : (<p>N/A</p>)}
                                        </div>
                                    </td>

                                    <td className="border flex justify-center p-2 gap-3">
                                        {/* <Link href="/Wilayah/Detail"> */}
                                            <button onClick={()=>detail_wilayah(item.id)} type="" className="bg-cyan-400 px-2 py-1 rounded-md hover:bg-cyan-200 transition-all duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                </svg>
                                            </button>
                                        {/* </Link> */}
                                        <button onClick={() => openPopup(item.id, item.nama)} type="button" className="bg-yellow-400 px-2 py-1 rounded-md hover:bg-yellow-200 transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </button>
                                        {/* <button onClick={(e)=>delete_wilayah(item.id)} type="" className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-200 transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button> */}
                                    </td>
                                </tr>
                                    )
                                    )
                                    ): null} 
                            </tbody>
                        </table>
                        
                        {showEditPopup && (
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                                <div className="bg-white p-8 rounded-md">
                                    <h1 className="text-center text-[28px] font-bold mb-5 uppercase">Edit Data Wilayah</h1>
                                    <form onSubmit={(e) => { e.preventDefault(); updateWilayah(); }}>
                                        <label htmlFor="editedWilayah" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Nama Wilayah
                                        </label>
                                        <div className="mt-2">
                                            <input id="editedWilayah" name="editedWilayah" type="text" value={editedData.nama} onChange={(e) => setEditedData({...editedData, nama: e.target.value })} autoComplete="editedWilayah" placeholder="Masukkan nama wilayah disini ...." className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                        <button type="submit" className="mt-3 py-2 text-white rounded-md w-full bg-blue-600 hover:bg-blue-500 transition-all duration-300">
                                            Simpan
                                        </button>
                                        <button type="button" onClick={closePopup} className="mt-3 py-2 text-white rounded-md w-full bg-gray-400 hover:bg-gray-300 transition-all duration-300">
                                            Batal
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {showInfo && (
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                                <div className="bg-white p-8 rounded-md">
                                    <h1 className="text-center text-[28px] font-bold mb-5 uppercase">Deskripsi Kelayakan Wilayah</h1>
                                    <textarea className="w-full h-40 italic border-2 rounded-lg p-3" readOnly>{deskripsi}</textarea>
                                    <button type="button" onClick={()=>{closeInfo() ; setDeskripsi("")}} className="mt-3 py-2 text-white rounded-md w-full bg-red-500 hover:bg-red-700 transition-all duration-300">
                                        Kembali
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wilayah;