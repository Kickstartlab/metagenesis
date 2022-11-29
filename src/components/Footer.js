import React from 'react'
import logo_2 from '../assets/logo_2.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';



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

          <div className="flex gap-6 justify-start pt-3">
            <span className="flex items-center justify-center hover:bg-white-100 bg-seagreen-100 rounded-full p-2">
              <img src={discord} alt="discord" />
            </span>
            <span className="flex items-center justify-center hover:bg-white-100 bg-seagreen-100 rounded-full p-2">
              <img src={telegram} alt="telegram" />
            </span>
            <span className="flex items-center justify-center hover:bg-white-100 bg-seagreen-100 rounded-full p-2">
              <img src={twitter} alt="twitter" />
            </span>
          </div>
        </div>
        <div className="col-span-1">
          <ul>
            <li className='pb-3'>About</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul>
            <li className='pb-3'>Help/FAQ</li>
            <li className='pb-3'>Affilates</li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul>
            <li className='pb-3'>Our Blog</li>
            <li className='pb-3'>Low fare tips</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="flex justify-between items-center py-5 px-2">
        <p> Copyright, Crypto Living - {new Date().getFullYear()}. All rights reserved</p>
        <a href="/">Terms & Conditions</a>
      </div>
    </footer>
  )
}
