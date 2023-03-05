import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import MyResume from './components/MyResume';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Portfolio /> */}
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/MyResume" element={<MyResume />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
