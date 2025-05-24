import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-10 ">
      <div className="text-gray-900 font-extrabold text-2xl tracking-wide">
        <Link to="/">Arpan Nyati</Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-lg font-medium text-gray-700">
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
          <ul className="flex flex-col items-end py-4 pr-4 space-y-2 text-lg font-medium text-gray-700">
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
    </header>
  );
};

export default Header;
