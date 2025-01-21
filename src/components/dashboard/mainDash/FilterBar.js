import React from "react";
import { MdSearch } from "react-icons/md";

const FilterBar = () => {
    return (
        <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg shadow mb-6">
            <input
                type="text"
                placeholder="Search"
                className="input rounded-3xl input-bordered w-full lg:w-1/4"
            />
            <input
                type="date"
                className="input rounded-3xl input-bordered w-full lg:w-1/4"
            />
            <input
                type="date"
                className="input rounded-3xl input-bordered w-full lg:w-1/4"
            />
            <select className="select rounded-3xl select-bordered w-full lg:w-1/4">
                <option value="">Select</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
            </select>

            <div className="btn btn-primary w-full lg:w-1/4 text-white text-base rounded-3xl">

                <MdSearch className="text-2xl" />
                Search Properties

            </div>

        </div>
    );
};

export default FilterBar;
