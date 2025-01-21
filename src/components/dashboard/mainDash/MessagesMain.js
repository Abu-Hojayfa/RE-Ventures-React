import React from "react";

const MessagesMain = ({mainMsg}) => {
  const messages = [
    { id: 1, name: "Bessie Cooper", review: "Maecenas eu lorem et urna accumsan facilisis.", time: "3 days ago" },
    { id: 2, name: "Annette Black", review: "Curabitur vitae magna at quam dapibus suscipit.", time: "5 days ago" },
    { id: 3, name: "Eleanor Pena", review: "Vivamus ultricies nisi vel lectus efficitur.", time: "1 week ago" },
    { id: 4, name: "Bessie Cooper", review: "Maecenas eu lorem et urna accumsan facilisis.", time: "3 days ago" },
    { id: 5, name: "Annette Black", review: "Curabitur vitae magna at quam dapibus suscipit.", time: "5 days ago" },
    { id: 6, name: "Eleanor Pena", review: "Vivamus ultricies nisi vel lectus efficitur.", time: "1 week ago" },
];


const visibleMessages = mainMsg ? messages : messages.slice(0, 3);

return (
    <div
        className={`${mainMsg ? "bg-gray-100 p-8 rounded-2xl shadow-lg w-full" : "bg-white shadow rounded-lg p-4"
            }`}
    >
        <h2 className={`${mainMsg ? "text-3xl font-semibold pb-5 mb-6" : "text-lg font-bold pb-2 mb-4"}`}>
            Messages
        </h2>
        <div className={`${mainMsg ? "space-y-8" : "space-y-4"}`}>
            {visibleMessages.map((review, index) => (
                <div
                    key={review.id}
                    className={`flex items-start border-b border-b-gray-400 pb-5 space-x-4 ${mainMsg && index === 0 ? "text-lg font-medium" : "text-sm"
                        }`}
                >
                    <div
                        className={`${mainMsg ? "w-16 h-16" : "w-10 h-10"
                            } bg-gray-200 rounded-full flex-shrink-0`}
                    />
                    <div>
                        <h3 className={`${mainMsg ? "text-xl font-medium" : "text-sm font-bold"}`}>
                            {review.name}
                        </h3>
                        <p className={`${mainMsg ? "text-base text-gray-600" : "text-sm text-gray-500"}`}>
                            {review.review}
                        </p>
                        <span className={`${mainMsg ? "text-sm text-gray-400" : "text-xs text-gray-400"}`}>
                            {review.time}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default MessagesMain;
