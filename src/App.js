// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import RoutesFile from './routes';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <RoutesFile />
      <Footer />
    </Router>
  );
}

export default App;
