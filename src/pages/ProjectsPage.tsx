import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[60vh] p-4 sm:p-6">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8" style={{ color: "var(--text-color)" }}>
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-start transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Personal Portfolio Website</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">A modern, responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project</a>
        </div>
        {/* <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-start transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Notes App</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">A simple note-taking app with markdown support and local storage, built using React.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project</a>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-start transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Weather Dashboard</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">A dashboard that displays real-time weather data using a public API, with a clean and responsive UI.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project</a>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsPage;