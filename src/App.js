import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Signin from './components/signin/Signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" component={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
