import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";

const selectbtnstyle =
    "btn font-semibold text-sm my-1 py-1 h-auto min-h-2 border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white";

const propertyTypes = ["viewAll", "Apartment", "Villa", "House", "Office"]; // Dynamic list of property types

export default function FrdProperties() {
    const [isActive, setIsActive] = useState("viewAll");
    const [propertyData, setPropertyData] = useState([]); // State to hold property data
    const [filteredProperties, setFilteredProperties] = useState([]); // State to hold filtered properties
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(""); // State for error handling

    // Fetch all property data initially (when isActive is "viewAll")
    const fetchPropertyData = async () => {
        setLoading(true); // Set loading to true before making the request
        try {
            const response = await fetch("http://localhost:8080/house/propertyDetails");
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            setPropertyData(data); // Set all properties data
            setFilteredProperties(data); // Set all properties initially as filtered
        } catch (err) {
            setError(err.message); // Handle error
        } finally {
            setLoading(false); // Set loading to false after fetching is complete
        }
    };

    // Effect to fetch property data once when the component mounts
    useEffect(() => {
        fetchPropertyData(); // Fetch data for "viewAll" on mount
    }, []); // Empty dependency array means this will only run once when the component mounts

    // Filter properties when the selected type changes
    useEffect(() => {
        if (isActive === "viewAll") {
            setFilteredProperties(propertyData); // Show all properties
        } else {
            const filtered = propertyData.filter(property =>
                property.house_details.type === isActive
            );
            setFilteredProperties(filtered); // Show only the filtered properties
        }
    }, [isActive, propertyData]); // Re-run when isActive or propertyData changes

    // Show loading text if still loading or error if there's an issue
    if (loading) return <p>Loading properties...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log(filteredProperties); // Check the filtered data

    return (
        <div className="w-5/6 m-auto my-16 mt-24">
            {/* Header Section */}
            <div className="text-center">
                <p className="text-[#1563DF] text-xl font-semibold">Featured Properties</p>
                <p className="text-4xl font-bold text-black">
                    Discover RE Venture’s Finest <br />
                    Properties for Your Dream Home
                </p>
            </div>

            {/* Buttons Section */}
            <div className="flex justify-center items-center mt-5">
                {propertyTypes.map((type) => (
                    <div key={type} className="mr-4">
                        <button
                            className={`${selectbtnstyle} ${isActive === type ? "bg-[#1563DF] text-white" : "bg-white"
                                }`}
                            onClick={() => {
                                setIsActive(type);
                                console.log(type); // Logging the active type
                            }}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalize first letter */}
                        </button>
                    </div>
                ))}
            </div>

            {/* Cards Section */}
            <div className="w-4/5 mx-auto mt-14">
                {/* Pass the filtered property data to the PropertyCard */}
                <PropertyCard data={filteredProperties} isGrid={3} isTotal={false} />
            </div>
        </div>
    );
}
