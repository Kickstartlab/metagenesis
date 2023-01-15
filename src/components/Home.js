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
import launch from '../assets/launch.png';
import pie_1 from '../assets/pie-1.png';
import pie_2 from '../assets/pie-2.png';
import pie_3 from '../assets/pie-3.png';
import pie_4 from '../assets/pie-4.png';
import pie_5 from '../assets/pie-5.png';
import pie_6 from '../assets/pie-6.png';
import pie_7 from '../assets/pie-7.png';
import brand_1 from '../assets/brand-1.png';
import brand_2 from '../assets/brand-2.png';
import brand_3 from '../assets/brand-3.png';
import brand_4 from '../assets/brand-4.png';
import brand_5 from '../assets/brand-5.png';
import brand_6 from '../assets/brand-6.png';
import brand_7 from '../assets/brand-7.png';
import brand_8 from '../assets/brand-8.png';
import brand_9 from '../assets/brand-9.png';
import brand_10 from '../assets/brand-10.png';
import brand_11 from '../assets/brand-11.png';
import lock from '../assets/lock.png';
import roadmap from '../assets/roadmap.png';
import ecosystem from '../assets/ecosystem.png';
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
                <div className="lg:px-16 lg:py-12 py-5 px-5 container mx-auto">
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

                        </div>

                    </div>

                    {/* ecosystem */}

                    <div className="lg:py-12 py-5 container mx-auto">
                        <div className="lg:flex items-center justify-between">

                            <div className='text-white-100 lg:py-0 py-12'>
                                <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold'>
                                    ECOSYSTEM
                                </h2>

                                <p className='py-6 font-poppins font-bold text-xl'>
                                    $MGENESIS is the primary native token of MetaGenesis, which empowers the entire metaverse ecosystem.
                                </p>

                                <p className='py-6 font-poppins'>
                                    MGEN chain: The blockchain network which realizes robust infrastructure for the Metaverse. MGEN Metaverse app: Universal device-ready Metaverse app optimized for smartphones. $MGENESIS token: The eco-stream for this entire Metaverse ecosystem.
                                    MGEN: Marketplace, to buy and sell your NFTs.
                                    MGEN App: The mobile asset management app which also can be your Metaverse wallet.
                                    MGEN Builder: The builder for the Avatar, World and Games to build anything in Metaverse with no coding knowledge.
                                </p>

                            </div>

                            <img src={ecosystem} alt="" className='w-6/12 lg:block flex mx-auto'/>
                        </div>

                    </div>

                </div>
            </div>


            {/* tokenomics */}

            <div className="bg-side">
                <div className="lg:px-16 lg:py-12 py-5 px-5 container mx-auto">

                    <div className='text-white-100 lg:w-1/2 w-full text-center flex flex-col items-center justify-center mx-auto'>
                        <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold'>
                            TOKENOMICS
                        </h2>

                        <p className='py-6 font-poppins font-bold'>
                            MetaGenesis is aspire to be the most successful project of 2023. Our Tokenomics have been designed to support sustainable growth and development of the project.
                        </p>

                        <p className='py-6 font-poppins font-bold text-lg'>
                            Token name: MetaGenesis | Ticker Symbol: $MGENESIS
                            Blockchain: Binance Smart Chain (BEP-20)
                            Total Supply: 100 Million (100,000,000)
                            Total fees: 1%
                            Marketing: 1%
                        </p>

                    </div>

                </div>

                {/* token distribution */}

                <div className="bg-side-2">

                    <div className="lg:px-16 lg:py-12 py-5 px-5 container mx-auto">

                        <div className='text-white-100 text-center flex flex-col items-center justify-center mx-auto'>
                            <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold'>
                                TOKEN DISTRIBUTION
                            </h2>

                            <p className='py-6 font-poppins lg:w-1/2 w-full font-bold text-lg'>
                                Public Sale tokens : 30% | Liquidity: 20% | Staking Reserve: 10%
                                CEX Reserve: 10% | Reward Reserve: 5% | Development Reserve: 5% | Initial Burn: 20%
                            </p>

                        </div>

                        <div className="flex lg:gap-12 gap-4 items-center justify-center py-6">
                            <div>
                                <img src={pie_1} alt="" />
                            </div>
                            <div>
                                <img src={pie_2} alt="" />
                            </div>
                            <div>
                                <img src={pie_3} alt="" />
                            </div>
                            <div>
                                <img src={pie_4} alt="" />
                            </div>
                        </div>

                        <div className="flex gap-12 items-center justify-center py-6">
                            <div>
                                <img src={pie_5} alt="" />
                            </div>
                            <div>
                                <img src={pie_6} alt="" />
                            </div>
                            <div>
                                <img src={pie_7} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* security and safety */}

            <div className="bg-side">
                <div className="lg:px-16 lg:py-12 py-5 px-5 container mx-auto">

                    <div className='text-white-100 lg:py-0 py-12'>
                        <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold'>
                            SECURITY & <br></br>SAFETY CERTIFICATION
                        </h2>

                        <div className="lg:flex block justify-between">

                            <div>

                                <p className='pt-8 font-poppins'>
                                    $MGENESIS earned the SAFU badge from PinkSale Finance,
                                    which means that the project cannot be manipulated by the developer
                                </p>
                                <p className='pb-6 pt-3 font-poppins'>
                                    to hurt investors and gain an unfair advantage over them.
                                    The complete presale follow the SAFU rules set by Pinksale which can be seen here:
                                </p>

                                <div className="button font-poppins">
                                    <a href="https://docs.pinksale.finance/important/safu-contract](https://docs.pinksale.finance/important/safu-contract">
                                        <button className="text-white-100 font-poppins bg-gradient-to-r from-purple-100 to-purple-200 py-2 px-5 flex gap-x-3 items-center rounded-sm font-semibold mt-5">
                                            SAFU CONTRACT
                                            <span><svg width="12" height="13" viewBox="0 0 12 13" class="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="#fff"></path>
                                            </svg>
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full lg:mt-0 mt-6">
                                <img src={lock} alt="Logo" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* roadmap */}

            <div className="bg-side-2">
                <div className="lg:px-16 lg:py-12 py-5 px-5 container mx-auto">

                    <h2 className='color-gradient md:text-5xl text-3xl text-center font-orbitron font-semibold'>
                        ROADMAP
                    </h2>

                    <div className="lg:flex gap-24 py-12 justify-center">

                        <div className="text-white-100">
                            <h5 className="text-xl font-orbitron font-semibold">
                                Phase 2
                            </h5>
                            <ul className='list-disc font-poppins pt-3'>
                                <li>
                                    Listing on Tier-1 CEXs
                                </li>
                                <li>
                                    MGEN Chain Launch
                                </li>
                                <li>
                                    Social Media Ads Campaign
                                </li>
                                <li>
                                    Viral Twitter Marketing Campaign
                                </li>
                                <li>
                                    Paid Marketing & Media Campaign
                                </li>
                            </ul>
                        </div>

                        <div className="text-white-100 lg:pt-0 pt-6">
                            <h5 className="text-xl font-orbitron font-semibold">
                                Phase 3
                            </h5>
                            <ul className='list-disc font-poppins pt-3'>

                                <li>
                                    V2 Whitepaper Release - Celebrity Partnership
                                </li>
                                <li>
                                    MGEN Builder
                                </li>
                                <li>
                                    Website 2.0 Release
                                </li>
                                <li>
                                    Further Tier-1 Exchange Listing - Certik Audit
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="lg:flex gap-3">

                        <div className="lg:block hidden">
                            <img src={roadmap} alt="" />
                        </div>

                        <div className="text-white-100">
                            <h5 className="text-xl font-orbitron font-semibold">
                                Phase 4
                            </h5>
                            <ul className='list-disc font-poppins pt-3'>
                                <li>
                                    Expanding Ecosystem
                                </li>
                                <li>
                                    MGEN Metaverse app
                                </li>
                                <li>
                                    Sponsorship and Partnership Worldwide - Celebrity Brand Ambassdors
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-white-100 lg:pt-0 pt-6">
                        <h5 className="text-xl font-orbitron font-semibold">
                            Phase 1
                        </h5>
                        <ul className='list-disc font-poppins pt-3'>
                            <li>
                                Website and Community Building - Pinksale Fair Launch
                            </li>
                            <li>
                                DEX Launching
                            </li>
                            <li>
                                Global Marketing Campaign
                            </li>
                            <li>
                                CoinMarketCap & CoinGecko Listing - TechRate/InterFi Contract Audit
                            </li>
                            <li>
                                MGEN NFT Marketplace
                            </li>
                            <li>
                                BSCScan Verification
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* partners and supporters */}

            <div className="bg-side">

                <div className="lg:px-16 lg:py-12 py-5 px-5 container mx-auto">

                    <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold text-center'>
                        SECURITY & <br></br>SAFETY CERTIFICATION
                    </h2>

                    <div className="grid grid-cols-4 gap-6 place-items-baseline justify-content-center pt-8">

                        <div className="col-span-1 flex flex-col gap-y-5">
                            <div>
                                <img src={brand_1} alt="" className='w-10/12' />
                            </div>
                            <div>
                                <img src={brand_2} alt="" className='w-8/12 pl-3' />
                            </div>
                            <div>
                                <img src={brand_3} alt="" className='w-10/12' />
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col gap-y-5">
                            <div>
                                <img src={brand_4} alt="" className='w-10/12' />
                            </div>
                            <div>
                                <img src={brand_5} alt="" className='w-10/12' />
                            </div>
                            <div>
                                <img src={brand_6} alt="" className='w-10/12' />
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col gap-y-5">
                            <div>
                                <img src={brand_7} alt="" className='w-8/12' />
                            </div>
                            <div>
                                <img src={brand_8} alt="" className='w-7/12 pt-5' />
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col gap-y-5">
                            <div>
                                <img src={brand_9} alt="" className='w-9/12' />
                            </div>
                            <div>
                                <img src={brand_10} alt="" className='w-9/12' />
                            </div>
                        </div>

                    </div>


                    <div>
                        <img src={brand_11} alt="" className='flex mx-auto' />
                    </div>
                </div>

                {/* JOIN US NOW */}

                <div className='text-white-100 text-center flex flex-col items-center justify-center mx-auto'>
                    <h2 className='color-gradient md:text-5xl text-3xl font-orbitron font-semibold'>
                        JOIN US NOW
                    </h2>

                    <p className='lg:py-12 py-5 font-poppins lg:w-1/2 w-full font-bold md:text-xl text-medium'>
                        Community is always First! Our community is growing stronger by the day.
                        If you want to ask a question or meet other people with a similar world-view,
                        join our social media channels.
                    </p>

                </div>

            </div>



            <Footer />

        </div >
    )
}
