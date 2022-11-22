import React from 'react'
import logo_2 from '../assets/logo_2.png';


export default function Footer() {
  return (
    <footer className='container text-white-100 mx-auto lg:px-20 px-5'>
      <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 items-center gap-16 font-poppins py-8">
        <div className="md:col-span-3 col-span-1">
          <a href="/" className="logo">
            <img src={logo_2} alt="Logo" />
          </a>
          <p className='py-5 leading-loose'>Book your services in minute using your own<br></br>
            crypto wallet, get full Control for much longer.</p>

          {/* <div className="flex gap-4">

            <div className="p-1 bg-white-100 rounded-full">
              <i class="fa fa-twitter fa-2x text-black-100 hover:text-white-100 hover:bg-seagreen-200" aria-hidden="true"></i>
            </div>
            <div className="p-1 bg-white-100 rounded-full">
              <i className="fa fa-telegram fa-2x text-black-100 hover:text-white-100 hover:bg-seagreen-200" aria-hidden="true"></i>
            </div>
          </div> */}
        </div>
        <div className="col-span-1">
          <h3 className='text-lg font-semibold pb-4'>Company</h3>
          <ul>
            <li className='pb-3'>About</li>
            <li className='pb-3'>Careers</li>
            <li className='pb-3'>Logistic</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className='text-lg font-semibold pb-4'>Contact</h3>
          <ul>
            <li className='pb-3'>Help/FAQ</li>
            <li className='pb-3'>Press</li>
            <li className='pb-3'>Affilates</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className='text-lg font-semibold pb-4'>More</h3>
          <ul>
            <li className='pb-3'>Press Centre</li>
            <li className='pb-3'>Our Blog</li>
            <li className='pb-3'>Low fare tips</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="flex justify-between items-center py-5 px-2">
        <p>Copyright, Rana Muneeb Asad - Ravi Inc 2022. All rights reserved.</p>
        <a href="/">Terms & Conditions</a>
      </div>
    </footer>
  )
}
