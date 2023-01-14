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
import box from '../assets/box.png';
import video_nft from '../assets/video-nft.png';
import launch from '../assets/launch.png';
import { Link } from "react-router-dom";
import Slider from './Slider'

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
                                Bringing you connections & experiences out of this <span className='color-gradient'>World</span>
                            </h2>

                            <p className='py-5 text-white-100 font-poppins'> Let's explore and create your experience with<br></br> Metaverse. </p>

                            <div className="flex items-center gap-8 font-poppins">
                                <a href="https://t.me/MetaGenesisPortal">
                                    <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 lg:px-8 px-4 rounded-sm font-semibold mt-5">
                                        Get Started
                                    </button>
                                </a>

                                <a href="/">
                                    <button className="text-white-100 font-poppins border-gradient py-2 lg:px-8 px-4 font-semibold mt-5 hover:bg-gradient-to-r from-purple-100 to-purple-200">
                                        Explore Now
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div className="img md:mt-0 mt-12 font-poppins">
                            <img src={top} alt="Logo" />
                            <img src={star} alt="Logo" className='absolute top-40 mt-16 lg:block hidden' />
                        </div>
                    </div>

                    <iframe src="https://player.vimeo.com/video/702333130?h=b1a1753e95" className='flex mx-auto w-640 rounded-xl' height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            {/* what is meta genesis */}

            <div className="bg-side-2">
                <div className="lg:py-12 py-0 lg:px-16 px-5 container mx-auto">
                    <div className="lg:flex block justify-between items-center py-12">
                        <div className="lg:w-1/2 w-full">
                            <img src={meta} alt="Logo" />
                        </div>

                        <div className='lg:w-1/3 w-full text-white-100 lg:pt-0 pt-12'>
                            <h2 className='md:text-5xl text-3xl font-orbitron font-semibold'>
                                What is <span className='color-gradient'>META GENESIS</span>
                            </h2>

                            <p className='py-5 font-poppins'>
                                MetaGenesis is a blockchain infrastructure and robust DApps platform custom-built for the Metaverse.Our vision is to
                                provide the fully immersive decentralized Metaverse infrastructures for billions of users to connect and create a fully
                                decentralized ecosystem beyond any boundaries. The entirely user-generated platform that offers fascinating virtual
                                experiences owned and built by users is the future that MetaGenesis is leading to.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* what is meta genesis */}

            <div className="">
                <div className="lg:pb-12 pb-0 lg:px-20 px-5 container mx-auto">
                    <div className="lg:flex block justify-between items-center py-12">

                        <div className='lg:w-1/2 w-full text-white-100'>
                            <h2 className='md:text-5xl text-3xl font-orbitron font-semibold'>
                                <span className='color-gradient'>META GENESIS</span> Infrastructure
                                for billions of users.
                            </h2>

                            <p className='pt-5 font-poppins'>
                                With Meta Genesis, we intend to bring more value to our community where you can enjoy world class experience
                                while having a good social experience with your friends from around the world. Blockchain technology facilitates us to
                                build such a platform where the main component of any ecosystem i.e. community has more value.

                            </p>

                            <p className='py-5 font-poppins'>
                                At Meta Genesis, we aim to create a long lasting and sustainable ecosystem of multiple infrastructure where
                                community can enjoy the interactive features and earn passive rewards simultaneously

                            </p>
                        </div>

                        <div className="lg:w-1/3 w-full">
                            <img src={globe} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>

            {/* metaverse section */}

            <div className="bg-side lg:pt-8 lg:px-0 px-5">
                <div className="container mx-auto">

                    <div className="lg:flex block items-center ">

                        <div>
                            <img src={metaverse} alt="" />
                        </div>

                        <div className='lg:w-8/12 w-full'>
                            <div className="text-center py-8">
                                <h3 className="text-white-100 text-center text-3xl md:text-6xl font-bold font-orbitron color-gradient">MetaGenesis Metaverse</h3>

                                <p className="py-4 leading-loose font-poppins text-white-100 flex mx-auto">
                                    $MGenesis Metaverse app will be a device-ready Metaverse platform, consisting of Avatars, Lands, Worlds, various
                                    NFT items, and unlimited Games. It will empowers and connect creators and users on its Create to Earn, Build to
                                    Earn ecosystem. Community will be able to travel to different locations via portals to enjoy different features of the
                                    metaverse.

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

            {/* meta genesis ai */}

            <div className="bg-side-2">
                <div className="lg:px-16 px-5 container mx-auto">
                    <div className="lg:flex block justify-between items-center">
                        <div className="lg:w-1/2 w-full">
                            <img src={ai} alt="Logo" />
                        </div>

                        <div className='lg:w-1/2 w-full text-white-100'>
                            <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold lg:text-right'>
                                META GENESIS Builder
                            </h2>

                            <p className='py-5 font-poppins lg:text-right'>
                                The builder for the Avatar, World, and Games to build anything in Metaverse with no coding knowledge required from
                                users.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/*  META GENESIS NFT’s */}

            <div className="">
                <div className="pb-12 lg:px-16 px-5 container mx-auto">
                    <div className="lg:flex block justify-between items-center py-12">

                        <div className='lg:w-1/2 w-full text-white-100'>
                            <h3 className="text-white-100 color-gradient text-3xl md:text-6xl font-bold font-orbitron color-gradient">
                                MetaGenesis NFT Marketplace
                            </h3>

                            <p className="py-5 font-poppins">
                                MetaGenesis is the primary NFT Marketplace of $MGenesis to trade various NFT assets.
                                Every aspect of MetaGenesis ecosystem has been gamified making it more fun and rewarding for both collectors and
                                players. MetaGenesis NFT's are not just your average NFT's , every NFT has a predefined mining power based on
                                the level and rarity of your NFT. And the gamification of NFT's just dont stop here, players can use common,
                                uncommon and rare NFT's to upgrade levels of epic and legendary NFT's to increase their power. Thus, increasing
                                their reward.
                            </p>

                        </div>

                        <div className="flex items-center justify-center gap-3 py-8">
                            <img src={nft} alt="" />
                        </div>

                    </div>

                    {/* slider section */}

                    <div className="lg:pt-12 pt-5 lg:pb-20 pb-5">
                        <Slider />
                    </div>

                    <iframe src="https://player.vimeo.com/video/702333130?h=b1a1753e95" className='flex mx-auto w-640 rounded-xl' height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>



            {/* META GENESIS Launchpad */}

            <div className="bg-side-2">
                <div className="lg:px-16 px-5 container mx-auto">
                    <div className="lg:flex block justify-between items-center">
                        <div className="lg:w-1/2 w-full">
                            <img src={launch} alt="Logo" />
                        </div>

                        <div className='lg:w-1/2 w-full text-white-100 float-right lg:py-0 py-12'>
                            <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold lg:text-right'>
                                META GENESIS
                                Launchpad
                            </h2>

                            <p className='py-6 font-poppins lg:text-right'>
                                a blockchain infrastructure and robust DApps platform custom-built for the Metaverse. Broadly Adopted by major institutions, local governments, and global brands.
                            </p>

                            <div className="button font-poppins lg:float-right">
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

            {/* how it works */}

            <div className="py-16 lg:px-12 px-5">
                <div className="container mx-auto">

                    <div className="text-center mb-8">
                        <h3 className="text-white-100 text-center text-3xl md:text-4xl font-bold font-orbitron ">
                            How does the <span className="color-gradient"> Meta Genesis work</span>
                        </h3>

                        <p className="py-4 leading-loose font-poppins text-white-100 flex mx-auto lg:w-1/2 w-full">
                            Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras
                        </p>
                    </div>

                    <div className="grid grid-rows-2 lg:grid-cols-3 grid-cols-1 gap-8 text-white-100 place-content-center place-items-center">

                        <div className="bg-blue-100 p-4 rounded-bl-lg rounded-tr-lg">

                            <img src={work_1} alt="" className='w-full pb-3' />

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
                                    <button className="text-white-100 font-poppins border-gradient py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-4 rounded-bl-lg rounded-tr-lg">
                            <img src={work_2} alt="" className='w-full pb-3' />

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
                                    <button className="text-white-100 font-poppins border-gradient py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-4 rounded-bl-lg rounded-tr-lg">
                            <img src={work_3} alt="" className='w-full pb-3' />

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
                                    <button className="text-white-100 font-poppins border-gradient py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-4 rounded-bl-lg rounded-tr-lg">
                            <img src={work_4} alt="" className='w-full pb-3' />

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
                                    <button className="text-white-100 font-poppins border-gradient py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-4 rounded-bl-lg rounded-tr-lg">
                            <img src={work_5} alt="" className='w-full pb-3' />

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
                                    <button className="text-white-100 font-poppins border-gradient py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-100 p-4 rounded-bl-lg rounded-tr-lg">
                            <img src={work_6} alt="" className='w-full pb-3' />

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
                                    <button className="text-white-100 font-poppins border-gradient py-2 px-3 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                        Explore now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Our Latest Activity */}

            <div className="pb-16 lg:px-20 px-5">
                <div className="container mx-auto">

                    <div className="text-center py-8">
                        <h3 className="text-white-100 text-center text-3xl md:text-4xl font-bold font-orbitron ">
                            Our Latest <span className='color-gradient'>Activity</span>
                        </h3>

                        <p className="py-4 leading-loose font-poppins text-white-100 flex mx-auto lg:w-1/2 w-full">
                            Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras
                        </p>
                    </div>

                    <img src={fashion} alt="" className='my-6 flex mx-auto' />

                </div>

            </div>


            <Footer />

        </div >
    )
}
