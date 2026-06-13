import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Ensure panels and utilities register (they also export named exports)
import './utils.jsx';

const root = document.getElementById('app');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
