import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root').className="h-full flex flex-col bg-sky-800";
root.render(
    <App />
);

