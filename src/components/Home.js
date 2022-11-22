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


export default function Home() {

    return (
        <div className="bg-seagreen-50">

            {/* top section */}

            <div className="md:px-20 px-5">
                <div className='container mx-auto'>
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

                        <div className="img md:mt-0 mt-12" style={{ backgroundImage: `url(${Vector} )`, backgroundRepeat: 'no-repeat', backgroundPosition: "top", backgroundSize: 'contain' }}>
                            <img src={top} alt="Logo" />;
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

            </div>

            {/* section blue */}
            <div className="bg-black-900">

                <div className="">

                    {/* why choose us */}

                    <div className="py-20 lg:px-20 px-5 container mx-auto">
                        <div className="text-center" style={{ backgroundImage: `url(${side} )`, backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}>
                            <h3 className="text-white-100 text-center text-4xl font-bold font-volkhov">Why choose us? </h3>
                            <p className="py-4 leading-loose font-poppins text-white-100">lorem ipsumlorem ipsumlorem ipsumlorem<br></br> ipsumlorem ipsumlorem ipsum</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-poppins">
                            <div className="col-span-1">
                                <div className="bg-white-100 p-8 rounded-md">
                                    <img src={reason_1} alt="" />
                                    <h4 className='text-lg font-bold pb-3 pt-6'>Lorem Impsum</h4>
                                    <p className="text-black-50">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="bg-white-100 p-8 rounded-md">
                                    <img src={reason_2} alt="" />
                                    <h4 className='text-lg font-bold pb-3 pt-6 '>Lorem Impsum</h4>
                                    <p className="text-black-50">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="bg-white-100 p-8 rounded-md">
                                    <img src={reason_3} alt="" />
                                    <h4 className='text-lg font-bold pb-3 pt-6'>Lorem Impsum</h4>
                                    <p className="text-black-50">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* we got your back */}

                    <div className="py-16 bg-img">
                        <div className="container mx-auto">

                            <div className="text-center py-8">
                                <h3 className="text-white-100 text-center text-3xl md:text-6xl font-bold font-poppins">We got your back!</h3>
                                <p className="py-4 leading-loose font-poppins text-white-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br></br> vulputate libero et velit interdum,
                                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora</p>
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

                    <div className="pb-20 lg:px-20 px-5" style={{ backgroundImage: `url(${say} )`, backgroundRepeat: 'no-repeat', backgroundPosition: "top right" }}>

                        <div className="lg:flex block justify-between items center pb-8">

                            <div className="lg:w-1/2 w-full">
                                <h3 className="text-white-100 md:text-4xl text-2xl font-bold font-volkhov ">What people say</h3>
                                <h3 className="text-seagreen-100 md:text-4xl text-2xl font-bold font-volkhov pt-1 ">about us</h3>
                                <p className="py-4 leading-loose font-poppins text-white-100">Our Clients send us bunch of smilies with our services<br></br> and we love them.</p>

                                <div className="flex gap-6">
                                    <div className="bg-white-100 hover:bg-seagreen-100 rounded-full p-2">

                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM17 9H1V7H17V9Z" fill="#999999" />
                                        </svg>

                                    </div>

                                    <div className="bg-white-100 hover:bg-seagreen-100 rounded-full p-2">


                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z" fill="#999999" />
                                        </svg>


                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 block mt-8 md:mt-0">
                                <img src={client} alt="" />

                                <div className="bg-white-100 p-8 rounded-md -mt-5 md:ml-5 ml-0">
                                    <p className=' font-poppins text-black-100'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>

                                    <h4 className='font-bold text-lg text-black-100 pt-5'>Mike Taylor</h4>
                                    <p className=' font-poppins text-black-100'>Lahore, Pakistan</p>
                                </div>
                            </div>
                        </div>

                        {/* get in touch */}

                        <div className="mt-12 p-8 md:p-16 bg-seagreen-200 rounded-md" style={{ backgroundImage: `url(${bg_blue})`, backgroundSize: 'cover' }}>
                            <div className="">
                                <h3 className="text-white-100 md:text-4xl text-2xl font-bold font-volkhov text-center">Get in touch to learn<br></br> more and find insiders<br></br> discounts!</h3>
                            </div>
                            <div className="lg:flex hidden justify-center items-center mt-8">
                                <div className="relative text-poppins">
                                    <div className="absolute top-5 left-3"> <i className="fa fa-envelope z-20 text-black-50"></i> </div> <input type="email" className="lg:h-16 h-12 lg:w-96 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Enter Your Email" />
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
