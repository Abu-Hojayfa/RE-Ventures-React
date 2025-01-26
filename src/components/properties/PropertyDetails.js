import React from "react";

export default function PropertyDetails({ property }) {
    const { title, price, status } = property;

    return (
        <div className="flex items-center justify-between pb-5 border-b border-gray-300 mb-4">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="text-2xl text-semibold text-gray-500">
                ${price.toLocaleString()}
                <span className="text-xl">{status === "For Rent" ? "/ month" : ""}</span>
            </p>
        </div>
    );
}
