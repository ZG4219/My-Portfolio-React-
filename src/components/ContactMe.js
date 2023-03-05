import React, { useState } from 'react';
// import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function ContactMe() {
  // Define state variables for the form fields and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // Event handler for name input field
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  // Event handler for email input field
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  // Event handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    }
    if (name && email && /\S+@\S+\.\S+/.test(email)) {
      // Handle form submission logic here
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex w-4/5 mx-auto mt-8">
        <div className="md:w-1/3 text-center md:text-left px-6 py-8">
          <h2 className="text-gray-800 text-2xl font-bold">Contact Me</h2>
          <p className="mt-2 text-gray-600">Let's get in touch!</p>
          {/* Contact form */}
          <form className="mt-6" onSubmit={handleFormSubmit}>
            {/* Name input field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline ${nameError ? 'border-red-500' : ''
                  }`}
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                onBlur={() => !name && setNameError(true)}
              />
              {/* Error message for name input field */}
              {nameError && (
                <p className="text-red-500 text-sm mt-1">Please enter your name</p>
              )}
            </div>
            {/* Email input field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline ${emailError ? 'border-red-500' : ''
                  }`}
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                onBlur={() =>
                  email && !/\S+@\S+\.\S+/.test(email) && setEmailError(true)
                }
              />
              {/* Error message for email input field */}
              {emailError && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
              )}
            </div>
            {/* Message input field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Enter your message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-pink-600"
            >
              Send
            </button>
          </form>
          {/* Social media links */}
          {/* <div className="mt-6 flex justify-center md:justify-start">
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
          </div> */}
        </div>
        {/* Image */}
        <div className="md:w-2/3 relative">
          <img src={require("../assets/Dionne.jpg")} alt="placeholder" className="w-full h-full object-cover object-center" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className=" opacity-75 w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe; 
