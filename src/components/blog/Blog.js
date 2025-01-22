import React from 'react';

const Blog = () => {
    const posts = [
        {
            title: 'First Blog Post',
            description: 'This is the description for the first blog post.',
            date: 'October 1, 2023',
        },
        {
            title: 'Second Blog Post',
            description: 'This is the description for the second blog post.',
            date: 'October 2, 2023',
        }, 
        // Add more posts as needed
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.description}</p>
                        <p className="text-gray-400 text-sm">{post.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;