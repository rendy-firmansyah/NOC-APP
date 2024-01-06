import Image from "next/image";

const Fotter = () => {
    return (
      <footer className="relative bottom-0 left-0 right-10 w-full bg-gray-600 text-white">
        <div className="container mx-auto flex items-center justify-between h-[135px]">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-cover bg-[url(/whatsapp-image-2023-12-22-at-18-48.png)]"></div>
            <div>
              <div className="font-bold text-lg">NOC</div>
              <div>Nursing Of Community</div>
            </div>
          </div>
          <div className="flex items-center mr-10 gap-20">
            <div className="text-sm">
              <div className="font-bold">Hubungi Kami</div>
              <div>email: NOC@gmail.com</div>
              <div>Phone: 08xxxxxxxxxx</div>
            </div>
            <div className="text-sm me-10">
              <div className="font-bold">Media sosial kami</div>
              <div className="flex space-x-2">
                <img className="w-6 h-6" alt="Instagram" src="instagram.png" />
                <img className="w-6 h-6" alt="Facebook" src="facebook.png" />
                <img className="w-6 h-6" alt="Twitter" src="twitter-x.png" />
                <img className="w-6 h-6" alt="LinkedIn" src="linked-in.png" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
export default Fotter;
  