import React, { useState } from "react";

const comments = [
    {
        name: "John Doe",
        comment: "This platform has been a game-changer for my real estate business!",
        date: "Jan 20, 2025",
    },
    {
        name: "Jane Smith",
        comment: "I found my dream home through this website. Highly recommended!",
        date: "Dec 18, 2024",
    },
    {
        name: "Alice Brown",
        comment: "The customer service team is extremely helpful and responsive.",
        date: "Nov 15, 2024",
    },
    {
        name: "Mark Johnson",
        comment: "Great platform for buying and selling properties effortlessly!",
        date: "Oct 10, 2024",
    },
];

export default function CommentCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-4/5 mx-auto my-8">
            {/* Comments Carousel */}
            <div className="carousel w-full p-5 bg-gray-100 rounded-lg shadow-md">
                {comments.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item w-full ${index === activeIndex ? "block" : "hidden"
                            }`}
                    >
                        <div className="text-center">
                            <p className="text-xl font-semibold">{item.name}</p>
                            <p className="italic text-gray-600">"{item.comment}"</p>
                            <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex w-full justify-center gap-2 py-4">
                {comments.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-3 w-3 rounded-full ${index === activeIndex ? "bg-[#1563DF]" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
