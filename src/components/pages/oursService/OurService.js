import React from 'react'
import './ourservice.css'
import { FaArrowRight } from "react-icons/fa";
import sell from '../../../assests/service/sell.jpg'
import buy from '../../../assests/service/sell.jpg'
import rent from '../../../assests/service/sell.jpg'


export default function OurService() {
    return (
        <div className='w-5/6 mx-auto my-4'>

            <div
                className="hero rounded-3xl"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md  py-10 ">
                        <p>Home / Pages / Our-serices</p>
                        <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>


            <div className="text-center mt-10">
                <p className="text-[#1563DF] text-lg font-semibold mb-2">Featured Properties</p>
                <p className="text-2xl font-bold text-black">
                    Discover RE Venture’s Finest <br />
                    Properties for Your Dream Home
                </p>
            </div>

            <div className="flex justify-center items-center mt-5">

                <div className="card bg-base-100 w-96 cursor-pointer transition ease-in-out duration-700 border rounded-2xl border-gray-300 hover:shadow-2xl hover:border-transparent serviceDaddy">
                    <figure className="px-10 pt-10">
                        <img
                            src={buy}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title my-1">Buy A New Home</h2>
                        <p className='text-gray-400'>Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>

                        <div className="card-actions mt-2">
                            <button className="service-buton btn bg-white text-base border-[#1563DF] rounded-3xl ">Learn More  <FaArrowRight /></button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="flex justify-center items-center mt-5">

                <div className="card bg-base-100 w-96 cursor-pointer transition ease-in-out duration-700 border rounded-2xl border-gray-300 hover:shadow-2xl hover:border-transparent serviceDaddy">
                    <figure className="px-10 pt-10">
                        <img
                            src={rent}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title my-1">Buy A New Home</h2>
                        <p className='text-gray-400'>Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>

                        <div className="card-actions mt-2">
                            <button className="service-buton btn bg-white text-base border-[#1563DF] rounded-3xl ">Learn More  <FaArrowRight /></button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="flex justify-center items-center mt-5">

                <div className="card bg-base-100 w-96 cursor-pointer transition ease-in-out duration-700 border rounded-2xl border-gray-300 hover:shadow-2xl hover:border-transparent serviceDaddy">
                    <figure className="px-10 pt-10">
                        <img
                            src={sell}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title my-1">Buy A New Home</h2>
                        <p className='text-gray-400'>Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>

                        <div className="card-actions mt-2">
                            <button className="service-buton btn bg-white text-base border-[#1563DF] rounded-3xl ">Learn More  <FaArrowRight /></button>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )
}

