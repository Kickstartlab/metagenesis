import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="md:flex hidden items-center justify-between font-poppins text-black-100 h-20">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <div className="nav">
          <ul className="text-md flex justify-center gap-8 items-center">
            <li><a href="index.html" className="text-zinc-100">Home</a></li>
            <li><a href="about.html" className="hover:text-seagreen-100">About</a></li>
            <li><a href="services.html" className="hover:text-seagreen-100">Destination</a></li>
            <li><a href="services.html" className="hover:text-seagreen-100">Services</a></li>
            <li><a href="services.html" className="hover:text-seagreen-100">Blog</a></li>
          </ul>
        </div>

        <div className="">
          <a href="contact.html">
            <button className="bg-seagreen-100 hover:bg-seagreen-50 hover:border-2 hover:border-seagreen-100 hover:text-seagreen-100 text-black-100 py-2 px-8 rounded-sm font-semibold">
              Whitepaper
            </button>
          </a>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between pt-5 font-nutino-sans">
        <a href="index.html" className="logo w-1/2">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-poppins font-semibold bg-seagreen-100 z-20" style={{left: "0"}}>
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <a href="index.html" className="logo w-1/2">
            <img src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer hover:bg-zinc-700 text-white">
        <a href="index.html" className="text-lg ml-4 text-gray-200 font-semibold">Home</a>
      </div>
      <div className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
        <a href="services.html" className="text-lg ml-4 text-gray-200 font-semibold">About</a>
      </div>
      <div className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
        <a href="about.html" className="text-lg ml-4 text-gray-200 font-semibold">Destination</a>
      </div>
      <div className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
        <a href="contact.html" className="text-lg ml-4 text-gray-200 font-semibold">Service</a>
      </div>
      <div className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
        <a href="contact.html" className="text-lg ml-4 text-gray-200 font-semibold">Blog</a>
      </div>
      <div className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
        <a href="contact.html" className="text-lg ml-4 text-gray-200 font-semibold">Whitepaper</a>
      </div>
    </div> : null
}


    </header >
  )
}
