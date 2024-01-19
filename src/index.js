import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppProvider } from './AppContext';  
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>  
      <Layout />
    </AppProvider>
  </React.StrictMode>,
);