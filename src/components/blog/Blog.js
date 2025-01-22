import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1>Blog Title</h1>
                <p>Blog subtitle or description goes here.</p>
            </div>
            <div className="blog-content">
                <div className="blog-post">
                    <h2>Post Title</h2>
                    <p>Post content goes here. This is a brief description of the blog post.</p>
                </div>
                <div className="blog-post">
                    <h2>Post Title</h2>
                    <p>Post content goes here. This is a brief description of the blog post.</p>
                </div>
                <div className="blog-post">
                    <h2>Post Title</h2>
                    <p>Post content goes here. This is a brief description of the blog post.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;