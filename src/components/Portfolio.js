import React from 'react';

function Portfolio() {
  return (
    <div className="bg-pink-100">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative block">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://picsum.photos/400/300" alt="Project 1" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
              <div className="px-4 py-4">
                <h2 className="text-xl font-bold text-gray-800">Project 1</h2>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative block">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://picsum.photos/400/300" alt="Project 2" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
              <div className="px-4 py-4">
                <h2 className="text-xl font-bold text-gray-800">Project 2</h2>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative block">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://picsum.photos/400/300" alt="Project 3" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
              <div className="px-4 py-4">
                <h2 className="text-xl font-bold text-gray-800">Project 3</h2>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative block">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://picsum.photos/400/300" alt="Project 4" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
              <div className="px-4 py-4">
                <h2 className="text-xl font-bold text-gray-800">Project 4</h2>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative block">
<div className="bg-white shadow-md rounded-lg overflow-hidden">
<img src="https://picsum.photos/400/300" alt="Project 5" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
<div className="px-4 py-4">
<h2 className="text-xl font-bold text-gray-800">Project 5</h2>
<p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative block">
<div className="bg-white shadow-md rounded-lg overflow-hidden">
<img src="https://picsum.photos/400/300" alt="Project 6" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
<div className="px-4 py-4">
<h2 className="text-xl font-bold text-gray-800">Project 6</h2>
<p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
</a>
</div>
</div>
</div>
);
}

export default Portfolio;
