import React, { useState } from 'react'
import { Link } from "react-router-dom";



export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-poppins  text-white-100 h-28">
        <a href="/" className="logo lg:my-12">
          <h2 className='uppercase text-3xl font-orbitron font-semibold'>
            Meta Genesis
          </h2>
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
        <a href="/" className="text-white-100">
          <h2 className='uppercase text-2xl font-orbitron font-semibold'>
            Meta Genesis
          </h2>
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-orbitron font-semibold bg-gradient-to-tr from-purple-100 to-purple-200 z-20" style={{ left: "0" }}>

        <div className="mt-3 px-3 mb-12">
          <a href="/" className="text-white-100">
            <h2 className='uppercase text-2xl font-orbitron font-semibold'>
              Meta Genesis
            </h2>
          </a>
        </div>
        <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
          <Link to="/" className="text-lg ml-4 hover:text-purple-100 font-semibold">Home</Link>
        </button>
        <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
          <Link to="/about" className="text-lg ml-4 hover:text-purple-100 font-semibold">About</Link>
        </button>
        <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
          <Link to="/destination" className="text-lg ml-4 hover:text-purple-100 font-semibold">Destination</Link>
        </button>
        <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
          <Link to="/contact" className="text-lg ml-4 hover:text-purple-100 font-semibold">Service</Link>
        </button>
      </div> : null
      }


    </header >
  )
}
