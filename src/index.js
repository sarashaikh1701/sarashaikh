// src/Index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/app.css'; // Global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
