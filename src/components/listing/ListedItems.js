import React from 'react'
import img from '../../assests/service/buy.jpg'
import PropertyCard from '../home/PropertyCard';


const propertyData = [
    {
        title: "Lakeview Haven, Lake Tahoe",
        address: "145 Brooklyn Ave, California, New York",
        image: img, // Replace with actual image URLs
        beds: 3,
        baths: 2,
        sqft: 1150,
        price: "750,000",
        ownerName: "Mr. Car Man",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner", // Replace with actual owner image URLs
        status: "Rent"
    },
    {
        title: "Modern Downtown Condo",
        address: "10th Avenue, Seattle, Washington",
        image: img,
        beds: 2,
        baths: 1,
        sqft: 900,
        price: "500,000",
        ownerName: "Ms. Jane Doe",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Sale"
    },
    {
        title: "Luxury Villa, Miami Beach",
        address: "Palm Drive, Miami Beach, Florida",
        image: img,
        beds: 5,
        baths: 4,
        sqft: 3200,
        price: "2,500,000",
        ownerName: "Mr. John Smith",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Sale"
    },
    {
        title: "Suburban Family Home",
        address: "Maple Street, Springfield, Illinois",
        image: img,
        beds: 4,
        baths: 3,
        sqft: 2100,
        price: "350,000",
        ownerName: "Mrs. Emily Rose",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Rent"
    },
    {
        title: "Executive Office Space",
        address: "Downtown, Los Angeles, California",
        image: img,
        beds: 0, // No beds for office spaces
        baths: 2,
        sqft: 5000,
        price: "1,200,000",
        ownerName: "Mr. Mark Wilson",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Sale"
    },
    {
        title: "Cozy Mountain Cabin",
        address: "Aspen, Colorado",
        image: img,
        beds: 2,
        baths: 1,
        sqft: 800,
        price: "450,000",
        ownerName: "Ms. Sarah Connor",
        ownerImage: "https://via.placeholder.com/50.png?text=Owner",
        status: "Rent"
    },
];

export default function ListedItems() {
    return (
        <div>
            <PropertyCard data={propertyData} isGrid={2} />
        </div>
    )
}
