// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  return (
    <BrowserRouter>
      {/* Main Application Routes */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
