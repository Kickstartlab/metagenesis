import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import top from '../assets/top.png';
import meta from '../assets/meta.png';
import star from '../assets/star.png';
import globe from '../assets/globe.png';
import meta_1 from '../assets/meta-1.png';
import meta_2 from '../assets/meta-2.png';
import metaverse from '../assets/metaverse.png';
import ai from '../assets/ai.png';
import nft from '../assets/nft.png';
import work_1 from '../assets/work-1.png';
import work_2 from '../assets/work-2.png';
import work_3 from '../assets/work-3.png';
import work_4 from '../assets/work-4.png';
import work_5 from '../assets/work-5.png';
import work_6 from '../assets/work-6.png';
import fashion from '../assets/fashion.png';
import { Link } from "react-router-dom";


export default function Home() {

    return (
        <div className="bg-black-100">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top">

                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center py-12">
                        <div className="lg:w-1/2 w-full">
                            <h2 className='md:text-5xl text-3xl font-orbitron font-semibold text-white-100'>
                                Bringing you connections & experiences out of this
                            </h2>
                            <h2 className='md:text-6xl text-3xl font-orbitron font-semibold text-black-100'>
                                No Problem!
                            </h2>

                            <p className='pt-3 pb-4 leading-loose font-poppins'>Book your favorite services from us using your<br></br>
                                very own crypto wallet. </p>

                            <div className="button font-poppins">
                                <Link to="/contact">
                                    <button className="border-gradient py-2 px-8 rounded-sm font-semibold">
                                        Discover Now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="img md:mt-0 mt-12 font-poppins">
                            <img src={top} alt="Logo" />
                            <img src={star} alt="Logo" className='absolute top-40 mt-16' />
                        </div>
                    </div>
                </div>
            </div>

            {/* what is meta genesis */}

            <div className="bg-side">
                <div className="py-12 lg:px-16 px-5 container mx-auto">
                    <div className="lg:flex block justify-between items-center py-12">
                        <div className="lg:w-1/2 w-full">
                            <img src={meta} alt="Logo" />
                        </div>

                        <div className='lg:w-1/3 w-full text-white-100'>
                            <h2 className='md:text-5xl text-3xl font-orbitron font-semibold'>
                                What is META GENESIS
                            </h2>

                            <p className='py-5 font-poppins'>
                                Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras..</p>

                            <div className="button font-poppins">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-8 rounded-sm font-semibold mt-5">
                                        Know More
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* what is meta genesis */}

            <div className="bg-side-2">
                <div className="py-12    lg:px-20 px-5 container mx-auto">
                    <div className="lg:flex block justify-between items-center py-12">

                        <div className='lg:w-1/2 w-full text-white-100'>
                            <h2 className='md:text-5xl text-3xl font-orbitron font-semibold'>
                                META GENESIS Infrastructure
                                for billions of users.
                            </h2>

                            <p className='py-5 font-poppins'>
                                a blockchain infrastructure and robust DApps platform custom-built for the Metaverse. Broadly Adopted by major institutions, local governments, and global brands.</p>

                            <div className="flex gap-6 items-center font-poppins flex-wrap">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-5 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Know More
                                        <span><svg width="12" height="13" viewBox="0 0 12 13" class="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="#fff"></path>
                                        </svg>
                                        </span>
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-5 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Know More
                                        <span><svg width="12" height="13" viewBox="0 0 12 13" class="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="#fff"></path>
                                        </svg>
                                        </span>
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-5 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Know More
                                        <span><svg width="12" height="13" viewBox="0 0 12 13" class="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="#fff"></path>
                                        </svg>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/3 w-full">
                            <img src={globe} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>

            {/* metaverse section */}

            <div className="py-16">
                <div className="container mx-auto">

                    <div className="lg:flex block items-center">

                        <div>
                            <img src={metaverse} alt="" />
                        </div>

                        <div>
                            <div className="text-center py-8">
                                <h3 className="text-white-100 text-center text-3xl md:text-6xl font-bold font-orbitron">METAVERSE </h3>

                                <p className="py-4 leading-loose font-poppins text-white-100 flex mx-auto lg:w-1/2 w-full">
                                    a blockchain infrastructure and robust DApps platform custom-built for the Metaverse. Broadly Adopted by major institutions, local governments, and global brands.
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-3 py-8">
                                <img src={meta_1} alt="" />
                                <img src={meta_2} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* deals and discounts */}

            <div className="bg-side">
                <div className="pb-12 lg:px-16 px-5 container mx-auto">
                    <div className="lg:flex block justify-between items-center py-12">
                        <div className="lg:w-1/2 w-full">
                            <img src={ai} alt="Logo" />
                        </div>

                        <div className='lg:w-1/2 w-full text-white-100 float-right'>
                            <h2 className='md:text-5xl text-3xl font-orbitron font-semibold'>
                                META GENESIS AI
                            </h2>

                            <p className='py-5 font-poppins'>
                                a blockchain infrastructure and robust DApps platform custom-built for the Metaverse. Broadly Adopted by major institutions, local governments, and global brands.
                            </p>

                            <div className="button font-poppins">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-5 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Learn More
                                        <span><svg width="12" height="13" viewBox="0 0 12 13" class="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="#fff"></path>
                                        </svg>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*  META GENESIS NFT’s */}

            <div className="pb-16">
                <div className="container mx-auto">

                    <h3 className="text-white-100 text-center text-3xl md:text-6xl font-bold font-orbitron color-gradient">
                        META GENESIS NFT’s
                    </h3>

                    <p className="py-4 leading-loose font-poppins text-white-100 flex mx-auto lg:w-1/2 w-full">
                        a blockchain infrastructure and robust DApps platform custom-built for the Metaverse. Broadly Adopted by major institutions, local governments, and global brands.
                    </p>

                    <Link to="/contact">
                        <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-5 flex gap-x-3 mx-auto items-center rounded-sm font-semibold mt-5">
                            Know More
                            <span><svg width="12" height="13" viewBox="0 0 12 13" class="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="#fff"></path>
                            </svg>
                            </span>
                        </button>
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-3 py-8">
                    <img src={nft} alt="" />
                </div>
            </div>

            {/* how it works */}

            <div className="pb-16 px-12">
                <div className="container mx-auto">

                    <div className="text-center py-8">
                        <h3 className="text-white-100 text-center text-3xl md:text-6xl font-bold font-orbitron color-gradient">
                            How does the Meta Genesis work
                        </h3>

                        <p className="py-4 leading-loose font-poppins text-white-100 flex mx-auto lg:w-1/2 w-full">
                            Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras
                        </p>
                    </div>

                    <div className="grid grid-rows-2 lg:grid-cols-3 grid-cols-1 gap-6 text-white-100 place-content-center place-items-center">

                        <div className="bg-blue-100 p-3 rounded-bl-lg rounded-tr-lg">

                            <img src={work_1} alt="" className='w-full pb-3'/>

                            <h4 className='text-xl font-orbitron font-semibold'>
                                Discuss with Colleagues
                            </h4>
                            <p className='font-poppins py-2'>Working online is the same experience as work ing in an office. This will be. achieved with..</p>

                            <div className="flex gap-6 items-center">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Try now
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-3 rounded-bl-lg rounded-tr-lg">
                            <img src={work_2} alt=""  className='w-full pb-3'/>

                            <h4 className='text-xl font-orbitron font-semibold'>
                                Discuss with Colleagues
                            </h4>
                            <p className='font-poppins py-2'>Working online is the same experience as work ing in an office. This will be. achieved with..</p>

                            <div className="flex gap-6 items-center">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Try now
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-3 rounded-bl-lg rounded-tr-lg">
                            <img src={work_3} alt=""  className='w-full pb-3'/>

                            <h4 className='text-xl font-orbitron font-semibold'>
                                Discuss with Colleagues
                            </h4>
                            <p className='font-poppins py-2'>Working online is the same experience as work ing in an office. This will be. achieved with..</p>

                            <div className="flex gap-6 items-center">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Try now
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-3 rounded-bl-lg rounded-tr-lg">
                            <img src={work_4} alt=""  className='w-full pb-3'/>

                            <h4 className='text-xl font-orbitron font-semibold'>
                                Discuss with Colleagues
                            </h4>
                            <p className='font-poppins py-2'>Working online is the same experience as work ing in an office. This will be. achieved with..</p>

                            <div className="flex gap-6 items-center">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Try now
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-3 rounded-bl-lg rounded-tr-lg">
                            <img src={work_5} alt=""  className='w-full pb-3'/>

                            <h4 className='text-xl font-orbitron font-semibold'>
                                Discuss with Colleagues
                            </h4>
                            <p className='font-poppins py-2'>Working online is the same experience as work ing in an office. This will be. achieved with..</p>

                            <div className="flex gap-6 items-center">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Try now
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-3 rounded-bl-lg rounded-tr-lg">
                            <img src={work_6} alt=""  className='w-full pb-3'/>

                            <h4 className='text-xl font-orbitron font-semibold'>
                                Discuss with Colleagues
                            </h4>
                            <p className='font-poppins py-2'>Working online is the same experience as work ing in an office. This will be. achieved with..</p>

                            <div className="flex gap-6 items-center">
                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Try now
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* how it works */}

            <div className="pb-16 px-20">
                <div className="container mx-auto">

                    <div className="text-center py-8">
                        <h3 className="text-white-100 text-center text-3xl md:text-6xl font-bold font-orbitron color-gradient">
                            Our Latest Activity
                        </h3>

                        <p className="py-4 leading-loose font-poppins text-white-100 flex mx-auto lg:w-1/2 w-full">
                            Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras
                        </p>
                    </div>

                    <img src={fashion} alt=""  className='my-6'/>

                </div>

            </div>


            <Footer />

        </div >
    )
}
