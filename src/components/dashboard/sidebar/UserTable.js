import React from "react";

const UserTable = () => {
    const users = [
        {
            name: "John Doe",
            email: "john@example.com",
            role: "Owner",
            status: "Active",
            title: "Software Engineer",
        },
    ];

    return (
        <div className="py-4">
            <table className="w-full table-auto bg-white shadow-md rounded-md">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="border-b">
                            <td className="px-6 py-4">{user.name}</td>
                            <td className="px-6 py-4">{user.title}</td>
                            <td className="px-6 py-4">{user.status}</td>
                            <td className="px-6 py-4">{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
