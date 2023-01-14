import React from 'react'
import twitter from '../assets/twitter.png';
import facebook from '../assets/fcebook.png';
import telegram from '../assets/telegram.png';




export default function Footer() {
  return (
    <div className="bg-blue-100">
      <footer className='container text-white-100 mx-auto lg:px-12 font-poppins px-5'>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 items-baseline place-items-start gap-12 font-poppins py-8">
          <div className="md:col-span-2 col-span-1">

            <a href="/" className="logo lg:my-12">
              <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold'>
                Meta Genesis
              </h2>
            </a>
            <p className='py-5 leading-loose'>Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor</p>

          </div>

          <div className="col-span-1">
            <h4 className="text-white-100 text-xl pb-5 font-bold font-orbitron">
              About Us
            </h4>
            <ul>
              <li className='pb-3'>About MetaV</li>
              <li className='pb-3'>Contact Us</li>
              <li className='pb-3'>FAQ</li>
              <li className='pb-3'>Privacy Policy</li>
              <li className='pb-3'>Terms of Service</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-100 text-xl pb-5 font-bold font-orbitron">
              Services
            </h4>
            <ul>
              <li className='pb-3'>NFT Marketplace</li>
              <li className='pb-3'>Virtual Concert</li>
              <li className='pb-3'>Gaming</li>
              <li className='pb-3'>Artwork</li>
              <li className='pb-3'>Online Travel</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-100 text-xl pb-5 font-bold font-orbitron">
              Contact
            </h4>
            <div className="flex gap-6 pb-5">
              <a href="">
                <img src={twitter} alt="Twitter" />
              </a>

              <a href="">
                <img src={facebook} alt="Facebook" />
              </a>

              <a href="https://t.me/MetaGenesisPortal">
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
            <p>{new Date().getFullYear()} MetaV.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>

  )
}
