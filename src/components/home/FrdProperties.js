import React, { useState } from 'react'


const selectbtnstyle = "btn bg-white font-black font-semibold text-sm my-1 py-1 h-auto min-h-2 border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white";

export default function FrdProperties() {


    const [isActive, setIsActive] = useState("viewAll");

    return (
        <div className='w-5/6 m-auto my-16'>
            <div className='text-center'>
                <p className=' text-[#1563DF] text-xl font-semibold'>Featured Properties</p>
                <p className='text-4xl font-bold text-black'>Discover RE Venture’s Finest <br />Properties for Your Dream Home</p>
            </div>

            <div className='flex justify-center items-center mt-5'>
                <div className="mr-4">
                    <a href
                        className={`${selectbtnstyle} ${isActive === "viewAll" ? "bg-[#1563DF] text-white" : ""}`}
                        onClick={() => setIsActive("viewAll")}
                    >
                        View all
                    </a>
                </div>
                <div className="mr-4">
                <a href
                        className={`${selectbtnstyle} ${isActive === "apartment" ? "bg-[#1563DF] text-white" : ""}`}
                        onClick={() => setIsActive("apartment")}
                    >
                        Apartment
                    </a>
                </div>
                <div className="mr-4">
                <a href
                        className={`${selectbtnstyle} ${isActive === "villa" ? "bg-[#1563DF] text-white" : ""}`}
                        onClick={() => setIsActive("villa")}
                    >
                        View all
                    </a>
                </div>
                <div className="mr-4">
                <a href
                        className={`${selectbtnstyle} ${isActive === "house" ? "bg-[#1563DF] text-white" : ""}`}
                        onClick={() => setIsActive("house")}
                    >
                        House
                    </a>
                </div>
                <div className="mr-4">
                <a href
                        className={`${selectbtnstyle} ${isActive === "office" ? "bg-[#1563DF] text-white" : ""}`}
                        onClick={() => setIsActive("office")}
                    >
                        Office
                    </a>
                </div>

            </div>

        </div>
    )
}
