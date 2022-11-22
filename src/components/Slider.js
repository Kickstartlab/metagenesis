import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deal_1 from '../assets/deal_1.png';
import deal_2 from '../assets/deal_2.png';
import deal_3 from '../assets/deal_3.png';
import deal_4 from '../assets/deal_4.png';
import deal_5 from '../assets/deal_5.png';
import deal_6 from '../assets/deal_6.png';
import deal_7 from '../assets/deal_7.png';
import deal_8 from '../assets/deal_8.png';
import pin from '../assets/pin.png';
import star from '../assets/star.svg';

function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        cssEase: "linear",
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    }



    const slider = React.useRef(null);

    return (
        <div className="">

            <Slider ref={slider} {...settings}>


                <div className="card-wrapper col-span-1">
                    <div className="bg-white-100 rounded-md card">
                        <img src={deal_1} alt="" className='w-full' />

                        <div className="p-5">
                            <div className="flex justify-between">
                                <h4 className='text-black-100 text-xl font-bold font-poppins'>Madrid</h4>

                                <div className="flex items-center gap-3">
                                    <img src={star} alt="" />
                                    <p className="font-poppins text-gray-400">4.8</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <img src={pin} alt="" />
                                    <p className="font-poppins text-black-50">Spain</p>
                                </div>
                                <div className="flex items-center gap-4 font-poppins font-semibold">
                                    <p className="text-black-50"><del>$950</del></p>
                                    <span className='py-1 px-2 rounded-md bg-pink-100'>
                                        <p className="text-pink-200">$850</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 card-wrapper">
                    <div className="bg-white-100 rounded-md">
                        <img src={deal_2} alt="" className='w-full' />
                        <div className="p-5">
                            <div className="flex justify-between">
                                <h4 className='text-black-100 text-xl font-bold font-poppins'>Firenze</h4>

                                <div className="flex items-center gap-3">
                                    <img src={star} alt="" />
                                    <p className="font-poppins text-gray-400">4.5</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <img src={pin} alt="" />
                                    <p className="font-poppins text-black-50">Italy</p>
                                </div>
                                <div className="flex items-center gap-4 font-poppins font-semibold">
                                    <p className="text-black-50"><del>$950</del></p>
                                    <span className='py-1 px-2 rounded-md bg-pink-100'>
                                        <p className="text-pink-200">$850</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 card-wrapper">
                    <div className="bg-white-100 rounded-md">
                        <img src={deal_3} alt="" className='w-full' />
                        <div className="p-5">
                            <div className="flex justify-between">
                                <h4 className='text-black-100 text-xl font-bold font-poppins'>Paris</h4>

                                <div className="flex items-center gap-3">
                                    <img src={star} alt="" />
                                    <p className="font-poppins text-gray-400">4.8</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <img src={pin} alt="" />
                                    <p className="font-poppins text-black-50">France</p>
                                </div>
                                <div className="flex items-center gap-4 font-poppins font-semibold">
                                    <p className="text-black-50"><del>$950</del></p>
                                    <span className='py-1 px-2 rounded-md bg-pink-100'>
                                        <p className="text-pink-200">$850</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 card-wrapper">
                    <div className="bg-white-100 rounded-md">
                        <img src={deal_4} alt="" className='w-full' />
                        <div className="p-5">
                            <div className="flex justify-between">
                                <h4 className='text-black-100 text-xl font-bold font-poppins'>London</h4>

                                <div className="flex items-center gap-3">
                                    <img src={star} alt="" />
                                    <p className="font-poppins text-gray-400">4.8</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <img src={pin} alt="" />
                                    <p className="font-poppins text-black-50">UK</p>
                                </div>
                                <div className="flex items-center gap-4 font-poppins font-semibold">
                                    <p className="text-black-50"><del>$950</del></p>
                                    <span className='py-1 px-2 rounded-md bg-pink-100'>
                                        <p className="text-pink-200">$850</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 card-wrapper">
                    <div className="bg-white-100 rounded-md">
                        <img src={deal_5} alt="" className='w-full' />
                        <div className="p-5">
                            <div className="flex justify-between">
                                <h4 className='text-black-100 text-xl font-bold font-poppins'>Sydney</h4>

                                <div className="flex items-center gap-3">
                                    <img src={star} alt="" />
                                    <p className="font-poppins text-gray-400">4.8</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <img src={pin} alt="" />
                                    <p className="font-poppins text-black-50">Spain</p>
                                </div>
                                <div className="flex items-center gap-4 font-poppins font-semibold">
                                    <p className="text-black-50"><del>$950</del></p>
                                    <span className='py-1 px-2 rounded-md bg-pink-100'>
                                        <p className="text-pink-200">$850</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 card-wrapper">
                    <div className="bg-white-100 rounded-md">
                        <img src={deal_6} alt="" className='w-full' />
                        <div className="p-5">
                            <div className="flex justify-between">
                                <h4 className='text-black-100 text-xl font-bold font-poppins'>Cairo</h4>

                                <div className="flex items-center gap-3">
                                    <img src={star} alt="" />
                                    <p className="font-poppins text-gray-400">4.5</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <img src={pin} alt="" />
                                    <p className="font-poppins text-black-50">Italy</p>
                                </div>
                                <div className="flex items-center gap-4 font-poppins font-semibold">
                                    <p className="text-black-50"><del>$950</del></p>
                                    <span className='py-1 px-2 rounded-md bg-pink-100'>
                                        <p className="text-pink-200">$850</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 card-wrapper">
                    <div className="bg-white-100 rounded-md">
                        <img src={deal_7} alt="" className='w-full' />
                        <div className="p-5">
                            <div className="flex justify-between">
                                <h4 className='text-black-100 text-xl font-bold font-poppins'>Bali</h4>

                                <div className="flex items-center gap-3">
                                    <img src={star} alt="" />
                                    <p className="font-poppins text-gray-400">4.8</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <img src={pin} alt="" />
                                    <p className="font-poppins text-black-50">France</p>
                                </div>
                                <div className="flex items-center gap-4 font-poppins font-semibold">
                                    <p className="text-black-50"><del>$950</del></p>
                                    <span className='py-1 px-2 rounded-md bg-pink-100'>
                                        <p className="text-pink-200">$850</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 card-wrapper">
                    <div className="bg-white-100 rounded-md">
                        <img src={deal_8} alt="" className='w-full' />
                        <div className="p-5">
                            <div className="flex justify-between">
                                <h4 className='text-black-100 text-xl font-bold font-poppins'>Baku</h4>

                                <div className="flex items-center gap-3">
                                    <img src={star} alt="" />
                                    <p className="font-poppins text-gray-400">4.8</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <img src={pin} alt="" />
                                    <p className="font-poppins text-black-50">UK</p>
                                </div>
                                <div className="flex items-center gap-4 font-poppins font-semibold">
                                    <p className="text-black-50"><del>$950</del></p>
                                    <span className='py-1 px-2 rounded-md bg-pink-100'>
                                        <p className="text-pink-200">$850</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </Slider>

            <div className="flex gap-6 justify-center pt-8">
                <button onClick={() => slider?.current?.slickPrev()} className="left-arrow bg-white-100 hover:bg-seagreen-100 rounded-full p-2">

                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM17 9H1V7H17V9Z" fill="#999999" />
                    </svg>


                </button>
                <button onClick={() => slider?.current?.slickNext()} className="left-arrow bg-white-100 hover:bg-seagreen-100 rounded-full p-2">

                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z" fill="#999999" />
                    </svg>

                </button>
            </div>

        </div>

    )


}

export default ImageSlider 