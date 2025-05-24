// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom"; // For navigation links

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-10">
      {/* Left side: Name/Logo */}
      <div className="text-gray-900 font-extrabold text-2xl tracking-wide">
        <ul className="flex space-x-8 text-lg font-medium text-gray-700">
          <li>
            <Link to="/">Arpan Nyati</Link>
          </li>
          <nav>
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
            </ul>
          </nav>
        </ul>
      </div>
    </header>
  );
};

export default Header;
