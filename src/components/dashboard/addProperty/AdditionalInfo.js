import React from "react";

export default function AdditionalInfo() {
    return (
        <div className="px-4 py-6">
            <form>
                <div className="md:grid grid-cols-3 mt-6 gap-6">

                    {/* Rendering components */}

                    <SelectRadio
                        label="Property Type"
                        placeholder="Type"
                        options={["Apartment", "Stdio", "Villa", "House", "Office"]}
                    />

                    <SelectRadio
                        label="Property States*"
                        placeholder="States"
                        options={["For Rent", "For Sell"]}
                    />

                    <SelectRadio
                        label="Property Label*"
                        placeholder="Property label"
                        options={["New Listing", "Open House",]}
                    />



                    {/* Rendering components */}


                    <OnlyNumb label="Property Area (sqft)*" placeholder="Enter property area in sqft" />
                    <OnlyNumb label="Land Area (sqft)*" placeholder="Enter land area in sqft" />
                    <OnlyNumb label="Property Id" placeholder="Id" />




                    {/* Rendering components */}

                    <OnlyNumb label="Rooms*" placeholder="Number of rooms" />
                    <OnlyNumb label="Bedrooms*" placeholder="Number of bedrooms" />
                    <OnlyNumb label="Bathrooms*" placeholder="Number of bathrooms" />


                    {/* Rendering components */}

                    <SelectRadio
                        label="Garages"
                        placeholder="Garages?"
                        options={["Yes", "No"]}
                    />

                    <OnlyNumb label="Garages Size (sqft)*" placeholder="Enter garage's size in sqft" />


                </div>
            </form>
        </div>
    );
}






const OnlyNumb = ({ label, placeholder }) => {
    return (
        <div className=' w-full '>
            < label className="block text-sm font-medium  mb-1 text-gray-700">{label}</label>
            <input
                placeholder={placeholder}
                type="text"
                className="input rounded-3xl input-bordered w-full"
                onKeyDown={(e) => {
                    if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};


const SelectRadio = ({ label, placeholder, options = [] }) => {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
            <select className="select select-bordered rounded-3xl w-full">
                <option disabled value={placeholder}>

                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value || option}>
                        {option.label || option}
                    </option>
                ))}
            </select>
        </div>
    );
};