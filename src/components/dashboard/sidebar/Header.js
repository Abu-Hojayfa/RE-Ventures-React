import React from "react";
import Navbar from '../../navbar/Navbar.js';

import { GiHamburgerMenu } from "react-icons/gi";


const Header = ({ toggleSidebar }) => {
    return (
        <header className="flex items-center justify-end px-6  bg-white border-b-4 border-indigo-600">
            <div className="flex items-center">
                <button
                    className="text-gray-500 lg:hidden"
                    onClick={toggleSidebar}
                >
                    < GiHamburgerMenu  className="text-2xl text-blue-500" />
                </button>
                
                <Navbar />

            </div>
            
        </header>
    );
};

export default Header;
