import React, { useState } from 'react';

export default function AmenitiesCheckboxes() {
    const amenities = [
        { name: 'Air Condition', checked: false },
        { name: 'Cable TV', checked: false },
        { name: 'Furnished', checked: false },
        { name: 'Fireplace', checked: false },
        { name: 'Disabled Access', checked: false },
        { name: 'Elevator', checked: false },
        { name: 'Garden', checked: false },
        { name: 'Garage', checked: false },
        { name: 'Security', checked: false },
        { name: 'WiFi', checked: false },
        { name: 'Swimming Pool', checked: false },
        { name: 'Heating', checked: false },
        { name: 'Parking', checked: false },
        { name: 'Pet Friendly', checked: false },
        { name: 'Intercom', checked: false },
    ];

    const [checkedAmenities, setCheckedAmenities] = useState(
        amenities.reduce((acc, amenity) => {
            acc[amenity.name] = amenity.checked;
            return acc;
        }, {})
    );

    const handleCheckboxChange = (amenityName) => {
        setCheckedAmenities((prev) => ({
            ...prev,
            [amenityName]: !prev[amenityName],
        }));
    };

    return (
        <div className="grid grid-cols-4 gap-6">
            {amenities.map((amenity) => (
                <label
                    key={amenity.name}
                    className="flex items-center cursor-pointer select-none text-dark"
                >
                    <div className="relative">
                        <input
                            type="checkbox"
                            checked={checkedAmenities[amenity.name]}
                            onChange={() => handleCheckboxChange(amenity.name)}
                            className="sr-only"
                        />
                        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border-stroke border">
                            <span
                                className={`dot h-[10px] w-[10px] rounded-sm ${
                                    checkedAmenities[amenity.name] ? 'bg-primary' : ''
                                }`}
                            ></span>
                        </div>
                    </div>
                    {amenity.name}
                </label>
            ))}
        </div>
    );
}
