import React from "react";

const DashboardStats = () => {
    const stats = [
        { title: "New Users", value: "8,282", color: "bg-indigo-600" },
        { title: "Total Orders", value: "200,521", color: "bg-orange-600" },
        { title: "Available Products", value: "215,542", color: "bg-pink-600" },
    ];

    return (
        <div className="mt-4 flex flex-wrap -mx-6">
            {stats.map((stat, index) => (
                <div key={index} className="w-full sm:w-1/2 xl:w-1/3 px-6 mt-6">
                    <div className="flex items-center px-5 py-6 bg-white shadow-md rounded-md">
                        <div className={`p-3 rounded-full ${stat.color}`}>
                            <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                                {/* Icon Path */}
                            </svg>
                        </div>
                        <div className="mx-5">
                            <h4 className="text-2xl font-semibold text-gray-700">{stat.value}</h4>
                            <div className="text-gray-500">{stat.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
