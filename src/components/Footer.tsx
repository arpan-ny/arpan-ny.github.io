import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 md:p-8 text-center bg-transparent border-t border-gray-200 mt-8 md:mt-16">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-700 text-sm">
        <a
          href="mailto:work.arpannyati@gmail.com"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          email
        </a>
        {/* <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200">github</a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200">twitter</a> */}
        <a
          href="https://www.linkedin.com/in/arpan-nyati/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          linkedin
        </a>
        <a>|</a>
        <a>© Arpan Nyati</a>
      </div>
    </footer>
  );
};

export default Footer;
