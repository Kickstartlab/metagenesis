import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Slider from './Slider'
import top from '../assets/top.png';
import reason_1 from '../assets/reason_1.png';
import reason_2 from '../assets/reason_2.png';
import reason_3 from '../assets/reason_3.png';
import bg_blue from '../assets/bg_blue.png';
import mosq from '../assets/mosq.png';
import Vector_2 from '../assets/Vector_2.png';
import Vector from '../assets/Vector.png';
import disco from '../assets/disco.png';
import food from '../assets/food.png';
import shop from '../assets/shop.png';
import withdraw from '../assets/withdraw.png';
import client from '../assets/client.png';
import Plane from '../assets/Plane.png';
import Hotel from '../assets/Hotel.png';
import Cab from '../assets/Cab.png';
import card from '../assets/card.png';
import side from '../assets/side.png';
import say from '../assets/say.png';
import app_1 from '../assets/app_1.png';
import app_2 from '../assets/app_2.png';
import app_3 from '../assets/app_3.png';
import app_4 from '../assets/app_4.png';
import Ok from '../assets/Ok.png';
import service from '../assets/service.png';
import explore from '../assets/explore.png';
import star_1 from '../assets/star_1.png';




export default function Home() {

    return (
        <div className="bg-seagreen-50">

            {/* top section */}

            <div className="lg:px-20 px-5 container mx-auto">
                <Menu />

                <div className="lg:flex block justify-between items-center py-12">
                    <div className="">
                        <h2 className='md:text-6xl text-3xl font-volkhov font-bold text-black-100'>
                            No Credit Card?
                        </h2>
                        <h2 className='md:text-6xl text-3xl font-volkhov font-bold text-black-100'>
                            No Problem!
                        </h2>

                        <p className='pt-3 pb-4 leading-loose font-poppins'>Book your favorite services from us using your<br></br>
                            very own crypto wallet. </p>

                        <div className="button font-poppins">
                            <a href="/">
                                <button className="border-2 text-seagreen-200 font-poppins hover:text-white-100 border-seagreen-200 hover:bg-seagreen-200 py-2 px-8 rounded-sm font-semibold">
                                    Discover Now
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="img md:mt-0 mt-12 font-poppins" style={{ backgroundImage: `url(${Vector} )`, backgroundRepeat: 'no-repeat', backgroundPosition: "top", backgroundSize: 'contain' }}>
                        <img src={top} alt="Logo" />

                        
                        <div className='lg:flex hidden gap-3 p-5 bg-white-100 rounded-lg w-42 font-semibold absolute top-32'>
                            <img src={service} alt="" />
                            <div className="text-sm text-black-50">
                                Best <br></br>Services
                            </div>
                        </div>
                        <div className='lg:flex hidden gap-3 p-5 bg-white-100 rounded-lg w-42 absolute top-1/2 right-12'>
                            <img src={explore} alt="" className='' />
                            <div>
                                <div className="text-md text-black-50 font-semibold">
                                    Explore
                                </div>

                                <div className="text-sm text-black-50">
                                    Every cornar of the<br></br> world with us
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex hidden gap-3 p-5 bg-white-100 rounded-lg w-42 absolute bottom-32'>
                            <img src={star_1} alt="" />
                            <div>
                                <div className="text-md text-black-50 font-semibold">
                                    5 star
                                </div>

                                <div className="text-sm text-black-50">
                                    Customer Reviewd
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-black-900 rounded-md p-3 my-5 mx-auto">
                    <div className="md:flex block items-center justify-between">
                        <div className="grid grid-cols-3 lg:grid-cols-7 items-center gap-12">
                            <div className="">
                                <img src={Plane} alt="" />
                                <p className="text-seagreen-200 font-poppins">Flights</p>
                            </div>

                            <div className="">
                                <img src={Hotel} alt="" />
                                <p className="text-seagreen-200 font-poppins">Hotel</p>
                            </div>

                            <div className="">
                                <img src={Cab} alt="" />
                                <p className="text-seagreen-200 font-poppins">Taxi</p>
                            </div>

                            <div className="">
                                <img src={disco} alt="" />
                                <p className="text-seagreen-200 font-poppins">CLubs</p>
                            </div>

                            <div className="">
                                <img src={food} alt="" />
                                <p className="text-seagreen-200 font-poppins">Food</p>
                            </div>

                            <div className="">
                                <img src={shop} alt="" />
                                <p className="text-seagreen-200 font-poppins">Shopping</p>
                            </div>

                            <div className="">
                                <img src={withdraw} alt="" />
                                <p className="text-seagreen-200 font-poppins">Withdrawl</p>
                            </div>
                        </div>

                        <p className="text-seagreen-200 text-lg font-poppins md:mt-0 mt-4">& more...</p>

                        <div className="button md:mt-0 mt-4">
                            <a href="contact.html">
                                <button className="bg-seagreen-200 hover:bg-black-900 hover:text-seagreen-200 hover:border-2 hover:border-seagreen-200 text-black-100 py-3 px-8 rounded-md font-poppins font-semibold">
                                    Explore Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* section blue */}
            <div className="bg-black-900">

                <div className="">

                    {/* why choose us */}

                    <div className="py-20 lg:px-20 px-5 container mx-auto">
                        <div className="text-center" style={{ backgroundImage: `url(${side} )`, backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}>
                            <h3 className="text-white-100 text-center text-4xl font-bold font-volkhov">Why choose us? </h3>
                            <p className="py-4 leading-loose font-poppins text-white-100">Our Platform  will connect your wallet with it our space. Now, you will be live in the space.<br></br> In this space, you have the ability to buy any sort of specialty. And our most prominent feature, flight booking and rental properties.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 text-poppins">
                            <div className="col-span-1">
                                <div className="bg-white-100 p-8 rounded-md">
                                    <img src={reason_1} alt="" />
                                    <h4 className='text-lg font-bold pb-3 pt-6'>Spend Crypto Online</h4>
                                    <p className="text-black-50">You can easily pay for hotels and rentals through CryptoLiving platform. All you have to is swipe your Virtual visa card.
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="bg-white-100 p-8 rounded-md">
                                    <img src={reason_2} alt="" />
                                    <h4 className='text-lg font-bold pb-3 pt-6'>Secure payments</h4>
                                    <p className="text-black-50 pb-5">Crypto Living brings you Secure and safe payment plan. </p>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="bg-white-100 p-8 rounded-md">
                                    <img src={reason_3} alt="" />
                                    <h4 className='text-lg font-bold pb-3 pt-6'>Globally available</h4>
                                    <p className="text-black-50">Move around the world with Crypto Living. You can go anywhere in the world by paying crypto.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* we got your back */}

                    <div className="py-16 bg-img">
                        <div className="container mx-auto">

                            <div className="text-center py-8">
                                <h3 className="text-white-100 text-center text-3xl md:text-6xl font-bold font-poppins">Virtual Visa Card</h3>
                                <p className="py-4 leading-loose font-poppins text-white-100 flex mx-auto lg:w-1/2 w-full">Crypto Living offers you virtual visa card. You don't have to keep cash or credit card anymore. CryptoLiving offering you world first  crypto visa card. Where you can buy anything without any worries.  Now crypto holders don't have to keep cash anymore.</p>
                            </div>

                            <div className="py-8">
                                <img src={card} alt="" className='lg:w-1/2 w-full flex mx-auto' />
                            </div>
                        </div>

                    </div>

                    {/* deals and discounts */}

                    <div className="pb-12 pt-16" style={{ backgroundImage: `url(${Vector_2} )`, backgroundRepeat: 'no-repeat', backgroundPosition: "top", backgroundSize: 'contain' }}>

                        <div className='pb-16' style={{ backgroundImage: `url(${mosq})`, backgroundPosition: "bottom", backgroundRepeat: 'no-repeat' }}>

                            <div className="text-center py-8 container mx-auto">
                                <h3 className="text-seagreen-200 text-center text-4xl font-bold font-volkhov">deals & discounts</h3>
                                <p className="py-4 leading-loose font-poppins text-white-100">Discover our fantastic early booking discounts<br></br> & start planning your journey.</p>
                            </div>

                            <div className="container mx-auto">
                                <Slider />
                            </div>

                        </div>
                    </div>

                    {/* about us */}

                    <div id='about' className="pb-20 lg:px-20 px-5 container mx-auto" style={{ backgroundImage: `url(${say} )`, backgroundRepeat: 'no-repeat', backgroundPosition: "top right" }}>

                        <div className="lg:flex block justify-between items-center gap-8 pb-8">

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

                </div>

                <Footer />
            </div>

        </div >
    )
}
