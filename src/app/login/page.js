import Image from 'next/image'

const Login = () => {
  return (
    <div className="relative flex items-center justify-center mt-[120px]">
      <div className="w-[500px] p-10 bg-white rounded-md shadow-xl">
        <div className='flex justify-center'>
          <img src="img/logo.png" className='' width={250} height={250} alt='Logo'/>
        </div>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-xl font-semibold text-gray-800">
              Username
            </label>
            <input type="username" placeholder='Masukan Username' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-b-4 border-b-gray-800 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-xl font-semibold text-gray-800">
              Password
            </label>
            <input type="password" placeholder='Masukan Password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-b-4 border-b-gray-800 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="mt-8">
            <button className="w-full px-4 py-3 tracking-wide text-[20px] font-semibold text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
