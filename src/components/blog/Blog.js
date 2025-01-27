import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Number of blogs to display initially

  // Fetch blog data dynamically
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = [
        {
          id: 1,
          title: "The Future of Real Estate Investment",
          image: "https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1440",
          description:
            "Explore the upcoming trends in the real estate market, including smart homes, sustainable architecture, and technology-driven solutions.",
          link: "/BlogPage/the-future-of-real-estate-investment",
        },
        {
          id: 2,
          title: "Why Real Estate is a Safe Investment?",
          image: "https://static.vecteezy.com/system/resources/thumbnails/023/307/449/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
          description:
            "Understand why real estate remains one of the safest and most profitable investment opportunities in uncertain economic times.",
          link: "/blog/real-estate-safe-investment",
        },
        {
          id: 3,
          title: "How to Prepare Your Home for Sale?",
          image: "https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280x1280/o/house%20plan%20w-photo%2021802__37906.original.jpg",
          description:
            "Learn the best practices for staging your home to attract potential buyers, boost its value, and secure the best deals.",
          link: "/blog/prepare-home-sale",
        },
        {
          id: 4,
          title: "Luxury Living: Top Destinations Worldwide",
          image: "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?b=1&s=612x612&w=0&k=20&c=FFc1oX54JEIVF4P5613J9Ng7CaN2rmjSU7m1vsnfi1s=",
          description:
            "Discover the world's most luxurious residential areas, including tips for buying high-end properties in exclusive locations.",
          link: "/blog/luxury-living",
        },
        {
          id: 5,
          title: "The Environmental Impact of Modern Construction",
          image: "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU",
          description:
            "Dive into the ecological challenges and solutions in the construction industry, from green materials to net-zero energy homes.",
          link: "/blog/environmental-impact-construction",
        },
        {
          id: 6,
          title: "Understanding Mortgage Rates in 2025",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2WmRiouSgj02GpWNOHjwXrPLIiGLqxi1Tg&s",
          description:
            "A comprehensive guide to understanding mortgage rates, loan options, and refinancing strategies to secure your dream home.",
          link: "/blog/mortgage-rates-2025",
        },
        {
          id: 7,
          title: "Top Renovation Tips to Add Value to Your Property",
          image: "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?b=1&s=612x612&w=0&k=20&c=FFc1oX54JEIVF4P5613J9Ng7CaN2rmjSU7m1vsnfi1s=",
          description:
            "Learn how simple renovations can increase the market value of your property. From kitchen upgrades to curb appeal tips, we cover it all.",
          link: "/blog/top-renovation-tips",
        },
        {
          id: 8,
          title: "Navigating Real Estate Trends in 2025",
          image: "https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280x1280/o/house%20plan%20w-photo%2021802__37906.original.jpg",
          description:
            "Understand the key market trends shaping the real estate landscape in 2025 and how to navigate them successfully.",
          link: "/blog/real-estate-trends",
        },
      ];

      setBlogs(blogData);
    };

    fetchBlogs();
  }, []);

  // Handle "Load More" button click
  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6); // Show 6 more blogs
  };

  return (
    <div className="w-5/6 mx-auto my-10">
      {/* Blog Header Section */}
      <div
        className="hero rounded-3xl z-30"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/landmarks-modern-city_1359-338.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md py-2 pt-5">
            <p>Home / Blogs</p>
            <h1 className="mb-5 text-5xl font-bold">BLOG</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
  {blogs.slice(0, visibleBlogs).map((blog) => (
    <Link
    key={blog.id}
    to={`/blog/${blog.id}`} // Correct path matching `/blog/:blogId`
    className="card bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300"
  >
    <img
      src={blog.image}
      alt={blog.title}
      className="h-48 w-full object-cover"
    />
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
      <p className="text-gray-600 mb-5">{blog.description}</p>
      <p className="text-[#1563DF] font-semibold hover:underline">
        Read More →
      </p>
    </div>
  </Link>
  ))}
</div>;


      {/* Load More Button */}
      {visibleBlogs < blogs.length && (
        <div className="text-center mt-10">
          <button
            onClick={loadMoreBlogs}
            className="btn bg-[#1563DF] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#0c4fb1] transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
