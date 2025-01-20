import React, { useState } from 'react';

const selectbtnstyle =
    "btn font-semibold text-sm my-1 py-1 h-auto min-h-2 border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white";

export default function FrdProperties() {
    // Initialize with a default value
    const [isActive, setIsActive] = useState("viewAll");

    return (
        <div className="w-5/6 m-auto my-16">
            <div className="text-center">
                <p className="text-[#1563DF] text-xl font-semibold">Featured Properties</p>
                <p className="text-4xl font-bold text-black">
                    Discover RE Venture’s Finest <br />
                    Properties for Your Dream Home
                </p>
            </div>

            <div className="flex justify-center items-center mt-5">
                <div className="mr-4">
                    <button
                        className={`${selectbtnstyle} ${isActive === "viewAll" ? "bg-[#1563DF] text-white" : "bg-white"
                            }`}
                        onClick={() => { setIsActive("viewAll"); console.log(isActive) }}
                    >
                        View all
                    </button>
                </div>
                <div className="mr-4">
                    <button
                        className={`${selectbtnstyle} ${isActive === "apartment" ? "bg-[#1563DF] text-white" : "bg-white"
                            }`}
                        onClick={() => setIsActive("apartment")}
                    >
                        Apartment
                    </button>
                </div>
                <div className="mr-4">
                    <button
                        className={`${selectbtnstyle} ${isActive === "villa" ? "bg-[#1563DF] text-white" : "bg-white"
                            }`}
                        onClick={() => setIsActive("villa")}
                    >
                        Villa
                    </button>
                </div>
                <div className="mr-4">
                    <button
                        className={`${selectbtnstyle} ${isActive === "house" ? "bg-[#1563DF] text-white" : "bg-white"
                            }`}
                        onClick={() => setIsActive("house")}
                    >
                        House
                    </button>
                </div>
                <div className="mr-4">
                    <button
                        className={`${selectbtnstyle} ${isActive === "office" ? "bg-[#1563DF] text-white" : "bg-white"
                            }`}
                        onClick={() => setIsActive("office")}
                    >
                        Office
                    </button>
                </div>
            </div>

            
        </div>
    );
}
