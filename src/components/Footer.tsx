import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-8 text-center bg-transparent border-t border-gray-200 mt-16"> {/* Removed bg-gray-800, added border */}
      <div className="flex justify-center space-x-6 text-gray-700 text-sm">
        <a href="mailto:work.arpannyati@gmail.com" className="hover:text-blue-500 transition-colors duration-200">email</a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200">github</a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200">twitter</a>
        <a href="https://www.linkedin.com/in/arpan-nyati/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200">linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;