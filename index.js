import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Make sure you have a file named 'index.css' in the same folder
import './index.css'; 
// 2. Make sure you have a file named 'App.js' or 'App.jsx' in the same folder
import App from './App'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
