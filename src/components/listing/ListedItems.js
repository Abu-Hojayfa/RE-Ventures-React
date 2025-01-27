import React, { useEffect, useState } from 'react'
import PropertyCard from '../home/PropertyCard';




export default function ListedItems() {


    const [propertyData, setPropertyData] = useState([]); // State to hold property data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(""); // State for error handling

    // Fetch property data from the API
    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                const response = await fetch("http://localhost:8080/house/propertyDetails");
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                const data = await response.json();
                setPropertyData(data); // Set the fetched data
            } catch (err) {
                setError(err.message); // Handle error
            } finally {
                setLoading(false); // Set loading to false after fetching is complete
            }
        };

        fetchPropertyData();
    }, [])

    // Show loading text if still loading or error if there's an issue
    if (loading) return <p>Loading properties...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <PropertyCard data={propertyData} isGrid={2} isTotal={true} />
        </div>
    )
}
