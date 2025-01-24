import React from "react";
import { MdBathtub, MdBed } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";

export default function PropertyCard({ data }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
            {data.map((property, index) => (
                <div
                    key={index}
                    className="card bg-base-100 w-[410px] hover:shadow-xl relative border border-[gray-400] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700"
                >
                    <div
                        className={`badge ${property.status === "Sale" ? "bg-green-600" : "bg-[#1563DF]"
                            } top-4 left-4 text-white rounded-md absolute border-none py-3`}
                    >
                        {property.status}
                    </div>

                    <figure>
                        <img
                            className="h-72 w-full object-cover"
                            src={property.image} // Use the correct key
                            alt={property.title} // Add alt text for accessibility
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{property.title}</h2>
                        <p>{property.address}</p>

                        <div className="flex items-center pb-3 mt-1 gap-1 border-b border-b-gray-300">

                            <p className="flex items-center gap-1">
                                <MdBed className="text-xl text-gray-500" /> Beds: {property.beds}
                            </p>

                            <p className="flex items-center gap-1">
                                <MdBathtub className="text-xl text-gray-500" /> Baths: {property.baths}
                            </p>

                            <p className="flex items-center gap-1">
                                <TbRulerMeasure className="text-xl text-gray-500" /> Sqft: {property.sqft}
                            </p>

                        </div>

                        <div className="flex w-full items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <img
                                    className="h-12 w-12 rounded-full"
                                    src={property.image}
                                    alt={property.title}
                                />
                                <p className="text-base">
                                    {property.ownerName}
                                </p>
                            </div>
                            <div className="text-2xl font-semibold text-gray-500">
                                ${property.price}
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}
