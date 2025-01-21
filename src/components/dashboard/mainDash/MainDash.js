import React from 'react';
import PropertyTable from '../propertyTable/PropertyTable.js';
import SummaryCard from './SummaryCard';
import MessagesMain from './MessagesMain.js';
import ReviewsPanel from './ReviewsMain.js';

import { LuListCheck, LuFolderHeart } from "react-icons/lu";
import { MdOutlinePendingActions, MdOutlineStarOutline } from "react-icons/md";

export default function MainDash() {
    return (
        <div className="grid bg-[#E5E7EB] grid-cols-1 lg:grid-cols-12 gap-6 p-6">
            {/* Summary Section */}
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <SummaryCard title="Your listing" value="32" subtitle="/50 remaining" icon={LuListCheck} />
                <SummaryCard title="Pending" value="02" icon={MdOutlinePendingActions} />
                <SummaryCard title="Favorites" value="06" icon={LuFolderHeart} />
                <SummaryCard title="Reviews" value="4.835" icon={MdOutlineStarOutline} />
            </div>

            {/* Listings Table Section */}
            <div className="lg:col-span-9">
                <PropertyTable showFilter={true} />
            </div>

            {/* Messages Section */}
            <div className="lg:col-span-3 grid gap-4">
                <MessagesMain mainMsg={false} />
                <ReviewsPanel mainReview={false} />
            </div>
        </div>
    );
}
