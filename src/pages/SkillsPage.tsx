import React from 'react';

const SkillsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[60vh] p-4 sm:p-6">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8" style={{ color: "var(--text-color)" }}>
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-start transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Programming Languages</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Python, JavaScript, TypeScript, Java</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-start transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Frontend</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Angular, React, Redux, HTML, CSS, Tailwind CSS</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-start transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Backend</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Node.js, Express, FastAPI</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-start transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Databases</h2>
          <p className="text-zinc-700 dark:text-zinc-300">MongoDB, PostgreSQL, MySQL</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-start transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Tools & Technologies</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Git, Docker, Jenkins, Postman</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;