import React from 'react'
import { IoCall, IoMail, IoLogoFacebook, IoLogoInstagram, IoLogoTwitch, IoLogoDiscord } from "react-icons/io5";

import img1 from '../../assests/agents/agent-1.jpg'
import img2 from '../../assests/agents/agent-2.jpg'
import img3 from '../../assests/agents/agent-3.jpg'
import img4 from '../../assests/agents/agent-4.jpg'


export default function OurAgents() {
    return (
        <div className='mb-16 mt-28'>
            <div className="text-center my-12">
                <p className="text-[#1563DF] text-lg font-semibold mb-1">Our Teams</p>
                <p className="text-3xl font-bold text-black">
                    Meet Our Agents
                </p>
            </div>

            <div className='md:flex gap-6 justify-center items-center'>

                <Agent name="Chris Patt" position={"Administrator"} src={img1} />
                <Agent name="Chris nigaa" position={"Kamla"} src={img2} />
                <Agent name="Hitlar" position={"Jew Killer"} src={img3} />
                <Agent name="Nigga Man" position={"Stealing"} src={img4} />

            </div>

        </div>
    )
}



const Agent = ({ name, position, src }) => {
    return (
        <div className="card card-compact w-80 cursor-pointer rounded-2xl hover:shadow-2xl transition-all duration-700 group relative">

            <div className="relative hidden group-hover:block top-[17.2rem] rounded right-[-20%]   duration-700">
                <div className="group flex duration-300 ease-in-out justify-evenly items-center absolute p-2 text-xl rounded-xl backdrop-blur-lg">

                    <IoLogoFacebook
                        className=" w-12 hover:text-[#1563DF] transition-all text-[#ffffff] duration-400 ease-in-out border-r-2 border-[#dfe5e9]"
                    />

                    <IoLogoInstagram
                        className=" w-12 hover:text-[#E56969] transition-all text-[#ffffff] duration-400 ease-in-out border-r-2 border-[#dfe5e9]"
                    />

                    <IoLogoTwitch
                        className=" w-12 hover:text-[#4b15df] transition-all text-[#ffffff] duration-400 ease-in-out border-r-2 border-[#dfe5e9]"
                    />

                    <IoLogoDiscord
                        className=" w-12 hover:text-[#1563DF] transition-all text-[#ffffff] duration-400 ease-in-out "
                    />

                </div>
            </div>

            {/* Add the 'group' class here */}
            <figure>
                <img
                    src={src}
                    alt="Chris Patt"
                    className="rounded-t-2xl" // Optional: Rounded top corners for the image
                />
            </figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p className="pt-0 text-base">{position}</p>
                    </div>
                    {/* Icons with hover effect */}
                    <div className="flex items-center justify-center gap-3 text-[#A3ABB0] group-hover:text-white">
                        <IoCall className="w-10 h-10 rounded-full border border-[#A3ABB0] p-2 group-hover:bg-[#1563DF] transition-all duration-700 ease-in-out" />
                        <IoMail className="w-10 h-10 rounded-full border border-[#A3ABB0] p-2 group-hover:bg-[#1563DF] transition-all duration-700 ease-in-out" />
                    </div>
                </div>
            </div>
        </div>
    )
}