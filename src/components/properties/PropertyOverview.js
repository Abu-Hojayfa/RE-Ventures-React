import React from "react";
import { BsHouse, BsRulers } from "react-icons/bs";
import { GiSettingsKnobs, GiHomeGarage } from "react-icons/gi";
import { MdBed, MdBathtub } from "react-icons/md";
import { PiHammer } from "react-icons/pi";

export default function PropertyOverview({ house, houseDetails, size }) {
    const overviewData = [
        { icon: BsHouse, label: "Property ID", value: house.house_id },
        { icon: GiHomeGarage, label: "Garage", value: house.house_id },
        { icon: GiSettingsKnobs, label: "Type", value: houseDetails.type },
        { icon: BsRulers, label: "Size", value: `${size} Sqft` },

        { icon: MdBed, label: "Bedrooms", value: houseDetails.bedrooms },
        { icon: MdBathtub, label: "Bathrooms", value: houseDetails.bathrooms },
        { icon: PiHammer, label: "Year Built", value: houseDetails.year_build },
    ];

    return (
        <div>
            <p className="text-2xl pt-6 border-t mt-3">Overview</p>
            <div className="grid grid-cols-4 gap-4 mt-8 pb-8">
                {overviewData.map(({ icon: Icon, label, value }, index) => (

                    <div key={index} className="flex items-center transition gap-2 p-4 group">
                        <div className=" p-3  border rounded-lg mr-2  group-hover:bg-[#1563DF] text-gray-700 group-hover:text-white">
                            <Icon className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-gray-500">{label}:</p>
                            <p className="font-semibold">{value}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
