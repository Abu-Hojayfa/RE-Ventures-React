import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Signin from "./components/signin/Signin";
import Signup from "./components/signin/Signup";
import OurService from "./components/pages/oursService/OurService";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import ContactUs from "./components/contactus/ContactUs";
import AboutUs from "./components/aboutus/AboutUs";
import ServicePolicy from "./components/servicepolicy/ServicePolicy";


import FAQ from "./components/faqs/Faqs";

import Blog from "./components/blog/Blog";


const App = () => {
  const location = useLocation();

  // Determine if header and footer should be hidden
  const hideHeaderFooter = location.pathname.startsWith("/dashboard");

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!hideHeaderFooter && <Navbar hideHeaderFooter={hideHeaderFooter} />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/servicepolicy" element={<ServicePolicy />} />
        <Route path="/contactus" element={<ContactUs />} /> 

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;
