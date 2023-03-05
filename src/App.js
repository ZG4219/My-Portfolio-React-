import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import MyResume from './components/MyResume';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Footer from './components/Footer';

import { useEffect } from 'react';

import './App.css';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe'); // initialize state to AboutMe component

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page); // update state with new page
  }

  let pageToRender = null;
  switch (currentPage) {
    case 'AboutMe':
      pageToRender = <AboutMe />;
      break;
    case 'Portfolio':
      pageToRender = <Portfolio />;
      break;
    case 'MyResume':
      pageToRender = <MyResume />;
      break;
    case 'ContactMe':
      pageToRender = <ContactMe />;
      break;
    default:
      pageToRender = <AboutMe />;
  }

  return (
    <div className="App">
      <Header onNavigation={handleNavigation} />
      {pageToRender}
      <Footer />
    </div>
  );
}

export default App;
