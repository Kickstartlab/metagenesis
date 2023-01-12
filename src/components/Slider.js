import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deal_1 from '../assets/slider-1.png';
import deal_2 from '../assets/slider-2.png';
import deal_3 from '../assets/slider-3.png';

function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
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
                autoplay: true,
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

                        <div className="px-3 float-right absolute -mt-6">
                            <button className="bg-purple-200 text-white-100 rounded-full py-2 px-4 text-white font-poppins">
                                Place bid
                            </button>
                        </div>

                        <img src={deal_1} alt="" className='w-full' />

                    </div>
                </div>

                <div className="card-wrapper col-span-1 py-5">
                    <div className=" card">

                        <div className="px-3 float-right absolute -mt-6">
                            <button className="bg-purple-200 text-white-100 rounded-full py-2 px-4 text-white font-poppins">
                                Place bid
                            </button>
                        </div>

                        <img src={deal_1} alt="" className='w-full' />

                    </div>
                </div>

                <div className="card-wrapper col-span-1 py-5">
                    <div className=" card">

                        <div className="px-3 float-right absolute -mt-6">
                            <button className="bg-purple-200 text-white-100 rounded-full py-2 px-4 text-white font-poppins">
                                Place bid
                            </button>
                        </div>

                        <img src={deal_2} alt="" className='w-full' />

                    </div>
                </div>

                <div className="card-wrapper col-span-1 py-5">
                    <div className=" card">

                        <div className="px-3 float-right absolute -mt-6">
                            <button className="bg-purple-200 text-white-100 rounded-full py-2 px-4 text-white font-poppins">
                                Place bid
                            </button>
                        </div>

                        <img src={deal_3} alt="" className='w-full' />

                    </div>
                </div>


            </Slider>

            {/* <div className="flex gap-6 justify-center pt-8">
                <button onClick={() => slider?.current?.slickPrev()} className="left-arrow  hover:bg-seagreen-100 rounded-full p-2">

                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM17 9H1V7H17V9Z" fill="#999999" />
                    </svg>


                </button>
                <button onClick={() => slider?.current?.slickNext()} className="left-arrow  hover:bg-seagreen-100 rounded-full p-2">

                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z" fill="#999999" />
                    </svg>

                </button>
            </div> */}

        </div>

    )


}

export default ImageSlider 