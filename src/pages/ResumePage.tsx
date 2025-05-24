import React from 'react';

const ResumePage: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 mt-20 md:mt-0">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center mb-6">Resume</h1>
      {/* Download Resume Button */}
      {/* <a
        href="/Arpan_Resume.pdf"
        download
        className="mb-6 px-6 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors"
      >
        Download Resume (PDF)
      </a> */}
      {/* Google Docs Resume Button */}
      <a
        href="https://docs.google.com/document/d/1p_xSJnx_m6Qe26CDWyTmXZKnZQDAa9TQ/edit?usp=sharing&ouid=105142803105827680866&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors mb-6"
      >
        View on Google Docs
      </a>
    </div>
  );
};

export default ResumePage;