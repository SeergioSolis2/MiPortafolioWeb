import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppProvider } from './componentes/AppContext';  
import Layout from './componentes/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>  
      <Layout />
    </AppProvider>
  </React.StrictMode>,
);