import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const FilterBar = () => {
    const [firstDate, setFirstDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState('');

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    const handleFirstDateChange = (e) => {
        const selectedFirstDate = e.target.value;
        setFirstDate(selectedFirstDate);

        // Ensure first date is not later than the last date
        if (lastDate && selectedFirstDate > lastDate) {
            setLastDate(selectedFirstDate);
        }
    };

    const handleLastDateChange = (e) => {
        const selectedLastDate = e.target.value;

        // Ensure second date is not later than today
        if (selectedLastDate > today) {
            alert('Last date cannot be in the future!');
            return;
        }

        // Set last date
        setLastDate(selectedLastDate);

        // Ensure the first date is not later than the last date
        if (firstDate && selectedLastDate < firstDate) {
            setFirstDate(selectedLastDate); 
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg shadow mb-6">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search"
                className="input rounded-3xl input-bordered w-full lg:w-1/4"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            {/* First Date Input */}
            <input
                type="date"
                value={firstDate}
                onChange={handleFirstDateChange}
                className="input rounded-3xl input-bordered w-full lg:w-1/4"
                max={lastDate || today} // Ensure first date is not later than the last date
            />

            {/* Last Date Input */}
            <input
                type="date"
                value={lastDate}
                onChange={handleLastDateChange}
                className="input rounded-3xl input-bordered w-full lg:w-1/4"
                max={today} // Ensure second date is not later than today
            />

            {/* Status Select */}
            <select
                className="select rounded-3xl select-bordered w-full lg:w-1/4"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">Select</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
            </select>

            {/* Search Button */}
            <div className="btn btn-primary w-full lg:w-1/4 text-white text-base rounded-3xl">
                <MdSearch className="text-2xl" />
                Search Properties
            </div>
        </div>
    );
};

export default FilterBar;
