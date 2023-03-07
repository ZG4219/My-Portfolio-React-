import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import MyResume from './components/MyResume';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Header from './components/header';
import Footer from './components/footer';
import { useEffect } from 'react';

import './App.css';
import './index.css';

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/My-Portfolio-React-" element={<Navigate to="/My-Portfolio-React-/AboutMe" />} />
          <Route path="/My-Portfolio-React-/AboutMe" element={<AboutMe />} />
          <Route path="/My-Portfolio-React-/Portfolio" element={<Portfolio />} />
          <Route path="/My-Portfolio-React-/MyResume" element={<MyResume />} />
          <Route path="/My-Portfolio-React-/ContactMe" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
