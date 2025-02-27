import React from "react";

export default function PropertyGallery({ images }) {


    // Extract image links from the object, and filter out any null or undefined values
    const imageLinks = [
        images?.link1,
        images?.link2,
        images?.link3,
        images?.link4,
        images?.link5,
    ].filter(Boolean); // Filter out any null or undefined links



    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[580px]">
            {/* Hero Image - Uses the first link if available */}
            {imageLinks[0] && (
                <div className="col-span-2 row-span-2">
                    <img
                        src={imageLinks[0]}
                        alt="Hero Property"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
                    />
                </div>
            )}

            {/* Thumbnail Images - Loop through the rest of the links */}
            {imageLinks.slice(1).map((image, index) => (
                <div key={index} className="col-span-1 row-span-1">
                    <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
                    />
                </div>
            ))}
        </div>
    );
}
