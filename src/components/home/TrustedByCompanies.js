import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
    SiAmazonmusic,
    SiAmazonelasticache,
    SiAmazonwebservices,
    SiReactivex,
    SiAdidas,
    SiPrimereact,
    SiBmw,
    SiAudi,
    SiEmirates,
    SiFerrari,
} from "react-icons/si";

import "swiper/css";

export default function TrustedByCompanies() {
    // Array of icons
    const icons = [
        SiAmazonmusic,
        SiAmazonelasticache,
        SiAmazonwebservices,
        SiReactivex,
        SiAdidas,
        SiPrimereact,
        SiBmw,
        SiAudi,
        SiEmirates,
        SiFerrari,
    ];

    // Shuffle and repeat icons for the slides
    const shuffleIcons = () => {
        const shuffledIcons = [...icons];
        for (let i = shuffledIcons.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledIcons[i], shuffledIcons[j]] = [shuffledIcons[j], shuffledIcons[i]];
        }
        return [...shuffledIcons];
    };

    const uniqueIconsPerPage = shuffleIcons();

    return (
        <div className="w-3/5 mx-auto py-20 pt-12">
            <h2 className="text-xl font-semibold text-center mb-10">
                Trusted by <span className="text-[#1563DF]">150</span> major Companies
            </h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                autoplay={{
                    delay: 0, // Continuous sliding with no pauses
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                speed={2000} // Adjust the speed for smooth sliding
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
            
            >
                {Array.from({ length: 20 }).map((_, index) => {
                    // Rotate through shuffled icons
                    const Icon = uniqueIconsPerPage[index % uniqueIconsPerPage.length];
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center pt-5">
                                <Icon className="text-7xl text-gray-500 hover:text-[#1563DF] transition-all duration-300 cursor-pointer" />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
