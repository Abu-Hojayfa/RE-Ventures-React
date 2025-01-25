import React from 'react';
import Search from './Search';
import ListedItems from './ListedItems';
import SideListing from './SideListing';

export default function Listing() {
    return (
        <div className="w-[80%] mx-auto my-20">

            <div className=' w-[90%] mx-auto mb-10  flex items-center space-x-5'>
                <p className='text-4xl font-semibold'>
                    Property Listing
                </p>
                <p className='pt-3 text-gray-500'>
                    There are currently 164,814 properties.
                </p>
            </div>

            <div className="grid grid-cols-12 gap-10 w-[90%] mx-auto">

                <div className="col-span-4">
                    <Search />
                    <SideListing />
                </div>

                {/* Main Content */}
                <div className="col-span-8 rounded-lg">
                    <ListedItems />
                </div>
            </div>
        </div>
    );
}
