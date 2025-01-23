import React from "react";

const AboutUs = () => {
  return (
    <div className="w-5/6 mx-auto my-10">
      {/* Welcome Header */}
      <HeaderSection />
      

      {/* Agents Section */}
      <AgentsSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Reviews Section */}
      <ReviewsSection />
      
    </div>
  );
};

const HeaderSection = () => {
  
  return(
  <section>
    <div className="hero rounded-3xl"
                style={{
                    backgroundImage: "url(https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png)",
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md  py-2 pt-5">
                        <p>Home / AboutUs</p>
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
           </div>
     </section>
  );

};

const AgentsSection = () => {
  const agents = [
    { name: "John Doe", designation: "Real Estate Agent", image: "https://img.freepik.com/premium-vector/agent-logo-vector-detective-logo_776251-7.jpg" },
    { name: "Jane Smith", designation: "Senior Realtor", image: "https://i.pinimg.com/originals/c4/7d/06/c47d067db22cee56659f69afb1fcbad9.png" },
    { name: "Alice Johnson", designation: "Property Consultant", image: "https://ih1.redbubble.net/image.1386979282.5532/ur,pin_large_front,square,600x600.u1.jpg" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title t-justify">
      Shoes!
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
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
