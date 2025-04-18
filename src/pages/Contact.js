// src/pages/Contact.js
import React from 'react';
import '../styles/contact.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaPinterest } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <hr />
        <div className="contact-text">
          <h3>Ready to elevate your<br />Data Experience?</h3>
          <p>Let's Connect!</p>
        </div>
        <div className="contact-icons">
          <a href="mailto:sarashaikh1701@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/sarashaikh1701" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sara-shaikh-070735192/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://ie.pinterest.com/sararaa17/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
        </div>
      </div>

      <div className="made-with">
        <p>Made with <span>♡</span> and lots of <span>☕</span></p>
      </div>
    </section>
  );
}

export default Contact;
