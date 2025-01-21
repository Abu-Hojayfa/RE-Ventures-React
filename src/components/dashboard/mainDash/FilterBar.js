import React from "react";

const FilterBar = () => {
    return (
        <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg shadow mb-6">
            <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full lg:w-1/4"
            />
            <input
                type="date"
                className="input input-bordered w-full lg:w-1/4"
            />
            <input
                type="date"
                className="input input-bordered w-full lg:w-1/4"
            />
            <select className="select select-bordered w-full lg:w-1/4">
                <option value="">Select</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
            </select>
        </div>
    );
};

export default FilterBar;
