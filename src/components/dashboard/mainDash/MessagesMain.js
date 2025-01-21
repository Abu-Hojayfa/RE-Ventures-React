import React from "react";

const MessagesMain = () => {
  const messages = [
    { id: 1, name: "Themesflat", message: "Lorem ipsum dolor sit amet.", time: "3 days ago" },
    { id: 2, name: "ThemeMu", message: "Duis eu mollis dolor.", time: "3 days ago" },
    { id: 3, name: "Cameron Williamson", message: "In consequat lacus augue.", time: "3 days ago" },
    { id: 4, name: "Esther Howard", message: "Cras congue in justo vel dapibus.", time: "3 days ago" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Messages</h2>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full" />
            <div>
              <h3 className="text-sm font-bold">{msg.name}</h3>
              <p className="text-sm text-gray-500">{msg.message}</p>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesMain;
