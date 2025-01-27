import React from "react";
import { MdBathtub, MdBed } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Reusable PropertyCard Component
const PropertyCardItem = ({ property }) => {
    return (
        <Link to={`/property/${property.house.house_id}`} className="w-[410px] h-[555px] hover:shadow-xl relative border border-[gray-400] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700">
            {/* Status Badge */}
            <div
                className={`badge ${property.house_details.status === "For Sale"
                    ? "bg-green-600"
                    : "bg-[#1563DF]"} top-4 left-4 text-white rounded-md absolute border-none py-3`}
            >
                {property.house_details.status}
            </div>

            {/* Image */}
            <figure>
                <img
                    className="h-72 w-full object-cover"
                    src={property.image.link1}
                    alt={property.house.title}
                />
            </figure>

            <div className="card-body">
                {/* Title */}
                <h2 className="card-title">{property.house.title}</h2>
                <p>{property.house.full_address}</p>

                {/* Property Details */}
                <div className="flex items-center pb-3 gap-1 border-b border-b-gray-300">
                    <p className="flex items-center gap-1">
                        <MdBed className="text-xl text-gray-500" /> Beds: {property.house_details.bedrooms}
                    </p>
                    <p className="flex items-center gap-1">
                        <MdBathtub className="text-xl text-gray-500" /> Baths: {property.house_details.bathrooms}
                    </p>
                    <p className="flex items-center gap-1">
                        <TbRulerMeasure className="text-xl text-gray-500" /> Sqft: {property.house_details.property_area}
                    </p>
                </div>

                {/* User Info & Price */}
                <div className="flex w-full items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <img
                            className="h-12 w-12 rounded-full"
                            src={property.user.img_url}
                            alt={property.user.email}
                        />
                        <p className="text-base">
                            {property.user.first_name} {property.user.last_name}
                        </p>
                    </div>
                    <div className="text-xl font-semibold text-gray-500">
                        ${property.prices.price}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function PropertyCard({ data, isGrid, isTotal }) {
    const itemsPerPage = 6;
    const fullData = isTotal ? data : data.slice(0, 6);
    const [page, setPage] = React.useState(1);

    // Calculate items to display on current page
    const displayedData = fullData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    // Pagination handler
    const handlePagination = (direction) => {
        if (direction === "next" && displayedData.length === itemsPerPage) {
            setPage(page + 1);
        } else if (direction === "prev" && page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div>
            {/* Grid Display */}
            <div className={`grid grid-cols-${isGrid} gap-8 mt-16`}>
                {displayedData.map((property, index) => (
                    <PropertyCardItem key={index} property={property} />
                ))}
            </div>

            {/* Pagination Controls */}
            {isTotal && (
                <div className="flex justify-center items-center mt-6">
                    <button
                        className="btn bg-[#1563DF] text-white font-semibold py-2 px-4 rounded-full"
                        onClick={() => handlePagination("prev")}
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    <span className="mx-4 text-xl font-semibold">{`Page ${page}`}</span>
                    <button
                        className="btn bg-[#1563DF] text-white font-semibold py-2 px-4 rounded-full"
                        onClick={() => handlePagination("next")}
                        disabled={displayedData.length < itemsPerPage}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
