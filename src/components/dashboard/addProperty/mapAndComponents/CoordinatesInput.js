import React from "react";

export default function CoordinatesInput({ longitude, setLongitude, latitude, setLatitude }) {


    const handleLongitudeChange = (e) => {
        const value = e.target.value;
        // Allow empty value or valid longitude range
        if (value === "" || (value >= -180 && value <= 180)) {
            setLongitude(value);
        }
    };

    const handleLatitudeChange = (e) => {
        const value = e.target.value;
        // Allow empty value or valid latitude range
        if (value === "" || (value >= -90 && value <= 90)) {
            setLatitude(value);
        }
    };

    return (
        <div className="md:flex items-center justify-center mt-6 space-x-6">
            <div className="w-full cursor-pointer">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                    Longitude*
                </label>
                <input
                    required
                    value={longitude}
                    onChange={handleLongitudeChange}
                    placeholder="-74.0059418"
                    type="text"
                    inputMode="decimal"
                    pattern="-?[0-9]*(\.[0-9]*)?"
                    className="input rounded-3xl input-bordered w-full appearance-none"
                />
                <p className="text-xs text-gray-500 mt-1">Enter a value between -180 and 180.</p>
            </div>

            <div className="w-full cursor-pointer">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                    Latitude*
                </label>
                <input
                    required
                    value={latitude}
                    onChange={handleLatitudeChange}
                    placeholder="40.7127847"
                    type="text"
                    inputMode="decimal"
                    pattern="-?[0-9]*(\.[0-9]*)?"
                    className="input rounded-3xl input-bordered w-full appearance-none"
                />
                <p className="text-xs text-gray-500 mt-1">Enter a value between -90 and 90.</p>
            </div>
        </div>
    );
}
