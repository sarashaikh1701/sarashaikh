import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import Logo from '../assets/logo/Sara_Logo.png'; // adjust the path as needed


function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <img src={Logo} alt="Sara Shaikh Logo" className="logo" />
        </Link>
        <nav className="nav">
          <ul>
            {/* <li><a href="#home">Home</a></li> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href="https://drive.google.com/file/d/1QqeYtkXHFlzwidSNcLHLBC6S0sfgzasm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            {/* <Link to="/contact">Contact</Link> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

