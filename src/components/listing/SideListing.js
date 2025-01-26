import React from 'react';
import { MdBathtub, MdBed } from 'react-icons/md';
import { TbRulerMeasure } from 'react-icons/tb';
import img from '../../assests/service/sell.jpg';
import { Link } from 'react-router-dom';

// Sample Data
const data = [
    {
        title: "Modern Family Home",
        address: "123 Maple Street, Springfield",
        image: img,
        status: "Sale",
        beds: 4,
        baths: 3,
        sqft: 2500,
        price: 450000,
    },
    {
        title: "Cozy Apartment",
        address: "456 Elm Street, Chicago",
        image: img,
        status: "Rent",
        beds: 2,
        baths: 1,
        sqft: 850,
        price: 1200,
    },
    {
        title: "Luxury Villa",
        address: "789 Oak Avenue, Miami",
        image: img,
        status: "Sale",
        beds: 5,
        baths: 4,
        sqft: 4000,
        price: 1250000,
    },
    {
        title: "Downtown Studio",
        address: "101 Main Street, New York",
        image: img,
        status: "Rent",
        beds: 1,
        baths: 1,
        sqft: 600,
        price: 2500,
    },
    {
        title: "Suburban Retreat",
        address: "789 Pine Lane, Denver",
        image: img,
        status: "Sale",
        beds: 3,
        baths: 2,
        sqft: 1800,
        price: 350000,
    },
];

export default function SideListing() {
    return (
        <div className="mt-8">
            <p className='text-2xl font-semibold pt-6'>
                Latest Properties
            </p>

            {data.map((property, index) => (
                <Link to={`/property/${index}`}>

                    <div
                        key={index}
                        className="bg-base-100 hover:shadow-xl relative border border-[gray-400] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 grid grid-cols-12 my-7"
                    >
                        {/* Status Badge */}
                        <div
                            className={`badge ${property.status === "Sale" ? "bg-green-600" : "bg-[#1563DF]"
                                } top-4 left-4 text-white rounded-md absolute border-none py-2 px-3`}
                        >
                            {property.status}
                        </div>

                        {/* Image Section */}
                        <figure className="col-span-5">
                            <img
                                className="h-full w-full object-cover"
                                src={property.image}
                                alt={property.title}
                            />
                        </figure>

                        {/* Text Content Section */}
                        <div className="col-span-7 py-5 pl-3">
                            <h2 className="text-lg font-semibold mb-1">{property.title}</h2>
                            <p className="text-sm text-gray-500 mb-3">{property.address}</p>

                            {/* Property Details */}
                            <div className="flex items-center pb-3 gap-2 border-b border-b-gray-300">
                                <p className="flex items-center gap-1 text-sm text-gray-600">
                                    <MdBed className="text-lg text-gray-500" /> Beds: {property.beds}
                                </p>
                                <p className="flex items-center gap-1 text-sm text-gray-600">
                                    <MdBathtub className="text-lg text-gray-500" /> Baths: {property.baths}
                                </p>
                                <p className="flex items-center gap-1 text-sm text-gray-600">
                                    <TbRulerMeasure className="text-lg text-gray-500" /> Sqft: {property.sqft}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-lg font-medium text-gray-700 mt-3">
                                ${property.price.toLocaleString()}
                            </div>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    );
}
