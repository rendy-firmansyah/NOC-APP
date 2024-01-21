'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import nookies from "nookies"


const Login = () => {
  const router = useRouter()
  const [user,setUser] = useState()
  const [password,setPassword] = useState()

  const sendData = {
    user : user,
    password : password
  }

  async function login(){
    const send = await axios.post("/api/login",sendData)
    console.log(send.data.success)
    if (send.data.success === "success"){
      nookies.set(null,'token',send.data.token)
      toast('✅ Success Login', {
        position: "top-right",
        autoClose: 0.1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress:1,
        theme: "light",
        });
      router.push('/wilayah')
    } 
    else{
      toast('❌ failed login', {
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

  useEffect(()=>{
      const cookies = nookies.get()
      if(cookies.token){
          router.push("/Wilayah")
      }
  },[])

  return (
    <>
    <div className="relative flex items-center justify-center mt-[200px]">
     <ToastContainer />
      <div className="w-[500px] p-10 bg-white rounded-md shadow-xl">
        <div className='flex justify-center'>
          <img src="img/logo.png" className='' width={250} height={250} alt='Logo'/>
        </div>
        {/* <div className="mt-4" > */}
        <form className="mt-4" onSubmit={(e)=>{e.preventDefault(); login()}}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-xl font-semibold text-gray-800">
              Username
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute mt-[19px] ms-[10px]' width={20} viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"></path></svg>
            <input onChange={(e)=> setUser(e.target.value)} type="username" placeholder='Masukan Username' className="block w-full px-4 py-2 mt-2 pl-9 text-gray-700 bg-white border border-b-4 border-b-gray-800 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-xl font-semibold text-gray-800">
              Password
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute mt-[19px] ms-[10px]' width={20} viewBox="0 0 24 24"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z" fill="currentColor"></path></svg>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Masukan Password' className="block w-full px-4 py-2 mt-2 pl-9 text-gray-700 bg-white border border-b-4 border-b-gray-800 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="mt-8">
            <button type='submit' className="w-full px-4 py-3 tracking-wide text-[20px] font-semibold text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
          {/* </div> */}
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
