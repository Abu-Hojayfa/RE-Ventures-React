import React from "react";
import { MdBathtub, MdBed, MdPinDrop } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";

export default function PropertyFeatures({ details }) {
    const { bedrooms, bathrooms, size, address } = details;

    return (
        <div className="flex gap-20">
            <div>
                <p className="text-lg font-semibold">Features</p>
                <div className="flex items-center mb-3 mt-1 gap-8">
                    <p className="flex items-center gap-2">
                        <MdBed className="text-xl text-gray-500" /> Beds: {bedrooms}
                    </p>
                    <p className="flex items-center gap-2">
                        <MdBathtub className="text-xl text-gray-500" /> Baths: {bathrooms}
                    </p>
                    <p className="flex items-center gap-2">
                        <TbRulerMeasure className="text-xl text-gray-500" /> Sqft: {size}
                    </p>
                </div>
            </div>
            <div>
                <p className="text-lg font-semibold mb-1">Location</p>
                <p className="text-base text-gray-500 flex items-center gap-1">
                    <MdPinDrop className="text-xl text-gray-500" /> {address}
                </p>
            </div>
        </div>
    );
}
