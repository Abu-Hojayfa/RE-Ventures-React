import React from "react";

export default function PropertyGallery({ images }) {

    console.log(images)
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[580px]">
            <div className="col-span-2 row-span-2">
                <img
                    src={images.links[0]}
                    alt="Hero Property"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
                />
            </div>
            {images.links.slice(1).map((image, index) => (
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
