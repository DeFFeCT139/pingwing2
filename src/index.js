import React from 'react';
import './css/style.css'
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
