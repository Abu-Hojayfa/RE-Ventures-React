import React, { useEffect, useState } from 'react';
import { MdBathtub, MdBed } from 'react-icons/md';
import { TbRulerMeasure } from 'react-icons/tb';
import img from '../../assests/service/sell.jpg';
import { Link } from 'react-router-dom';

// Sample Data


export default function SideListing() {

    const [propertyData, setPropertyData] = useState([]); // State to hold property data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(""); // State for error handling

    // Fetch property data from the API
    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                const response = await fetch("http://localhost:8080/house/propertyDetails");
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                const data = await response.json();
                setPropertyData(data); // Set the fetched data
            } catch (err) {
                setError(err.message); // Handle error
            } finally {
                setLoading(false); // Set loading to false after fetching is complete
            }
        };

        fetchPropertyData();
    }, [])

    // Show loading text if still loading or error if there's an issue
    if (loading) return <p>Loading properties...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div className="mt-8">
            <p className='text-2xl font-semibold pt-6'>
                Latest Properties
            </p>

            {propertyData.slice(0,5).map((property, index) => (
                <Link to={`/property/${index}`}>

                    <div
                        key={index}
                        className="bg-base-100 hover:shadow-xl relative border border-[gray-400] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 grid grid-cols-12 my-7"
                    >
                        {/* Status Badge */}
                        <div
                            className={`badge ${property.house_details.status === "For Sale" ? "bg-green-600" : "bg-[#1563DF]"
                                } top-4 left-4 text-white rounded-md absolute border-none py-2 px-3`}
                        >
                            {property.house_details.status}
                        </div>

                        {/* Image Section */}
                        <figure className="col-span-5">
                            <img
                                className="h-full w-full object-cover"
                                src={property.image.link1}
                                alt={property.house.title}
                            />
                        </figure>

                        {/* Text Content Section */}
                        <div className="col-span-7 py-5 pl-3">
                            <h2 className="text-lg font-semibold mb-1">{property.house.title}</h2>
                            <p className="text-sm text-gray-500 mb-3">{property.house.full_address}</p>

                            {/* Property Details */}
                            <div className="flex items-center pb-3 gap-2 border-b border-b-gray-300">
                                <p className="flex items-center gap-1 text-sm text-gray-600">
                                    <MdBed className="text-lg text-gray-500" /> Beds: {property.house_details.bedrooms}
                                </p>
                                <p className="flex items-center gap-1 text-sm text-gray-600">
                                    <MdBathtub className="text-lg text-gray-500" /> Baths: {property.house_details.bathrooms}
                                </p>
                                <p className="flex items-center gap-1 text-sm text-gray-600">
                                    <TbRulerMeasure className="text-lg text-gray-500" /> Sqft: {property.house_details.property_area}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-lg font-medium text-gray-700 mt-3">
                                ${property.prices.price.toLocaleString()}
                            </div>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    );
}
