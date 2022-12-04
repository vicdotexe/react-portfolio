import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Background from './assets/background.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.querySelector('body').style=`background-image: url(${Background}`
root.render(
    <App />
);

