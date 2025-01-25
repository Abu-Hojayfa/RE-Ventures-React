import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiDoubleQuotesL } from "react-icons/ri";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../assests/agents/agent-1.jpg";
import img2 from "../../assests/agents/agent-2.jpg";
import img3 from "../../assests/agents/agent-3.jpg";
import img4 from "../../assests/agents/agent-4.jpg";

// Array of images for random assignment
const images = [img1, img2, img3, img4];

// Comments data
const comments = [
    {
        name: "John Doe",
        comment: "This platform has been a game-changer for my real estate business. Highly recommended for agents and buyers.",
        date: "Jan 20, 2025",
    },
    {
        name: "Jane Smith",
        comment: "I found my dream home through this website. The process was simple, fast, and incredibly satisfying overall.",
        date: "Dec 18, 2024",
    },
    {
        name: "Alice Brown",
        comment: "The customer service team is extremely helpful and responsive. They guided me at every step of the way.",
        date: "Nov 15, 2024",
    },
    {
        name: "Mark Johnson",
        comment: "Great platform for buying and selling properties effortlessly. I would definitely recommend it to others.",
        date: "Oct 10, 2024",
    },
    {
        name: "Emily Davis",
        comment: "The website design is intuitive and easy to use. Browsing through listings was an absolute breeze for me.",
        date: "Sep 25, 2024",
    },
    {
        name: "Chris Green",
        comment: "I was able to sell my property in just two weeks. This is an impressive service for anyone in need.",
        date: "Aug 5, 2024",
    },
    {
        name: "Laura Wilson",
        comment: "Detailed property listings and accurate descriptions made my search so much easier than I expected.",
        date: "Jul 10, 2024",
    },
    {
        name: "Michael Carter",
        comment: "A must-use platform for anyone in the real estate market. It is so easy to use and effective.",
        date: "Jun 15, 2024",
    },
    {
        name: "Sophia Turner",
        comment: "Excellent support team! They helped me through every step of the process. I am really grateful.",
        date: "May 20, 2024",
    },
    {
        name: "James Anderson",
        comment: "I love how transparent and secure the transactions are on this platform. It’s the best I’ve used.",
        date: "Apr 5, 2024",
    },
    {
        name: "Olivia Thomas",
        comment: "The mobile app version is just as seamless as the website. This is truly excellent work overall.",
        date: "Mar 25, 2024",
    },
    {
        name: "Liam Miller",
        comment: "The search filters are very powerful. They helped me narrow down properties quickly and efficiently.",
        date: "Feb 10, 2024",
    },
    {
        name: "Isabella White",
        comment: "A fantastic experience overall! I’ll definitely recommend it to friends and family in the future.",
        date: "Jan 30, 2024",
    },
    {
        name: "Ethan Scott",
        comment: "I appreciate the attention to detail in every listing. It really builds trust in the entire process.",
        date: "Dec 15, 2023",
    },
    {
        name: "Mia Walker",
        comment: "The variety of properties available is unmatched. It is a great resource for serious buyers.",
        date: "Nov 10, 2023",
    },
];

export default function CommentCarousel() {
    return (
        <div className="w-4/5 mx-auto my-8">


            <div className="text-center">
                <p className="text-[#1563DF] text-xl font-semibold">Our Testimonials</p>
                <p className="text-4xl font-bold text-black mb-2">
                    What's People Say's
                </p>
                <p className="text-base text-gray-400 pb-16 pt-3 w-96 mx-auto">
                    Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.
                </p>
            </div>



            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                    delay: 0, // Continuous sliding with no pauses
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                speed={4000} // Adjust the speed for smooth sliding
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {comments.map((item, index) => {
                    const randomImage = images[Math.floor(Math.random() * images.length)];
                    const randomRating = Math.floor(Math.random() * 3) + 3; // Stars between 3 and 5
                    return (
                        <SwiperSlide key={index}>
                            <div className="p-6 mb-16 pt-8 rounded-2xl shadow-md bg-white">
                                <RiDoubleQuotesL className="text-5xl text-[#1563DF] mb-4" />
                                <p className="italic text-gray-600 mb-4">"{item.comment}"</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src={randomImage}
                                        alt={item.name}
                                    />
                                    <div>
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                                        <div className="rating mt-2">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span
                                                    key={i}
                                                    className={`mask mask-star-2 text-lg ${i < randomRating
                                                        ? "text-[#FFD700]" // Active stars
                                                        : "text-gray-300" // Inactive stars
                                                        }`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
