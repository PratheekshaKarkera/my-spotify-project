import React from 'react';
import ReactDOM from 'react-dom/client';
// Ensure these files (App.js and index.css) are also in your root folder!
import App from './App.js'; 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
