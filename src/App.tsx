import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/impressum.html" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/datenschutz.html" element={<Datenschutz />} />
        {/* Fallback route */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;