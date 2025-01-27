import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams(); // Get the ID from the URL
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]); // Store the other blogs for the sidebar

  useEffect(() => {
    // Simulated blog data
    const blogData = [
      {
        id: 1,
        title: "The Future of Real Estate Investment",
        image: "https://static.vecteezy.com/system/resources/thumbnails/023/307/449/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
        description: "Explore the upcoming trends in the real estate market.",
        content:
          "The real estate market is undergoing a significant transformation, with innovations such as smart homes, sustainable architecture, and technology-driven solutions at the forefront. This new era promises greater energy efficiency, connectivity, and a seamless user experience. The advent of artificial intelligence (AI) and machine learning is shaping how homes are built, sold, and maintained. Smart homes are equipped with sensors, intelligent systems, and automation, offering enhanced comfort, safety, and cost-effectiveness. In addition, sustainable architecture focuses on environmentally friendly materials and designs, minimizing the ecological footprint of buildings. With these advancements, the future of real estate investment is set to be both exciting and profitable for those who adapt to these emerging trends.",
      },
      {
        id: 2,
        title: "Why Real Estate is a Safe Investment?",
        image: "https://static.vecteezy.com/system/resources/thumbnails/023/307/449/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
        description: "Learn why real estate is a safe investment option.",
        content:
          "Real estate remains one of the safest investments, providing stability, rental income, and long-term appreciation. Unlike stocks or bonds, which can be volatile and subject to market fluctuations, real estate tends to appreciate over time, making it a relatively stable investment. Additionally, real estate can generate passive income through rental properties, providing an ongoing revenue stream. This makes it especially appealing for investors seeking to diversify their portfolios and minimize risk.",
      },
      {
        id: 3,
        title: "The Rise of Sustainable Building Practices in Real Estate",
        image: "https://via.placeholder.com/600x400?text=Sustainable+Building+Practices",
        description: "Explore how sustainable building practices are reshaping the real estate industry.",
        content:
          "As environmental concerns grow, sustainable building practices are becoming a crucial aspect of the real estate industry. Builders and developers are increasingly focusing on eco-friendly materials, energy-efficient designs, and green construction techniques. These practices not only help reduce the environmental impact of buildings but also offer cost savings to property owners in the form of lower energy bills and maintenance costs. Green roofs, solar panels, rainwater harvesting systems, and energy-efficient windows are just a few examples of how sustainability is being integrated into modern buildings.",
      },
      {
        id: 4,
        title: "The Impact of Technology on Real Estate Transactions",
        image: "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?b=1&s=612x612&w=0&k=20&c=FFc1oX54JEIVF4P5613J9Ng7CaN2rmjSU7m1vsnfi1s=",
        description: "Learn how technology is transforming the way real estate transactions are conducted.",
        content:
          "Technology is revolutionizing the real estate industry by streamlining processes, improving efficiency, and making transactions more transparent. From virtual property tours and 3D modeling to blockchain-based smart contracts, new technologies are transforming how buyers, sellers, and agents interact. Virtual reality (VR) and augmented reality (AR) enable potential buyers to explore properties from the comfort of their homes, saving time and making the decision-making process easier.",
      },
      {
        id: 5,
        title: "Commercial Real Estate: Navigating Post-Pandemic Challenges",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2WmRiouSgj02GpWNOHjwXrPLIiGLqxi1Tg&s",
        description: "Understand the challenges and opportunities in commercial real estate after the pandemic.",
        content:
          "The COVID-19 pandemic has had a profound impact on commercial real estate, forcing businesses to rethink their office space needs and adapt to new working conditions. With the rise of remote and hybrid work models, many companies are downsizing their office spaces, leading to increased vacancies in commercial properties. However, this shift has also created new opportunities, such as the demand for flexible office spaces and co-working environments.",
      },
      // Add more blogs as needed
    ];

    const currentBlog = blogData.find((b) => b.id === parseInt(blogId));
    setBlog(currentBlog);
    setBlogs(blogData); // Set the blogs for the sidebar
  }, [blogId]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-5/6 mx-auto my-10 flex">
      {/* Main Blog Content */}
      <div className="flex-1 mr-10">
        <div className="rounded-3xl overflow-hidden mb-5">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-5">{blog.title}</h1>
        <p className="text-gray-600 mb-10">{blog.description}</p>
        <div className="text-lg text-gray-700">{blog.content}</div>
      </div>

      {/* Sidebar */}
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Other Blogs</h2>
        <div className="space-y-4">
          {blogs
            .filter((b) => b.id !== parseInt(blogId)) // Exclude the current blog
            .map((blog) => (
              <div key={blog.id} className="flex items-center space-x-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-lg font-semibold text-blue-500 hover:underline"
                  >
                    {blog.title}
                  </Link>
                  <p className="text-sm text-gray-500">{blog.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
