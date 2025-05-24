import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: "var(--app-background-color)" }}>
      <h1 className="text-9xl font-extrabold text-gray-900 mb-4 tracking-tight">
        404
      </h1>
      <p className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
        Page Not Found
      </p>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md leading-relaxed">
        Oops! It looks like the page you're trying to reach doesn't exist.
        Perhaps you typed the address incorrectly, or the page has moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;