import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import img from "../../assests/service/buy.jpg"

const selectbtnstyle =
    "btn font-semibold text-sm my-1 py-1 h-auto min-h-2 border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white";

const propertyTypes = ["viewAll", "apartment", "villa", "house", "office"]; // Dynamic list of property types



const propertyData = [
    {
        title: "Lakeview Haven, Lake Tahoe",
        address: "145 Brooklyn Ave, California, New York",
        image: img, // Replace with actual image URLs
        beds: 3,
        baths: 2,
        sqft: 1150,
        price: "750,000",
        ownerName: "Mr. Car Man",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner", // Replace with actual owner image URLs
        status: "Rent"
    },
    {
        title: "Modern Downtown Condo",
        address: "10th Avenue, Seattle, Washington",
        image: img,
        beds: 2,
        baths: 1,
        sqft: 900,
        price: "500,000",
        ownerName: "Ms. Jane Doe",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Sale"
    },
    {
        title: "Luxury Villa, Miami Beach",
        address: "Palm Drive, Miami Beach, Florida",
        image: img,
        beds: 5,
        baths: 4,
        sqft: 3200,
        price: "2,500,000",
        ownerName: "Mr. John Smith",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Sale"
    },
    {
        title: "Suburban Family Home",
        address: "Maple Street, Springfield, Illinois",
        image: img,
        beds: 4,
        baths: 3,
        sqft: 2100,
        price: "350,000",
        ownerName: "Mrs. Emily Rose",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Rent"
    },
    {
        title: "Executive Office Space",
        address: "Downtown, Los Angeles, California",
        image: img,
        beds: 0, // No beds for office spaces
        baths: 2,
        sqft: 5000,
        price: "1,200,000",
        ownerName: "Mr. Mark Wilson",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Sale"
    },
    {
        title: "Cozy Mountain Cabin",
        address: "Aspen, Colorado",
        image: img,
        beds: 2,
        baths: 1,
        sqft: 800,
        price: "450,000",
        ownerName: "Ms. Sarah Connor",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Rent"
    },
];




export default function FrdProperties() {
    const [isActive, setIsActive] = useState("viewAll");

    return (
        <div className="w-5/6 m-auto my-16">
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



            {/* Cards */}
            <div className="w-4/5 mx-auto">
                <PropertyCard data={propertyData} />
            </div>

        </div>
    );
}
