import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function ContactMe() {
  return (
    <div className="container mx-auto my-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex w-4/5 mx-auto mt-8">
        <div className="md:w-1/3 text-center md:text-left px-6 py-8">
          <h2 className="text-gray-800 text-2xl font-bold">Contact Me</h2>
          <p className="mt-2 text-gray-600">Let's get in touch!</p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a href="https://github.com/zg4219" target="_blank" rel="noopener noreferrer" className="mx-4">
              <FaGithub className="text-3xl text-gray-800 hover:text-gray-900 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/dionne-a-546bb7247/" target="_blank" rel="noopener noreferrer" className="mx-4">
              <FaLinkedin className="text-3xl text-gray-800 hover:text-gray-900 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/sazgcreations/" target="_blank" rel="noopener noreferrer" className="mx-4">
              <FaInstagram className="text-3xl text-gray-800 hover:text-gray-900 transition-colors duration-300" />
            </a>
            <a href="mailto:jr8dionne@yahoo.com" target="_blank" rel="noopener noreferrer" className="mx-4">
              <FaEnvelope className="text-3xl text-gray-800 hover:text-gray-900 transition-colors duration-300" />
            </a>
          </div>
        </div>
        <div className="md:w-2/3 relative">
          <img src="https://via.placeholder.com/640x480" alt="placeholder" className="w-full h-full object-cover object-center" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-gray-900 opacity-75 w-full h-full"></div>
            <p className="text-white z-10 text-center px-6">Photo by Your Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
