// src/routes.js

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/about';
// import Contact from './pages/Contact'; // Keep if needed

function RoutesFile() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* Add more routes/pages as needed */}
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesFile;
