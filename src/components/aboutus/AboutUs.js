import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Welcome Header */}
      <header className="bg-blue-600 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Homelengo</h1>
          <p className="mt-2 text-lg">Your trusted partner in finding your dream home.</p>
        </div>
      </header>

      {/* Agents Section */}
      <AgentsSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Reviews Section */}
      <ReviewsSection />
      
    </div>
  );
};

const AgentsSection = () => {
  const agents = [
    { name: "John Doe", designation: "Real Estate Agent", image: "https://via.placeholder.com/150" },
    { name: "Jane Smith", designation: "Senior Realtor", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="p-6">
                <img src={agent.image} alt={agent.name} className="rounded-full w-24 h-24 mx-auto" />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">{agent.name}</h3>
                <p className="text-gray-600">{agent.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  const specialties = [
    { title: "Property Listings", description: "Access an extensive range of listings tailored to your preferences." },
    { title: "Market Insights", description: "Stay informed with expert market analysis and trends." },
    { title: "Client Support", description: "Enjoy personalized guidance every step of the way." },
  ];

  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">What We Are Good At</h2>
        <p className="text-lg text-gray-700 mb-8">
          We specialize in connecting people to their dream homes, offering expert market insights, and providing
          tailored solutions for every client’s needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div key={index} className="card bg-white shadow-lg">
              <div className="card-body">
                <h3 className="font-bold text-xl mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  const reviews = [
    { text: "Homelengo helped me find my perfect home with ease. The team is fantastic!", author: "Alex Johnson" },
    { text: "Excellent service! Highly recommended for anyone looking for real estate solutions.", author: "Maria Lee" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <p className="text-gray-600 italic">"{review.text}"</p>
                <h3 className="font-bold text-right mt-4">- {review.author}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
