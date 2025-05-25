import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-10 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div
        className="text-gray-900 dark:text-gray-100 font-extrabold text-2xl tracking-wide"
        style={{ color: "var(--text-color)" }}
      >
        <Link to="/">Arpan Nyati</Link>
      </div>
      <nav className="hidden md:block">
        <ul
          className="flex space-x-8 text-lg font-medium"
          style={{ color: "var(--text-color)" }}
        >
          <li>
            <Link
              to="/notes"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              notes
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-gray-500 hover:border-gray-500"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{ color: "var(--text-color)" }}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-2/3 max-w-xs z-20">
          <ul className="flex flex-col items-end py-4 pr-4 space-y-2 text-lg font-medium text-gray-700 dark:text-gray-200">
            <li>
              <Link
                to="/notes"
                className="block w-full px-4 py-2 hover:text-blue-500 text-right"
                onClick={() => setMenuOpen(false)}
              >
                notes
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block w-full px-4 py-2 hover:text-blue-500 text-right"
                onClick={() => setMenuOpen(false)}
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="block w-full px-4 py-2 hover:text-blue-500 text-right"
                onClick={() => setMenuOpen(false)}
              >
                resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block w-full px-4 py-2 hover:text-blue-500 text-right"
                onClick={() => setMenuOpen(false)}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      <button
        onClick={toggleDarkMode}
        className="hidden md:block ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors duration-200"
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
    </header>
  );
};

export default Header;
