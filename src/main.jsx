// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import './index.css';

// Import PrimeReactProvider
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/arya-orange/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';           

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
