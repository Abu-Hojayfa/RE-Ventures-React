import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./sidebar/Header.js";
import Sidebar from "./sidebar/Sidebar.js";
import MainDash from "./mainDash/MainDash.js";
import PropertyTable from "./propertyTable/PropertyTable.js";
import MessagesMain from "./mainDash/MessagesMain.js";
import ReviewsPanel from "./mainDash/ReviewsMain.js";
import Profile from "./profile/Profile.js";
import AddProperty from "./addProperty/AddProperty.js";

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <main className="pl-[17rem] bg-[#E5E7EB] p-6">
                    {/* Nested Routes for Dashboard */}
                    <Routes>
                        <Route path="/" element={<MainDash />} />
                        <Route path="/my-properties" element={<PropertyTable showFilter={true} />} />
                        <Route path="/my-favorites" element={<PropertyTable showFilter={false} />} />
                        <Route path="/messages" element={<MessagesMain mainMsg={true} />} />
                        <Route path="/reviews" element={<ReviewsPanel mainReview={true} />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/add-property" element={<AddProperty />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}
