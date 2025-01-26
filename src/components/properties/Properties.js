import React, { useState } from "react";
import { MdBathtub, MdBed, MdPinDrop } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { useParams } from "react-router-dom";
import propertyData from "./PropertyData"; // Import the data
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { BsHouse, BsRulers } from "react-icons/bs";

export default function Properties() {
    const { id } = useParams();

    const [isFav, setIsFav] = useState(false); // Initial state for favorite
    const [showToast, setShowToast] = useState(""); // State to manage the toast message

    // Extract the necessary data from the propertyData object
    const { house, house_details, images, prices } = propertyData;

    const handleFavoriteToggle = () => {
        setIsFav(!isFav);
        // Show toast message when favorite is added/removed
        setShowToast(isFav ? "Removed from Favorites" : "Added to Favorites");
        setTimeout(() => setShowToast(""), 3000); // Hide toast after 3 seconds
    };

    const handleShareClick = () => {
        // Copy property link to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            // Show toast when copied
            setShowToast("Link copied to clipboard!");
            setTimeout(() => setShowToast(""), 3000); // Hide toast after 3 seconds
        });
    };

    // Define dynamic colors for the heart icon
    const heartColor = isFav ? "#DD5151" : "#b0b0b0"; // Red when active, gray when inactive

    return (
        <div className="w-5/6 mx-auto my-12">
            {/* Property Title and Status */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-300 mb-4">
                <h1 className="text-4xl font-semibold">{house.title}</h1>
                <p className="text-2xl text-semibold text-gray-500">
                    ${prices.price.toLocaleString()}
                    <span className="text-xl">
                        {house_details.status === "For Rent" ? "/ month" : ""}
                    </span>
                </p>
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="flex gap-20">
                    <div>
                        <p className="text-lg font-semibold">Features</p>
                        <div className="flex items-center mb-3 mt-1 gap-8">
                            <p className="flex items-center gap-2">
                                <MdBed className="text-xl text-gray-500" /> Beds: {house_details.bedrooms}
                            </p>
                            <p className="flex items-center gap-2">
                                <MdBathtub className="text-xl text-gray-500" /> Baths: {house_details.bathrooms}
                            </p>
                            <p className="flex items-center gap-2">
                                <TbRulerMeasure className="text-xl text-gray-500" /> Sqft: {house_details.size}
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-semibold mb-1">Location</p>
                        <p className="text-base text-gray-500 flex items-center gap-1">
                            <MdPinDrop className="text-xl text-gray-500" /> {house.full_address}
                        </p>
                    </div>
                </div>

                {/* Favorite Heart Icon and Share Icon */}
                <div className="flex items-center gap-5">
                    {/* Tooltip and Heart Icon for Favorite */}
                    <div className="relative">
                        <div
                            onClick={handleFavoriteToggle}
                            className="p-2 cursor-pointer tooltip tooltip-bottom"
                            style={{ color: heartColor, fontSize: "2rem" }}
                            data-tip={isFav ? "Remove from Favorites" : "Add to Favorites"}
                        >
                            {isFav ? <IoIosHeart /> : <IoIosHeartEmpty />}
                        </div>
                    </div>

                    {/* Share Icon with Tooltip */}
                    <div className="relative">
                        <div
                            onClick={handleShareClick}
                            className="text-3xl text-gray-500 cursor-pointer tooltip tooltip-bottom"
                            data-tip="Copy Link"
                        >
                            <GoShareAndroid />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Image with Thumbnails */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-2 row-span-2">
                    <img
                        src={images.links[0]}
                        alt="Hero Property"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
                    />
                </div>

                {images.links.slice(1).map((image, index) => (
                    <div key={index} className="col-span-1 row-span-1">
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                            onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
                        />
                    </div>
                ))}
            </div>

            {/* Property Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition">
                    <BsHouse className="text-3xl text-blue-500" />
                    <div>
                        <p className="text-gray-500">Property ID:</p>
                        <p className="font-semibold">{house.house_id}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition">
                    <MdBed className="text-3xl text-blue-500" />
                    <div>
                        <p className="text-gray-500">Bedrooms:</p>
                        <p className="font-semibold">{house_details.bedrooms}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition">
                    <MdBathtub className="text-3xl text-blue-500" />
                    <div>
                        <p className="text-gray-500">Bathrooms:</p>
                        <p className="font-semibold">{house_details.bathrooms}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition">
                    <BsRulers className="text-3xl text-blue-500" />
                    <div>
                        <p className="text-gray-500">Size:</p>
                        <p className="font-semibold">{house_details.size} Sqft</p>
                    </div>
                </div>
            </div>

            {/* Toast Message */}
            {showToast && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-4 bg-blue-500 text-white rounded-lg shadow-lg">
                    {showToast}
                </div>
            )}
        </div>
    );
}
