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
            <li><a href="/" className="text-zinc-100">Home</a></li>
            <li><a href="#nft" className="hover:text-seagreen-100 cursor-pointer">NFT</a></li>
            <li><a href="#tokenomics" className="hover:text-seagreen-100 cursor-pointer">Tokenomics</a></li>
            <li><a href="#roadmap" className="hover:text-seagreen-100 cursor-pointer">Roadmap</a></li>
            <li><a href="#about" className="hover:text-seagreen-100 cursor-pointer">Ecosystem</a></li>
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
          <a href="/" className="text-lg ml-4 hover:text-purple-100 font-semibold">Home</a>
        </button>
        <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
          <a href="#nft" className="text-lg ml-4 hover:text-purple-100 font-semibold">NFT 's</a>
        </button>
        <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
          <a href="#tokenomics" className="text-lg ml-4 hover:text-purple-100 font-semibold">Tokenomics</a>
        </button>
        <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
          <a href="#roadmap" className="text-lg ml-4 hover:text-purple-100 font-semibold">Roadmap</a>
        </button>
        <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
          <a href="#about" className="text-lg ml-4 hover:text-purple-100 font-semibold">About Us</a>
        </button>
      </div> : null
      }


    </header >
  )
}
