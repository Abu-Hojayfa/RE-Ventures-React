import React from 'react'
import hedaerPic from '../../../assests/header/header.jpg'

export default function Header() {
  return (
    <div>
      <header className="w-full bg-opacity-60 h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hedaerPic})`,
        }}>




        <div className="hero-overlay bg-opacity-30 flex flex-col justify-center items-center h-full">
          <h3 className="text-6xl text-white font-bold text-center pt-20">Welcome to Frd Properties</h3>

          <div className="flex justify-center items-center bg-white text-black rounded-full p-5 mt-10">
            
          </div>

        </div>

      </header>
    </div>
  )
}
