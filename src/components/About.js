import React from 'react'
import say from '../assets/say.png';
import app_1 from '../assets/app_1.png';
import app_2 from '../assets/app_2.png';
import app_3 from '../assets/app_3.png';
import app_4 from '../assets/app_4.png';
import Ok from '../assets/Ok.png';
import bg_blue from '../assets/bg_blue.png';
import client from '../assets/client.png';
import MenuWhite from './MenuWhite';
import Footer from './Footer';


function About() {
    return (
        <div className='bg-black-900'>
            <div id='about' className="pb-20 lg:px-20 px-5 container mx-auto">
            <MenuWhite />

                <div className="lg:flex block justify-between items-center gap-8 pb-8 mt-8" style={{ backgroundImage: `url(${say} )`, backgroundRepeat: 'no-repeat', backgroundPosition: "top right" }}>

                    <div className="lg:w-1/2 w-full">

                        <h3 className="text-seagreen-100 md:text-4xl text-2xl font-bold font-volkhov pt-1 ">About us</h3>
                        <p className="py-4 leading-loose font-poppins text-white-100">
                            In crypto living, we want you to move forward with a new concept. As you might be aware with non-fungible token (NFT) and metaverse, we would like to introduce some aspects for you.  We believe in that universe, you need to have some luxuries with you and then you can progress authentically. For instance, in crypto living, we are introducing visa card that can help you buy boarding tickets and rental properties. You see it is new. If you have a wallet on any exchange, you just have to link it with the website, transfer your dues immediately and then can buy the property using our website server. The transaction will be smooth and steady, and in no time, you can have a property at your name.</p>
                    </div>

                    <div className="lg:w-1/2 block mt-8 md:mt-0">
                        <img src={client} alt="" />

                        <div className="bg-white-100 p-8 rounded-md -mt-5 md:ml-5 ml-0">
                            <p className=' font-poppins text-black-100'>“As crypto person it's my responsibility to save other people from this cash hassle. World is advancing towards Metaverse and  other big things. So, I give my community cash freedom with this platform. Now they can use crypto in their life ”</p>

                            <h4 className='font-bold text-lg text-black-100 pt-5'>Marco Shelby</h4>
                            <p className=' font-poppins text-black-100'>Dubai, UAE</p>
                        </div>
                    </div>
                </div>

                {/* get app section */}

                <div className="pt-12 md:pb-20 pb-0">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-6">
                        <div className="border-4 border-seagreen-200 rounded-xl p-5 flex flex-col items-center">
                            <img src={Ok} alt="" className='w-16' />
                            <p className="py-4 leading-loose font-poppins text-white-100">
                                Worldwide Available
                            </p>
                        </div>
                        <div className="border-4 border-seagreen-200 rounded-xl p-5 flex flex-col items-center">
                            <img src={Ok} alt="" className='w-16' />
                            <p className="py-4 leading-loose font-poppins text-white-100">
                                Instant Transaction
                            </p>
                        </div>
                        <div className="border-4 border-seagreen-200 rounded-xl p-5 flex flex-col items-center">
                            <img src={Ok} alt="" className='w-16' />
                            <p className="py-4 leading-loose font-poppins text-white-100">
                                Mobile application
                            </p>
                        </div>
                        <div className="border-4 border-seagreen-200 rounded-xl p-5 flex flex-col items-center">
                            <img src={Ok} alt="" className='w-16' />
                            <p className="py-4 leading-loose font-poppins text-white-100">
                                Pay  Crypto
                            </p>
                        </div>
                    </div>
                </div>

                <div>

                    <h3 className="text-white-100 text-center text-4xl font-bold font-volkhov">Get the App Today! </h3>

                    <div className="flex gap-6 items-center justify-center pt-8 pb-6">
                        <img src={app_1} alt="" className='w-16' />
                        <img src={app_2} alt="" className='w-16' />
                        <img src={app_3} alt="" className='w-16' />
                        <img src={app_4} alt="" className='w-16' />

                    </div>
                </div>

                {/* get in touch */}

                <div className="mt-12 p-8 md:p-16 bg-seagreen-200 rounded-md" style={{ backgroundImage: `url(${bg_blue})`, backgroundSize: 'cover' }}>
                    <div className="">
                        <h3 className="text-white-100 md:text-4xl text-2xl font-bold font-volkhov text-center">Get in touch to learn<br></br> more and find insiders<br></br> discounts!</h3>
                    </div>
                    <div className="lg:flex hidden justify-center items-center mt-8">
                        <div className="relative text-poppins">
                            <input type="email" className="lg:h-16 h-12 lg:w-96 w-full pl-5 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Enter Your Email" />
                            <div className="absolute top-2 right-2"> <button className="p-3 text-white-100 rounded-lg bg-seagreen-200">Connect!</button> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
