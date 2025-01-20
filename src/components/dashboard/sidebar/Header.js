import React from "react";

const Header = ({ toggleSidebar }) => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
            <div className="flex items-center">
                <button
                    className="text-gray-500 lg:hidden"
                    onClick={toggleSidebar}
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4 6H20M4 12H20M4 18H11" />
                    </svg>
                </button>
                <div className="relative mx-4 lg:mx-0">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-32 sm:w-64 pl-10 pr-4 border rounded-md focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center">
                {/* Additional dropdowns or notifications can go here */}
            </div>
        </header>
    );
};

export default Header;
