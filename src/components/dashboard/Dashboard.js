import React, { useState } from "react";

import Header from "./sidebar/Header.js";
import DashboardStats from "./sidebar/DashboardStats.js";
import UserTable from "./sidebar/UserTable.js";
import Sidebar from "./sidebar/Sidebar.js";


export default function Dashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            <div className="flex h-screen bg-gray-200">
                <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-1 flex flex-col">
                    <Header toggleSidebar={toggleSidebar} />
                    <main className="p-6">
                        <h1 className="text-3xl font-medium text-gray-700">Dashboard</h1>
                        <DashboardStats />
                        <UserTable />
                    </main>
                </div>
            </div>
        </>
    );
}
