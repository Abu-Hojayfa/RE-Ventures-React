import React, { useState } from "react";

const selectBtnStyle =
    "btn text-base border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white transition-all";

const propertyTypes = ["sale", "rent"]; // Dynamic list of property types
const countries = ["Bangladesh", "United States", "Canada", "Mexico"]; // Country list

export default function Search() {
    const [isActive, setIsActive] = useState("sale"); // Active property type
    const [formData, setFormData] = useState({
        keyword: "",
        country: "",
        rooms: "",
        bedrooms: "",
        bathrooms: "",
    });

    // Handle input changes dynamically
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className=" border border-gray-200 px-4 py-8 rounded-xl">
            {/* Property Type Buttons */}
            <div className="flex items-center justify-center space-x-5 mb-5">
                {propertyTypes.map((type) => (
                    <button
                        key={type}
                        className={`${selectBtnStyle} ${isActive === type ? "bg-[#1563DF] text-white" : "bg-white text-black"
                            }`}
                        onClick={() => {
                            setIsActive(type);
                        }}
                    >
                        For {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalize */}
                    </button>
                ))}
            </div>

            {/* Search Form */}
            <form className="space-y-5">
                {/* Keyword Input */}
                <input
                    placeholder="Search a keyword"
                    type="text"
                    className="input rounded-3xl input-bordered w-full"
                    value={formData.keyword}
                    onChange={(e) => handleInputChange("keyword", e.target.value)}
                />

                {/* Country Select */}
                <select
                    className="select select-bordered rounded-3xl w-full"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                >
                    <option disabled value="">
                        Select a Country
                    </option>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>

                {/* Numeric Inputs (Rooms, Bedrooms, Bathrooms) */}
                {["rooms", "bedrooms", "bathrooms"].map((field) => (
                    <input
                        key={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalize field name
                        type="text"
                        className="input rounded-3xl input-bordered w-full"
                        value={formData[field]}
                        onChange={(e) => {
                            if (/^[0-9]*$/.test(e.target.value)) {
                                handleInputChange(field, e.target.value);
                            }
                        }}
                    />
                ))}

                <button
                    className="btn w-full btn-primary text-white text-base rounded-3xl"
                >
                    Search Properties
                </button>

            </form>
        </div>
    );
}
