import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";



export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-poppins text-white-100 h-20">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-8 items-center">
            <li><Link to="/" className="text-zinc-100">Home</Link></li>
            <li><Link to="/about" className="hover:text-seagreen-100 cursor-pointer">Resources</Link></li>
            <li><Link to="/destination" className="hover:text-seagreen-100 cursor-pointer">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-seagreen-100 cursor-pointer">About Us</Link></li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-nutino-sans">
        <a href="/" className="logo w-1/2">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-poppins font-semibold bg-seagreen-100 z-20" style={{ left: "0" }}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <a href="/" className="logo w-1/2">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer hover:bg-zinc-700 text-white">
          <Link to="/" className="text-lg ml-4 text-gray-200 font-semibold">Home</Link>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <Link to="/about" className="text-lg ml-4 text-gray-200 font-semibold">About</Link>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <Link to="/destination" className="text-lg ml-4 text-gray-200 font-semibold">Destination</Link>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <Link to="/contact" className="text-lg ml-4 text-gray-200 font-semibold">Service</Link>
        </button>
        <div className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href={require("../assets/whitepapper.pdf")} download="Whitepaper" className="text-lg ml-4 text-gray-200 font-semibold">Whitepaper</a>
        </div>
      </div> : null
      }


    </header >
  )
}
