import React, { useState } from 'react'
import hedaerPic from '../../../assests/header/header.jpg'
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass, FaLocationArrow, FaPenToSquare } from 'react-icons/fa6';
import AdvanceSrc from './advanceSrch/AdvanceSrc';

export default function Header() {

  const [houseState, setHouseState] = useState("rent");

  const inActiveStateStyle = "bg-white text-base border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white";
  const activeStateStyle = "text-base border-[#1563DF] rounded-3xl bg-[#1563DF] hover:bg-[#1536DF] text-white";


  const conditionalRent = (houseState === "rent") ? activeStateStyle : inActiveStateStyle;
  const conditionalSell = (houseState === "sell") ? activeStateStyle : inActiveStateStyle;

  const commonStyle = "w-52 p-2 outline-none focus:outline-none border-none focus:border-none hover:border-none active:border-none";

  return (
    <div>
      <header className="w-full bg-opacity-60 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hedaerPic})`,
        }}>




        <div className="hero-overlay py-[3vh] bg-opacity-30 min-h-[65vh] flex flex-col justify-evenly space-y-10">
          <div>
            <h3 className="text-8xl text-white font-bold text-center">Find Your Frd Properties</h3>

            <p className="text-white pt-8 text-lg w-2/6  mx-auto text-center">We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?</p>
          </div>






          <div className="flex w-4/6  mx-auto justify-evenly items-center bg-white text-black rounded-full p-3 py-4 gap-5 relative">

            <div className="absolute -top-16 flex gap-4">
              {/* Rent Button */}
              <div onClick={() => setHouseState("rent")} className="relative cursor-pointer">
                <div className={`btn ${conditionalRent}`}>For Rent</div>
                <div
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                  }}
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 w-6 h-4 bg-[#1563DF] transition-all duration-300 ${houseState === "rent" ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                ></div>
              </div>

              {/* Sell Button */}
              <div onClick={() => setHouseState("sell")} className="relative cursor-pointer">
                <div className={`btn ${conditionalSell}`}>For Sell</div>
                <div
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                  }}
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 w-6 h-4 bg-[#1563DF] transition-all duration-300 ${houseState === "sell" ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                ></div>
              </div>
            </div>

            <div className='pr-2 border-r-2 border-gray-300'>

              <select className={commonStyle}>
                <option disabled selected>Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>House</option>
                <option>Office</option>
                <option>Stdio</option>
              </select>
            </div>

            <div className='flex justify-center items-center pr-2 border-r-2 border-gray-300'>

              <input
                type="text"
                placeholder="Location"
                className={commonStyle}
              />
              <FaLocationArrow className="text-base" />

            </div>

            <div className='flex justify-center items-center pr-2 border-r-2 border-gray-300'>

              <input
                type="text"
                placeholder="Search a Keyword"
                className={commonStyle}
              />

              <FaPenToSquare className="text-base" />

            </div>


            <div className='flex justify-center items-center gap-4'>

              <AdvanceSrc />


              <div>
                <Link
                  to="/signin"
                  className="btn bg-white text-base border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white"
                >
                  <FaMagnifyingGlass className="text-lg" /> Search
                </Link>
              </div>

            </div>


          </div>

        </div>

      </header>
    </div>
  )
}
