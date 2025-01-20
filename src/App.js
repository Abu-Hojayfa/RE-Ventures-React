import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Signin from './components/signin/Signin';
import Signup from './components/signin/Signup';
import OurService from './components/pages/oursService/OurService';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  const location = useLocation();

  // Hide Header and Footer for all /dashboard routes
  const hideHeaderFooter = location.pathname.startsWith("/dashboard");

  return (
    <div>
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
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
