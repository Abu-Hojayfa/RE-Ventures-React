import React from 'react';

export default function DropDowns() {
    return (
        <div className="grid grid-cols-2 gap-x-20 mb-6">

            <div className="grid grid-cols-2 gap-4">

                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">Rooms</label>
                    <input
                        placeholder='Enter number'
                        type="text"
                        className="input rounded-3xl input-bordered w-full"
                        onKeyDown={(e) => {
                            if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>

                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">Bedrooms</label>
                    <input
                        type="text"
                        placeholder='Enter number'
                        className="input rounded-3xl input-bordered w-full"
                        onKeyDown={(e) => {
                            if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>

            </div>


            <div className="grid grid-cols-2 gap-4">

                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">Bathrooms</label>
                    <input
                        type="text"
                        placeholder='Enter number'
                        className="input rounded-3xl input-bordered w-full"
                        onKeyDown={(e) => {
                            if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>



                <div>
                    < label className="block text-sm font-medium pl-2  mb-1 text-gray-700">Country</label>
                    <select className="select select-bordered rounded-3xl w-full">
                        <option disabled className="">Select Country</option>
                        <option>Bangladesh</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>

            </div>


        </div>
    )
}
