import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-8 mt-8 flex justify-center items-center ">
      <p className="text-gray-800 font-medium text-sm md:text-base text-center">&copy; {new Date().getFullYear()} My Portfolio 😊</p>
    </footer>
  );
}

export default Footer;
