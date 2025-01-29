import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import ReportPage from './pages/ReportPage';

function App() {
  return (
    <ThemeProvider>
      <Router
  future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;