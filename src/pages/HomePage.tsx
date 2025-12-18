import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          style={{ color: "var(--text-color)" }}
        >
          Arpan Nyati
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8"
          style={{ color: "var(--text-color)" }}
        >
          Product-Minded Software Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-8"
          style={{ color: "var(--text-color)" }}
        >
          <p className="mb-4">
            I build high-quality software solutions that solve real-world
            problems.
          </p>
          <p>
            Currently seeking new opportunities in the AI, startup, or
            developer tooling space.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Link to="/projects">
            <button className="px-6 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors flex items-center">
              View Projects
            </button>
          </Link>
          <a
            href="https://github.com/arpan-ny/arpan-ny.github.io/raw/dev/public/Arpan_Nyati_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors flex items-center">
              Download Resume
            </button>
          </a>
          <Link to="/contact">
            <button className="px-6 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors flex items-center">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
