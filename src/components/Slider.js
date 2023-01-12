import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deal_1 from '../assets/slider-1.png';
import deal_2 from '../assets/slider-2.png';
import deal_3 from '../assets/slider-3.png';
import user_1 from '../assets/user-1.png';
import user_2 from '../assets/user-2.png';
import user_3 from '../assets/user-3.png';
import eth from '../assets/eth.png';



function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        cssEase: "linear",
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,

            }
        }]
    }



    const slider = React.useRef(null);

    return (
        <div className="bg-black-100">

            <Slider ref={slider} {...settings}>


                <div className="card-wrapper col-span-1 py-5">
                    <div className=" card">

                            <div className="px-3 flex gap-28 absolute -mt-6 justify-between items-center text-white-100 font-poppins">

                                <div className="">
                                    <h5 className='text-lg'>
                                        Current bid
                                    </h5>
                                    <div className="flex gap-2 items-center">
                                        <img src={eth} alt="" className='' />

                                        <p className='text-purple-200'>3.9 ETH</p>
                                    </div>
                                </div>

                                <button className="bg-purple-200 py-2 text-white-100 rounded-full px-4">
                                    Place bid
                                </button>
                            </div>

                        <img src={deal_1} alt="" className='w-full' />

                        <div className="py-3 px-5 text-white-100 font-poppins absolute -mt-20">
                            <h5 className='text-lg'>
                                Golden Hour
                            </h5>
                            <div className="flex gap-3 items-center">
                                <img src={user_1} alt="" className='' />

                                <p className='pt-2'>John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper col-span-1 py-5">
                    <div className=" card">

                        <div className="px-3 flex justify-between gap-28 absolute -mt-6 items-center text-white-100 font-poppins">

                            <div className="">
                                <h5 className='text-lg'>
                                    Current bid
                                </h5>
                                <div className="flex gap-2 items-center">
                                    <img src={eth} alt="" className='' />

                                    <p className='text-purple-200'>3.9 ETH</p>
                                </div>
                            </div>

                            <button className="bg-purple-200 py-2 text-white-100 rounded-full px-4">
                                Place bid
                            </button>
                        </div>

                        <img src={deal_2} alt="" className='w-full' />

                        <div className="py-3 px-5 text-white-100 font-poppins absolute -mt-20">
                            <h5 className='text-lg'>
                                Golden Hour
                            </h5>
                            <div className="flex gap-3 items-center">
                                <img src={user_2} alt="" className='' />

                                <p className='pt-2'>John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper col-span-1 py-5">
                    <div className=" card">

                        <div className="px-3 flex justify-between absolute -mt-6 gap-28 items-center text-white-100 font-poppins">

                            <div className="">
                                <h5 className='text-lg'>
                                    Current bid
                                </h5>
                                <div className="flex gap-2 items-center">
                                    <img src={eth} alt="" className='' />

                                    <p className='text-purple-200'>3.9 ETH</p>
                                </div>
                            </div>

                            <button className="bg-purple-200 py-2 text-white-100 rounded-full px-4">
                                Place bid
                            </button>
                        </div>

                        <img src={deal_3} alt="" className='w-full' />

                        <div className="py-3 px-5 text-white-100 font-poppins absolute -mt-20">
                            <h5 className='text-lg'>
                                Golden Hour
                            </h5>
                            <div className="flex gap-3 items-center">
                                <img src={user_3} alt="" className='' />

                                <p className='pt-2'>John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper col-span-1 py-5">
                    <div className=" card">

                        <div className="px-3 flex justify-between absolute -mt-6 gap-28 items-center text-white-100 font-poppins">

                            <div className="">
                                <h5 className='text-lg'>
                                    Current bid
                                </h5>
                                <div className="flex gap-2 items-center">
                                    <img src={eth} alt="" className='' />

                                    <p className='text-purple-200'>3.9 ETH</p>
                                </div>
                            </div>

                            <button className="bg-purple-200 py-2 text-white-100 rounded-full px-4">
                                Place bid
                            </button>
                        </div>

                        <img src={deal_2} alt="" className='w-full' />

                        <div className="py-3 px-5 text-white-100 font-poppins absolute -mt-20">
                            <h5 className='text-lg'>
                                Golden Hour
                            </h5>
                            <div className="flex gap-3 items-center">
                                <img src={user_1} alt="" className='' />

                                <p className='pt-2'>John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>


            </Slider>

        </div>

    )


}

export default ImageSlider 