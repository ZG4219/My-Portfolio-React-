import React from 'react';
import MyResume from '../components/MyResume';
import DownloadResume from '../components/DownloadResume';

function ResumePage() {
  return (
    <div>
      <h1>My Resume</h1>
      <MyResume />
      <DownloadResume />
    </div>
  );
}

export default ResumePage;
