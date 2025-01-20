import React from 'react'
import './Common.css'
import { FaArrowRight } from "react-icons/fa";
import sell from '../../assests/service/sell.jpg'
import buy from '../../assests/service/buy.jpg'
import rent from '../../assests/service/rent.jpg'

export default function WhatweDo() {
    return (
        <div className='mb-16'>
            <div className="text-center my-12">
                <p className="text-[#1563DF] text-lg font-semibold mb-2">Featured Properties</p>
                <p className="text-2xl font-bold text-black">
                    Discover RE Venture’s Finest <br />
                    Properties for Your Dream Home
                </p>
            </div>

            <div className="flex justify-center items-center mt-8 gap-8">

                <div className="card card-compact bg-base-100 w-96 shadow-xl cursor-pointer transition ease-in-out duration-700 border rounded-2xl border-gray-300 hover:shadow-2xl hover:border-transparent serviceDaddy">
                    <figure className="px-4 pt-4">
                        <img
                            src={buy}
                            alt="Shoes"
                            className="rounded-xl h-72 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title my-1">Buy A New Home</h2>
                        <p className='text-gray-400'>Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>

                        <div className="card-actions mt-2">
                            <button className="service-buton btn bg-white text-base border-[#1563DF] rounded-3xl ">Learn More  <FaArrowRight /></button>
                        </div>
                    </div>
                </div>


                <div className="card card-compact bg-base-100 w-96 shadow-xl cursor-pointer transition ease-in-out duration-700 border rounded-2xl border-gray-300 hover:shadow-2xl hover:border-transparent serviceDaddy">
                    <figure className="px-4 pt-4">
                        <img
                            src={rent}
                            alt="Shoes"
                            className="rounded-xl  h-72 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title my-1">Buy A New Home</h2>
                        <p className='text-gray-400'>Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>

                        <div className="card-actions mt-2">
                            <button className="service-buton btn bg-white text-base border-[#1563DF] rounded-3xl ">Learn More  <FaArrowRight /></button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 w-96 shadow-xl cursor-pointer transition ease-in-out duration-700 border rounded-2xl border-gray-300 hover:shadow-2xl hover:border-transparent serviceDaddy">
                    <figure className="px-4 pt-4">
                        <img
                            src={sell}
                            alt="Shoes"
                            className="rounded-xl h-72 w-full" />
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
