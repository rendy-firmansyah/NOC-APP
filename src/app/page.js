import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Fotter from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <section className="w-full lg:h-screen flex items-center">     
          <div className="flex gap-0 md:gap-10 flex-col md:flex-row sm:px-14 md:px-14 px-10 lg:pt-0 pt-20">
            <div className="flex items-center order-2 md:order-1">
              <div>
                <h1 className="md:text-xl lg:text-4xl sm:text-start text-center font-bold">Cegah Bersama, Deteksi Dini:NOC, Melangkah Bersama Menuju Kesehatan Unggul</h1>
                <p className="my-4 sm:text-md md:text-md lg:text-xl sm:text-start text-xs text-center">Platform survei kesehatan untuk komunitas. Peroleh wawasan mendalam, identifikasi risiko, dan tingkatkan kesehatan bersama. Sehat dimulai dari partisipasi Anda di NOC.</p>
                <div className="flex sm:justify-start justify-center">
                  <button type="" className="px-4 py-1 font-semibold bg-gray-400 sm:px-7 sm:py-3 md:px-7 md:py-3 border sm:text-sm md:text-md text-xs hover:bg-gray-200 transition-all duration-200 rounded-md">Isi Survey Sekarang</button>
                </div>
              </div>
            </div>
            <div className="flex items-center sm:justify-center justify-center mt-0 sm:mt-10 order-1 md:order-2">            
              <Image src="/Actor-HeroSection.png" className="md:max-w-[300px] lg:max-w-[400px] max-w-52" alt="Gambar Icon" width={731} height={676}/>
            </div>
          </div>
      </section>

      <section className="w-full h-auto py-9">
        <div className="flex lg:flex-row flex-col gap-2 px-10">
          <div className="card border rounded-md md:py-6 md:px-5 py-2 px-3 shadow-lg">
            <div className="flex">
              <div className="border flex items-center md:p-4 p-2 rounded-full bg-gray-500 mx-4">
                <svg className="relative rotate-[270deg] max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px]" width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 14H12.6586C11.8349 16.3304 9.61244 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.61244 6 11.8349 7.66962 12.6586 10H23V14H21V18H17V14ZM7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z" fill="currentColor"></path></svg>
              </div>
              <div className="flex items-center">
                <span>
                  <h3 className="font-bold text-sm md:text-md">Akses Survei & Isi Data Diri</h3>
                  <p className="font-normal text-xs md:text-sm">Klik pada “Isi Survei Sekarang” dan Isi kan data diri anda.</p>
                </span>
              </div>
            </div>
          </div>
          <div className="card border rounded-md md:py-6 md:px-5 py-2 px-3 shadow-lg">
            <div className="flex">
              <div className="border flex items-center md:p-4 p-2 rounded-full bg-gray-500 mx-4">
                <svg className="relative max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px]" width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM6 7V9H14V7H6ZM6 11V13H14V11H6ZM6 15V17H11V15H6Z" fill="currentColor"></path></svg>
              </div>
              <div className="flex items-center">
                <span>
                  <h3 className="font-bold text-sm md:text-md">Isi Survey dengan Jujur</h3>
                  <p className="font-normal text-xs md:text-sm">Klik pada “Isi Survei Sekarang” dan Isi kan data diri anda.</p>
                </span>
              </div>
            </div>
          </div>
          <div className="card border rounded-md md:py-6 md:px-5 py-2 px-3 shadow-lg">
            <div className="flex">
              <div className="border flex items-center md:p-4 p-2 rounded-full bg-gray-500 mx-4">
              <svg className="relative max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px]" width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z" fill="currentColor"></path></svg>
              </div>
              <div className="flex items-center">
                <span>
                  <h3 className="font-bold text-sm md:text-md">Kirim Survey</h3>
                  <p className="font-normal text-xs md:text-sm">Klik pada “Isi Survei Sekarang” dan Isi kan data diri anda.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:h-screen flex items-center md:mt-10 lg:mt-0">
        <div className="grid gap-0 md:gap-10 md:grid-cols-2 grid-rows-1 px-10 sm:px-14 md:px-24">
          <div className="flex justify-center items-center pt-10 sm:pt-0">
            <Image src="/brand-noc-ori.png" className="max-w-48 max-h-48 md:max-w-72 md:max-h-72" alt="Brand Logo NOC" width={412} height={412}/>
          </div>
          <div className="flex justify-start items-center">
            <div>
              <h1 className="sm:text-2xl md:text-2xl sm:text-start text-center font-black">APA ITU NOC?</h1>
              <p className="mt-4 md:text-md lg:text-lg sm:pr-0 sm:text-start text-center pr-0 sm:text-md text-sm md:pr-0 lg:pr-0">NOC, Nursing Of Community, adalah platform inovatif untuk survei kesehatan komunitas. Dengan misi menciptakan lingkungan sehat, NOC memberikan informasi kesehatan terkini, membantu identifikasi risiko, dan meningkatkan kualitas hidup. Dengan antarmuka ramah pengguna, NOC membangun komunitas daring yang berkomitmen untuk meningkatkan kesehatan bersama.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <Fotter/> */}
    </>
  );
}
