import React, { useState, useEffect } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { useParams } from "react-router-dom";
import PropertyFeatures from "./PropertyFeatures";
import PropertyGallery from "./PropertyGallery";
import PropertyOverview from "./PropertyOverview";
import SideListing from "../listing/SideListing";
import Search from "../listing/Search";
import PropertyDetails from "./PropertyDetails";
import Map from "../dashboard/addProperty/mapAndComponents/Map";
import Calculator from "./Calculator";

export default function Properties() {
    const { id } = useParams(); // Get the property ID from the URL
    const [property, setProperty] = useState(null); // State for property data
    const [isFav, setIsFav] = useState(false); // State for favorite toggle
    const [showToast, setShowToast] = useState(""); // State for toast message
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling

    // Fetch property data by ID
    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8080/house/propertyDetails/${id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                setProperty(data); // Update state with fetched data
            } catch (err) {
                setError(err.message);
                setShowToast(err.message); // Show the error in the toast
                setTimeout(() => setShowToast(""), 3000); // Clear the toast after 3 seconds
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPropertyData();
        }
    }, [id]);

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

    if (loading) return <p>Loading property details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!property) return <p>Property not found</p>;

    const { house, house_details, images, prices, amenities } = property;

    // Remove longitude and latitude from PropertyDetails and send to Map
    const mapInfoArray = Object.entries(house)
        .filter(([key]) => !["description", "house_id", "title", "full_address", "user_id", "longitude", "latitude"].includes(key)) // Exclude specific keys
        .map(([key, value]) => ({
            label: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), // Format label
            value,
        }));

    mapInfoArray.push({
        label: "Longitude",
        value: house_details.longitude,
    });
    mapInfoArray.push({
        label: "Latitude",
        value: house_details.latitude,
    });

    // Remove longitude and latitude from mapInfoArray
const houseDetails = house_details;


console.log(amenities);


    return (
        <div className="w-5/6 mx-auto my-12">
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-300 mb-4">
                <h1 className="text-4xl font-semibold">{house.title}</h1>
                <p className="text-2xl text-gray-500">
                    ${prices.price.toLocaleString()}
                    <span className="text-xl">
                        {houseDetails.status === "For Rent" ? "/ month" : ""}
                    </span>
                </p>
            </div>

            {/* Features and Actions */}
            <div className="flex items-center justify-between mb-6">
                <PropertyFeatures houseDetails={houseDetails} address={house.full_address} />
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
                    <p className="text-2xl pt-6 mt-5 mb-8">Description</p>
                    <p className="text-base text-gray-500 pb-5">{house.description}</p>
                    <PropertyOverview house={house} houseDetails={houseDetails} size={houseDetails.property_area} /> {/* Send size to PropertyOverview */}
                    <PropertyDetails houseDetails={houseDetails} amenities={amenities} /> {/* Remove longitude/latitude from here */}

                    {/* Map and Additional Info */}
                    <div>
                        <p className="text-2xl pt-6 border-t mt-3">Maps and Location</p>
                        <Map longitude={houseDetails.longitude} latitude={houseDetails.latitude} /> {/* Send longitude/latitude to Map */}
                        <div className="grid grid-cols-2 mt-5 mb-5">
                            {mapInfoArray.map(({ label, value }, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 space-x-10 p-2"
                                >
                                    <p className="text-gray-500 w-16">{label}:</p>
                                    <p className="font-semibold">
                                        {typeof value === "number" ? value.toLocaleString() : value}
                                    </p>
                                </div>
                            ))}
                        </div>
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
                <div
                    className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg shadow-lg ${error ? "bg-red-500 text-white" : "bg-blue-500 text-white"
                        }`}
                >
                    {showToast}
                </div>
            )}
        </div>
    );
}
