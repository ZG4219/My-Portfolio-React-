import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="bg-white py-8 mt-8 flex flex-col md:flex-row justify-center items-center">
      <p className="text-gray-800 font-medium text-sm md:text-base text-center">© {new Date().getFullYear()} My Portfolio </p>
      <div className="mt-4 md:mt-0 flex justify-center items-center">
        <a href="https://github.com/zg4219" className="mx-3 text-gray-800 hover:text-gray-600">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/dionne-a-546bb7247/" className="mx-3 text-gray-800 hover:text-gray-600">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a href="https://www.instagram.com/sazgcreations/" className="mx-3 text-gray-800 hover:text-gray-600">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="mailto:jr8dionne@yahoo.com" target="_blank" rel="noopener noreferrer" className="mx-4">
          <FaEnvelope className="text-3xl text-gray-800 hover:text-gray-900 transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
