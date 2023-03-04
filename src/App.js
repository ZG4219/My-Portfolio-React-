import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import MyResume from './components/MyResume';
import Portfolio from './components/Portfolio'; 
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/myresume" component={MyResume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/ContactForm," component={ContactForm} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
