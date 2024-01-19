import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Fotter from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="relative flex justify-center">
        <img src="/Vector-0.png" className="min-w-fit absolute -z-50 mt-[450px] me-[350px]"/>
      </div>
      {/* <Navbar /> */}
      <section className="">
        <div className="container mx-auto xl:mt-[200px] lg:mt-[200px] md:mt-[200px] mt-[150px]">
          <div className="grid grid-cols-12">
            <div className="xl:col-span-6 col-span-12 flex items-center xl:order-1 order-2">
              <div>
                <h1 className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl xl:text-start text-center font-bold">Cegah Bersama, Deteksi Dini:NOC, Melangkah Bersama Menuju Kesehatan Unggul</h1>
                <p className="my-5 xl:text-xl lg:text-lg xl:text-start text-center">Platform survei kesehatan untuk komunitas. Peroleh wawasan mendalam, identifikasi risiko, dan tingkatkan kesehatan bersama. Sehat dimulai dari partisipasi Anda di NOC.</p>
                <div className="flex xl:justify-start justify-center mt-6">
                  <button type="" className="px-6 py-3 font-semibold text-white border-4 border-bg-btn-orangeHover bg-bg-btn-orange hover:bg-bg-btn-orangeHover transition-all duration-200 rounded-sm">Isi Survey Sekarang</button>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 flex items-center justify-center xl:order-2 order-1">            
              <img src="/Actor-HeroSection.png" className="xl:w-[731px] xl:h-[676] lg:w-[531px] lg:h-[476] md:w-[531px] md:h-[476] w-[431px] h-[376] " alt="Gambar Icon"/>
            </div>
          </div>
        </div>     
      </section>

      <section className="container mx-auto my-[100px]">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-4 col-span-12">
            <div className="card border rounded-md py-6 px-5 shadow-lg bg-white">
              <div className="flex">
                <div className="border-4 border-bg-btn-orangeHover bg-bg-btn-orangeLight flex items-center md:p-4 p-2 rounded-full mx-4">
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
          </div>
          <div className="xl:col-span-4 col-span-12 xl:mx-4 xl:my-0 my-4">
            <div className="card border rounded-md py-6 px-5 shadow-lg bg-white">
              <div className="flex">
                <div className="border-4 border-bg-btn-orangeHover bg-bg-btn-orangeLight flex items-center md:p-4 p-2 rounded-full mx-4">
                  <svg className="relative max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px]" width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM6 7V9H14V7H6ZM6 11V13H14V11H6ZM6 15V17H11V15H6Z" fill="currentColor"></path></svg>
                </div>
                <div className="flex items-center">
                  <span>
                    <h3 className="font-bold text-sm md:text-md">Isi Survey dengan Jujur</h3>
                    <p className="font-normal text-xs md:text-sm">Jawab pertanyaan survei secara jujur, mulai dari data diri hingga kesehatan Anda.</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 col-span-12">
            <div className="card border rounded-md py-6 px-5 shadow-lg bg-white">
              <div className="flex">
                <div className="border-4 border-bg-btn-orangeHover bg-bg-btn-orangeLight flex items-center md:p-4 p-2 rounded-full mx-4">
                <svg className="relative max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px]" width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z" fill="currentColor"></path></svg>
                </div>
                <div className="flex items-center">
                  <span>
                    <h3 className="font-bold text-sm md:text-md">Kirim Survey</h3>
                    <p className="font-normal text-xs md:text-sm">Klik pada “Submit” atau Kirim survei untuk menyelesaikan partisipasi Anda.</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto xl:my-[200px] lg:my-[200px] md:my-[200px] my-[150px]">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-6 col-span-12 mb-8">
            <div className="flex justify-center items-center">
              <img src="/brand-noc.png" className="" alt="Brand Logo NOC"/>
            </div>
          </div>
          <div className="xl:col-span-6 col-span-12">
            <div className="flex justify-start items-center">
              <div className="">
                <h1 className="sm:text-2xl md:text-2xl sm:text-start text-center font-black">APA ITU NOC?</h1>
                <p className="mt-4 md:text-md lg:text-lg sm:pr-0 sm:text-start text-center pr-0 sm:text-md text-sm md:pr-0 lg:pr-0">NOC, Nursing Of Community, adalah platform inovatif untuk survei kesehatan komunitas. Dengan misi menciptakan lingkungan sehat, NOC memberikan informasi kesehatan terkini, membantu identifikasi risiko, dan meningkatkan kualitas hidup. Dengan antarmuka ramah pengguna, NOC membangun komunitas daring yang berkomitmen untuk meningkatkan kesehatan bersama.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Fotter/> */}
    </div>
  );
}
