import React from 'react'
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import logo from '../assets/logo.png';



export default function Footer() {
  return (
    <div className="bg-blue-100">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-12 font-poppins px-5'>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 items-center place-items-start gap-12 font-poppins py-8">
          <div className="md:col-span-2 col-span-1 flex items-center gap-3">

            <a href="/" className="lg:my-12">
              <img src={logo} alt="Logo" />
            </a>
            <p className='py-5 leading-loose text-white-50'>Lets Explore and create your experience with<br></br>
              Metaverse</p>

          </div>

          <div className="col-span-1">
            <ul>
              <a href="#about"><li className='pb-3'>About</li></a>
              <a href="#partners"><li className='pb-3'>Partners</li></a>
              <a href="#tokenomics"><li className='pb-3'>Tokenomics</li></a>
              <a href="#roadmap"><li className='pb-3'>Roadmap</li></a>
            </ul>
          </div>

          <div className="col-span-1">
            <ul>
              <a href="#nft"><li className='pb-3'>NFT Marketplace</li></a>
              <a href="#roadmap"><li className='pb-3'>Roadmap</li></a>
              <a href="#chain"><li className='pb-3'>Meta Genesis Chain</li></a>
              <a href="#metaverse"><li className='pb-3'>Metaverse</li></a>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-100 text-xl pb-5 font-bold font-orbitron">
              Contact
            </h4>
            <div className="flex gap-6 pb-5">
              <a href="https://twitter.com/MetaGenesisCoin">
                <img src={twitter} alt="Twitter" />
              </a>

              <a href="https://t.me/MetaGenesisPortal">
                <img src={telegram} alt="Telegram" />
              </a>

              <a href="https://discord.gg/s3YswSwqNu">
                <img src={discord} alt="Discord" />
              </a>

              <a href="mailto:Team@metagenesis.com">
                <i className="fa fa-envelope text-2xl text-white-100" aria-hidden="true"></i>
              </a>
            </div>
            <p>{new Date().getFullYear()} ?? Metagenesistoken.com All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>

  )
}
