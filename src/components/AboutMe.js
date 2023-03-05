import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faReact, faNodeJs, faDatabase } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
  return (
    <div className="bg-pink-100 flex flex-col justify-center items-center min-h-screen px-4">
      <div className="bg-white p-6 rounded-md shadow-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>
        <p className="text-lg mb-6 text-center">Hey there, I'm [Your Name] - a Full Stack Developer about to graduate this week! I'm always ready for a new challenge, and I'm on the lookout for a company that's ready to take on a total beginner like me. With my sense of humor and infectious energy, I'm sure to bring some fun to any workplace. Let's team up and create something awesome!</p>
        <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">My Skills</h2>
          <div className="flex flex-wrap justify-center items-center">
            <FontAwesomeIcon icon={faHtml5} size="3x" className="m-4 text-orange-500 hover:text-orange-700 transition-all duration-300" />
            <FontAwesomeIcon icon={faCss3} size="3x" className="m-4 text-blue-500 hover:text-blue-700 transition-all duration-300" />
            <FontAwesomeIcon icon={faJsSquare} size="3x" className="m-4 text-yellow-500 hover:text-yellow-700 transition-all duration-300" />
            <FontAwesomeIcon icon={faReact} size="3x" className="m-4 text-blue-500 hover:text-blue-700 transition-all duration-300" />
            <FontAwesomeIcon icon={faDatabase} size="3x" className="m-4 text-green-500 hover:text-green-700 transition-all duration-300" />
            <FontAwesomeIcon icon={faServer} size="3x" className="m-4 text-green-500 hover:text-green-700 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
