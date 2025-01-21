import React, { useState } from "react";

import Header from "./sidebar/Header.js";
import Sidebar from "./sidebar/Sidebar.js";
import MainDash from "./mainDash/MainDash.js";


export default function Dashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            <div className="flex h-screen bg-gray-200">
                <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-1 flex flex-col">
                    <Header  sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                    <main className="min-h-screen ml-64 bg-[#E5E7EB]">                        
                        <MainDash />
                    </main>
                </div>
            </div>
        </>
    );
}
