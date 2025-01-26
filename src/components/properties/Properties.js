import React, { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { useParams } from "react-router-dom";
import propertyData from "./PropertyData"; // Import property data
import PropertyFeatures from "./PropertyFeatures";
import PropertyGallery from "./PropertyGallery";
import PropertyOverview from "./PropertyOverview";
import SideListing from "../listing/SideListing";
import Search from "../listing/Search";
import PropertyDetails from "./PropertyDetails";
import Map from "../dashboard/addProperty/mapAndComponents/Map";
import Calculator from "./Calculator";

export default function Properties() {
    const { id } = useParams();
    const [isFav, setIsFav] = useState(false);
    const [showToast, setShowToast] = useState("");


    const { house, house_details, images, prices, amenities } = propertyData;

    const mapInfoArray = Object.entries(house)
        .filter(([key]) => !["description", "house_id", "title", "full_address", "user_id"].includes(key)) // Exclude specific keys
        .map(([key, value]) => ({
            label: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), // Format label
            value,
        }));


    const handleFavoriteToggle = () => {
        setIsFav(!isFav);
        setShowToast(isFav ? "Removed from Favorites" : "Added to Favorites");
        setTimeout(() => setShowToast(""), 3000);
    };

    const handleShareClick = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setShowToast("Link copied to clipboard!");
            setTimeout(() => setShowToast(""), 3000);
        });
    };

    const heartColor = isFav ? "#DD5151" : "#b0b0b0";

    return (
        <div className="w-5/6 mx-auto my-12">
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-300 mb-4">
                <h1 className="text-4xl font-semibold">{house.title}</h1>
                <p className="text-2xl text-gray-500">
                    ${prices.price.toLocaleString()}
                    <span className="text-xl">
                        {house_details.status === "For Rent" ? "/ month" : ""}
                    </span>
                </p>
            </div>

            {/* Features and Actions */}
            <div className="flex items-center justify-between mb-6">
                <PropertyFeatures houseDetails={house_details} address={house.full_address} />
                <div className="flex items-center gap-5">
                    <div
                        onClick={handleFavoriteToggle}
                        className="p-2 cursor-pointer"
                        style={{ color: heartColor, fontSize: "2rem" }}
                        data-tip={isFav ? "Remove from Favorites" : "Add to Favorites"}
                    >
                        {isFav ? <IoIosHeart /> : <IoIosHeartEmpty />}
                    </div>
                    <div
                        onClick={handleShareClick}
                        className="text-3xl text-gray-500 cursor-pointer"
                        data-tip="Copy Link"
                    >
                        <GoShareAndroid />
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <PropertyGallery images={images} />

            {/* Overview */}
            <div className="grid grid-cols-12 gap-36">
                <div className="col-span-8">
                    <PropertyOverview house={house} houseDetails={house_details} />
                    <PropertyDetails houseDetails={house_details} amenities={amenities} />

                    {/* Map and Things */}
                    <div>
                        <p className="text-2xl pt-6 border-t mt-3">Maps and Location</p>
                        <Map longitude={house.longitude} latitude={house.latitude} />
                        <div className="grid grid-cols-2 mt-5 mb-5">
                            {mapInfoArray.map(({ label, value }, index) => (
                                <div
                                    key={index}
                                    className="flex items-center   gap-2 space-x-10 p-2"
                                >
                                    <p className="text-gray-500 w-16">{label}:</p>
                                    <p className="font-semibold">
                                        {typeof value === "number" ? value.toLocaleString() : value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Map End Here */}

                        <Calculator />

                    </div>

                </div>
                <div className="col-span-4 mt-16">
                    <Search />
                    <SideListing />
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
