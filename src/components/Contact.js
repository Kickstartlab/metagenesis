import React from 'react'
import Footer from './Footer'
import MenuWhite from './MenuWhite'

function Contact() {
    return (
        <div className="bg-black-900">
            <div className="lg:px-20 px-5 container mx-auto">
                <MenuWhite />

                <div className="my-12">
                    <div className="my-12 sm:flex block items-center gap-x-6 font-poppins">
                        <div className="w-full">
                            <div className="mb-3"><label for="f-name" className="text-xl text-white-100 font-semibold">First
                                Name</label>
                            </div>
                            <input name="First name" type="text" placeholder="First name" id="f-name" required="" className="px-5 py-6 rounded-sm w-full bg-black-900 border-2 border-seagreen-100 placeholder-white border-transparent focus:outline-none focus:ring-2 focus:ring-seagreen-100" />
                        </div>
                        <div className="w-full sm:mt-0 mt-5">
                            <div className="mb-3"><label for="date" className=" text-xl text-white-100 font-semibold">Last
                                Name</label>
                            </div>
                            <input type="text" name="Last name" placeholder="Last name" id="l-name" required="" className="px-5 py-6 rounded-sm w-full bg-black-900 border-2 border-seagreen-100 placeholder-white border-transparent focus:outline-none focus:ring-2 focus:ring-seagreen-100" />
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="mb-3"><label for="name" className=" text-xl text-white-100 font-semibold">Email</label>
                        </div>
                        <input type="email" name="Email" placeholder="Ex JohnDoe214@gmail.com" id="email" required="" className="px-5 py-6 rounded-sm w-full bg-black-900 border-2 border-seagreen-100 placeholder-white border-transparent focus:outline-none focus:ring-2 focus:ring-seagreen-100" />
                    </div>
                    <div className="w-full">
                        <div className="mb-3"><label for="message" className=" text-xl text-white-100 font-semibold">What can we help
                            you with ?</label>
                        </div>
                        <textarea name="Message" id="message" rows="8" placeholder="Type here your message" required="" className="px-5 py-6 rounded-sm w-full bg-black-900 border-2 border-seagreen-100 placeholder-white border-transparent focus:outline-none focus:ring-2 focus:ring-seagreen-100"></textarea>
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default Contact
