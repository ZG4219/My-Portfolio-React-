import React from 'react';

function MyResume() {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">My Resume</h2>
      <p className="text-gray-600 mb-4">Download a copy of my resume below:</p>
      <div className="flex justify-center mb-8">
        <a href="/Dionne's Resume.PDF" target="_blank" rel="noopener noreferrer" className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
          Download Resume (PDF)
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Experience</h3>
          <ul className="list-disc list-inside">
            <li>Lead Count Room Attendant @ Sky River Casino - August 2022 - Present</li>
            <li>Bookkeeper/Lead Clerk @ WinCo Foods - January 2002-June 2022</li>

          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <ul className="list-disc list-inside">
            <li>Full Stack Development, UC Davis BootCamp, Sacramento, CA</li>
            <li>Computer Programming, AMA Computer College, Philippines</li>
            <li>Bachelor of Science in Hotel and Restaurant Management, St. Paul College of Manila, Philippines</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyResume;
