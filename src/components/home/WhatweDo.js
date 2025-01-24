import React from 'react';
import './Common.css';
import rent from '../../assests/whatWedo/home-1.png';
import buy from '../../assests/whatWedo/home-2.png';
import sell from '../../assests/whatWedo/home-3.png';
import CommonStyle from './CommonStyle';

const cardData = [
    {
        title: "Buy A New Home",
        description: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying.",
        image: buy,
    },
    {
        title: "Rent A Property",
        description: "Find the perfect rental property that suits your needs and lifestyle. Let us help you locate the ideal space.",
        image: rent,
    },
    {
        title: "Sell Your Home",
        description: "Maximize the value of your property with expert advice and a seamless selling process tailored to your needs.",
        image: sell,
    },
];

export default function WhatweDo() {
    return (
        <CommonStyle title={"Our Services"} des={"What We DO?"} cardData={cardData} type={"services"} />
    );
}
