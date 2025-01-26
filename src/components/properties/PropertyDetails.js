import React from "react";

export default function PropertyDetails({ houseDetails = {}, amenities = {} }) {
    // Filter out unwanted keys and transform `houseDetails` into key-value pairs
    const detailsArray = Object.entries(houseDetails)
        .filter(([key]) => !["house_details_id", "house_id"].includes(key)) // Exclude specific keys
        .map(([key, value]) => ({
            label: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), // Format label
            value,
        }));

    // Filter `amenities` to include only those that are `true`, excluding unwanted keys
    const amenitiesArray = Object.entries(amenities)
        .filter(([key, value]) => value === true && !["amenities_id", "house_id"].includes(key)) // Exclude specific keys
        .map(([key]) => key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())); // Format labels

    return (
        <div>
            {/* Property Details Section */}
            <p className="text-2xl pt-6 border-t mt-3">Property Details</p>
            <div className="grid grid-cols-2 mt-4 mb-5">
                {detailsArray.map(({ label, value }, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 p-4 rounded-lg hover:shadow-md transition"
                    >
                        <p className="text-gray-500">{label}:</p>
                        <p className="font-semibold">
                            {typeof value === "number" ? value.toLocaleString() : value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Amenities Section */}
            <p className="text-2xl pt-6 border-t mt-3">Amenities and Features</p>
            <div className="grid grid-cols-3 mt-4">
                {amenitiesArray.map((amenity, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-lg hover:shadow-md transition"
                    >
                    
                        <span className="text-gray-500 text-xl leading-none">•</span>
                        <p className=" text-gray-500 font-semibold">{amenity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
