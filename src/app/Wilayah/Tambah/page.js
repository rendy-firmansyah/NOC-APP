import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import nookies from 'nookies'

const TambahWilayah = () => {
    const router = useRouter()

    useEffect(()=>{
        const cookies = nookies.get()
        if(!cookies.token){
            router.push("/Login")
        }
    },[])

    return (
        <section className="w-full h-screen flex items-center">
            <div className="px-10">
                <h1>Isi nama Wilayah berikut ini</h1>
            </div>
        </section>
    )
}

export default TambahWilayah;