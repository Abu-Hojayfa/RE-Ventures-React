import React from 'react';
import './Common.css';
import rent from '../../assests/service/buy.jpg';
import buy from '../../assests/service/rent.jpg';
import sell from '../../assests/service/rent.jpg';
import CommonStyle from './CommonStyle';

const cardData = [
    {
        title: "How to Navigate Housing Market Trends in 2025",
        description: "Explore housing market trends with actionable insights and tips to make informed decisions for your property investments.",
        image: buy,
        writer: "John Doe",
    },
    {
        title: "Top Tips for Finding Your Perfect Rental Property",
        description: "Discover expert advice on selecting the right rental property that fits your budget, lifestyle, and long-term goals effortlessly.",
        image: rent,
        writer: "Jane Smith",
    },
    {
        title: "Maximizing Profits: Selling Your Home the Right Way",
        description: "Learn how to sell your property with confidence, from pricing strategies to marketing techniques that attract buyers quickly.",
        image: sell,
        writer: "Alex Johnson",
    },
];


export default function BlogCard() {
    return (
        <CommonStyle title={"Latest News"} des={"From Our Blog"} cardData={cardData} type={"blog"} />
    );
}
