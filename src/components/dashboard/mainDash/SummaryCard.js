import React from "react";

const SummaryCard = ({ title, value, subtitle, icon: Icon }) => {
    return (
        <div className="bg-white cursor-pointer shadow-lg rounded-2xl p-4 flex items-center space-x-4  py-9 pl-8">
            <div className=" w-16 h-16 flex justify-center items-center rounded-full border border-slate-300 text-blue-500">
                <Icon className="text-4xl" />
            </div>
            <div>
                <p className="text-gray-500 font-bold text-lg">{title}</p>
                <div className="flex gap-1 items-baseline">
                    <h3 className="text-3xl font-bold">{value}</h3>
                    {subtitle && <sub className="text-sm font-semibold text-gray-400">{subtitle}</sub>}
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;
