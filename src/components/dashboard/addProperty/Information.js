import React, { useState } from 'react'
import Map from './mapAndComponents/Map.js';
import CoordinatesInput from './mapAndComponents/CoordinatesInput.js';

export default function Information() {


    const [longitude, setLongitude] = useState(-74.0059418);
    const [latitude, setLatitude] = useState(40.7127847);

    return (
        <div className='px-4'>

            <form>

                <div className="mt-6">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Title*</label>
                    <input
                        required
                        placeholder='Property Name'
                        type="text"
                        className="input rounded-3xl input-bordered w-full "
                    />
                </div>


                <div className="mt-6">
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                        Description
                    </label>
                    <textarea
                        placeholder="Enter property description"
                        className="textarea rounded-3xl textarea-bordered w-full resize-none"
                        rows="4"
                    ></textarea>
                </div>


                <div className='md:flex items-center justify-between mt-6 space-x-6'>

                    <div className=' w-full '>
                        <label className="block text-sm font-medium mb-1 text-gray-700">Full Address*</label>
                        <input
                            required
                            placeholder='Enter property full address'
                            type="text"
                            className="input rounded-3xl input-bordered w-full"
                        />
                    </div>

                    <div className=' w-full '>
                        < label className="block text-sm font-medium  mb-1 text-gray-700">ZIP Code</label>
                        <input
                            placeholder="Zip Code"
                            type="text"
                            className="input rounded-3xl input-bordered w-full"
                            onKeyDown={(e) => {
                                if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
                                    e.preventDefault();
                                }
                            }}
                        />
                    </div>


                    <div className=' w-full '>
                        < label className="block text-sm font-medium  mb-1 text-gray-700">Country</label>
                        <select className="select select-bordered rounded-3xl w-full">
                            <option className="">Bangladesh</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                    </div>

                </div>


                <div className='md:flex items-center justify-center mt-6 space-x-6'>

                    <div className=' w-full '>
                        <label className="block text-sm font-medium mb-1 text-gray-700">Province/State*</label>
                        <input
                            required
                            placeholder='Arizona'
                            type="text"
                            className="input rounded-3xl input-bordered w-full"
                        />
                    </div>

                    <div className=' w-full '>
                        < label className="block text-sm font-medium  mb-1 text-gray-700">Neighborhood*</label>
                        <select className="select select-bordered rounded-3xl w-full">
                            <option disabled className="">Neighborhood</option>
                            <option>Yes</option>
                            <option>No</option>

                        </select>
                    </div>

                </div>


                <CoordinatesInput longitude={longitude} setLongitude={setLongitude} latitude={latitude} setLatitude={setLatitude} />

        

                <Map latitude={latitude} longitude={longitude} />


            </form>

        </div>
    )
}
