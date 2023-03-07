import React from 'react';
import './Header.css'; // import your custom CSS file

function Header(props) {
  return (
    <header className="bg-pink-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-8 px-8 md:px-0 ">
        <div className="text-6xl md:text-5xl font-dancing-script font-bold text-gray-800 text-center md:text-left mb-2 md:mb-0">Dionne Angeles</div>
        <nav className="flex flex-col md:flex-row">
          <a className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm md:text-base font-quicksand font-medium mb-2 md:mb-0" onClick={props.onNavigation('AboutMe')} href="/AboutMe">About Me</a>
          <a className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm md:text-base font-quicksand font-medium mb-2 md:mb-0" onClick={props.onNavigation('Portfolio')} href="/Portfolio">Portfolio</a>
          <a className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm md:text-base font-quicksand font-medium mb-2 md:mb-0" onClick={props.onNavigation('Resume')} href="/MyResume">Resume</a>
          <a className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm md:text-base font-quicksand font-medium" onClick={props.onNavigation('ContactMe')} href="/ContactMe">Contact Me</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
