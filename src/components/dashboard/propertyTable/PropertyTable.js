import React from "react";
import FilterBar from "../mainDash/FilterBar";

const ListingsTable = ({ showFilter }) => {
    const listings = [
        { id: 1, name: "Gorgeous Apartment Building", status: "Approved", price: "$7,500" },
        { id: 2, name: "Mountain Mist Retreat, Aspen", status: "Approved", price: "$7,500" },
        { id: 3, name: "Lakeview Haven, Lake Tahoe", status: "Pending", price: "$7,500" },
        { id: 4, name: "Coastal Serenity Cottage", status: "Sold", price: "$7,500" },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case "Approved":
                return "bg-green-100 text-green-600";
            case "Pending":
                return "bg-orange-100 text-orange-600";
            case "Sold":
                return "bg-purple-100 text-purple-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">New Listing</h2>

            {showFilter ? <FilterBar /> : null}

            <div className="overflow-hidden rounded-xl mt-4">
                <table className="table w-full">
                    <thead className="text-white bg-[#161E2D] text-base">
                        <tr>
                            <th className="font-normal">Listing</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listings.map((listing) => (
                            <tr key={listing.id}>
                                <td>
                                    <div>
                                        <p className="font-bold">{listing.name}</p>
                                        <p className="text-sm text-gray-400">Posting date: March 22, 2024</p>
                                        <p className="text-blue-500 font-bold">{listing.price}</p>
                                    </div>
                                </td>
                                <td>
                                    <span className={`badge ${getStatusClass(listing.status)} p-2 px-4 rounded-md shadow-sm font-semibold`}>
                                        {listing.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="flex space-x-2">
                                        <button className="text-blue-500 hover:underline" aria-label="Edit Listing">Edit</button>
                                        <button className="text-purple-500 hover:underline" aria-label="Mark as Sold">Sold</button>
                                        <button className="text-red-500 hover:underline" aria-label="Delete Listing">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListingsTable;
