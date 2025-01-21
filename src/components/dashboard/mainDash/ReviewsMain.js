import React from "react";

const ReviewsPanel = () => {
    const reviews = [
        { id: 1, name: "Bessie Cooper", review: "Maecenas eu lorem et urna accumsan facilisis.", time: "3 days ago" },
        { id: 2, name: "Annette Black", review: "Curabitur vitae magna at quam dapibus suscipit.", time: "5 days ago" },
        { id: 3, name: "Eleanor Pena", review: "Vivamus ultricies nisi vel lectus efficitur.", time: "1 week ago" },
    ];

    return (
        <div className="bg-white shadow rounded-lg p-4 mt-6">
            <h2 className="text-lg font-bold mb-4">Recent Reviews</h2>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full" />
                        <div>
                            <h3 className="text-sm font-bold">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.review}</p>
                            <span className="text-xs text-gray-400">{review.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsPanel;
