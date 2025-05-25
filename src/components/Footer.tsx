import React from "react";

interface FooterProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <footer className="w-full p-4 md:p-8 text-center bg-transparent border-t border-gray-200 mt-8 md:mt-16 relative">
      <div
        className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-700 text-sm"
        style={{ color: "var(--text-color)" }}
      >
        <a
          href="mailto:work.arpannyati@gmail.com"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          email
        </a>
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
      <button
        onClick={toggleDarkMode}
        className="md:hidden absolute bottom-4 right-4 p-3 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors duration-200"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.28 2.712-7.92 6.548-9.21a.75.75 0 0 1 .908.911A7.501 7.501 0 0 0 19.5 12.75c0 1.273-.3 2.474-.832 3.527a.75.75 0 0 0 .911.908z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 6.75a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5z"
            />
          </svg>
        )}
      </button>
    </footer>
  );
};

export default Footer;
