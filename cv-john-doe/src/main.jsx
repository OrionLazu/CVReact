import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Point d'entrée principal de l'application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
