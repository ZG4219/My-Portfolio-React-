import React from 'react';

function MyResume() {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">My Resume</h2>
      <p className="text-gray-600 mb-4">Download a copy of my resume below:</p>
      <div className="flex justify-center mb-8">
        <a href="/Dionne's Resume.PDF" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Download Resume (PDF)
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Experience</h3>
          <ul className="list-disc list-inside">
            <li>Lead Count Room Attendant @ Sky River Casino</li>
            <li>Bookkeeper/Lead Clerk @ WinCo Foods</li>
           
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <ul className="list-disc list-inside">
            <li>UC Davis BootCamp</li>
            <li>AMA Computer College, Philippnes</li>
            <li>St. Paul College of Manila</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyResume;
