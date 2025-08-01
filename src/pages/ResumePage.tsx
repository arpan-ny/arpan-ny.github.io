import React from 'react';

const ResumePage: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 mt-20 md:mt-0">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6" style={{ color: "var(--text-color)" }}>
        Resume
      </h1>
      {/* Download Resume Button */}
      {/* <a
        href="/Arpan_Resume.pdf"
        download
        className="mb-6 px-6 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors"
      >
        Download Resume (PDF)
      </a> */}
      <div className="flex space-x-4 mb-6">
        {/* Google Docs Resume Button */}
        <a
          href="https://drive.google.com/file/d/1AMYtQ96NLmYhg36WIm76j0HqJsDxGG7U/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors flex items-center"
        >
          View on Google Docs
        </a>
        {/* Download Resume Button */}
        <a
          href="https://github.com/arpan-ny/arpan-ny.github.io/raw/dev/public/Arpan_Nyati_Resume.pdf"
          download
          className="p-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ResumePage;