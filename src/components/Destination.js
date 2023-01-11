import React from 'react'
import FooterWhite from './FooterWhite'
import Menu from './Menu'

function Destination() {
  return (
    <div>
      <div className="lg:px-20 px-5 container mx-auto font-poppins">

        <Menu />

        <div className="py-12">
          <h2 className='md:text-4xl text-3xl pb-3  font-bold text-black-100'>
            Destination
          </h2>

          <p className='text-lg'>
            Here we would like to offer you an introductory trip to our features. You already know that ticket booking and buying properties are our two noble offers. While you want to book any flight, here you can avail the provision of it. In our tabs, we have included flight details like landing and takeoff time. The designeted crypto has been mentioned sideways, an dsince yourwallet is connected, you just have to buy it and an automated receipt will be created for you.
          </p>
        </div>

      </div>

      <FooterWhite />
    </div>
  )
}

export default Destination
