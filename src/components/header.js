import React from 'react';
import AboutMe from '../components/AboutMe';
function Header() {
  return (
    <header className="bg-pink-100">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-lg font-bold text-gray-800">Dionne Angeles</div>
        <nav className="flex">
          <a className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href="#about">About Me</a>
          <a className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href="#portfolio">Portfolio</a>
          <a className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href="#resume">Resume</a>
          <a className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href="#contact">Contact</a>
        </nav>
      </div>
      <AboutMe />
    
    </header>
  );
}

export default Header;
